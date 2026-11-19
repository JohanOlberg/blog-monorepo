import { ComposeLayout } from "../compose/composeLayout";
import { usePosts } from "../hooks/usePostsList";
import type { PatternGroup } from "../model/pattern";
import styles from "./BoxListContainer.module.css";
import { LogoBox } from "./LogoBox";
import { NavBox } from "../../../navigation/components/NavBox";
import { PostCard } from "./PostCard";
import { useSearchParams } from "react-router-dom";
import { SearchInfoBox } from "./SearchInfoBox";
import { NotFoundResults } from "./NotFoundResults";
import type React from "react";
import { FewResults } from "./FewResultsBento";
import { fewResultsPieces, notResultsPieces } from "../model/ResultsPieces";
import { useMemo } from "react";
import { Skeleton } from "../../../../shared/components/Skeleton";
import { PageState } from "../../../../shared/components/PageState";

export function BoxListContainer() {
  const [searchParams] = useSearchParams();
  let content: PatternGroup[] = [];

  const fewResult = useMemo(() => {
    return fewResultsPieces[
      Math.floor(Math.random() * fewResultsPieces.length)
    ];
  }, []); // O array vazio [] garante que só roda no carregamento inicial

  const notResult = useMemo(() => {
    return notResultsPieces[
      Math.floor(Math.random() * notResultsPieces.length)
    ];
  }, []);

  const search = searchParams.get("search");
  const category = searchParams.get("category") || null;
  const sort = searchParams.get("sort");
  let isFiltered = false;

  if (search || category || sort) {
    isFiltered = true;
  }

  const { data: posts, isLoading, isSuccess, isFetching, isError, refetch } = usePosts({ search, category, sort });
  let qtdPosts = 0;
  type CategoryInfo = {
    title: string | null;
    color: string | null;
  };
  let categoryInfo: CategoryInfo[] = [];

  if (posts?.length) {
    content = ComposeLayout(posts, isFiltered);
    qtdPosts = posts.length;
    categoryInfo = posts.length
      ? posts.map((post) => ({
          title: post.category.title,
          color: post.category.color,
        }))
      : [
          {
            title: category,
            color: null,
          },
        ];
  }

  if (isError) {
    return (
      <PageState
        kind="error"
        title="We couldn't load the articles"
        message="Please try again. Your search and filters will be kept."
        onRetry={() => { void refetch(); }}
        isRetrying={isFetching}
      />
    );
  }

  return (
    <div
      className={`
    ${styles["box-grid"]}
    ${isFiltered ? styles["box-grid--content"] : styles["box-grid--home"]}
  `}
    >
      {isFiltered ? (
        <div
          className={`${styles.patterns} ${styles[`pattern-b`]}`}
          style={{ "flex-shrink": 0 } as React.CSSProperties}
        >
          <div className={styles[`box-1--area`]}>
            <LogoBox size={`box`} />
          </div>
          <div
            className={`${styles[`box-2--area`]} ${styles.box}`}
            style={{ "--bg-category": "#ff6622" } as React.CSSProperties}
          >
            <NavBox />
          </div>
          <div
            className={`${styles[`box-3--area`]} ${styles.box}`}
            style={{ "--bg-category": "#ff6688" } as React.CSSProperties}
          >
            <SearchInfoBox
              resultsCount={qtdPosts}
              category={categoryInfo}
              search={search}
              sort={sort}
            />
          </div>
        </div>
      ) : null}
      {isLoading || isFetching ? (
        <>
          <Skeleton></Skeleton>
        </>
      ) : (
        <>
          {isSuccess && qtdPosts === 0 && (
            <>
              <NotFoundResults category={category} quantity={0} search={search} />

              <FewResults
                imageSrc={notResult.image}
                imageAlt={notResult.altImg}
                actionLabel="View all articles"
                description={notResult.alt}
                joke={notResult.joke}
                key={1}
              />
            </>
          )}

          {qtdPosts > 0 &&
            content?.map((con, indexCon) => (
              <div
                key={indexCon}
                className={`${styles.patterns} ${styles[con.patternName]}`}
              >
                {con.slots.map((post, indexPost) => {
                  if (post.content.kind === "post") {
                    return (
                      <div
                        key={indexPost}
                        className={`${styles[`${post.area}--area`]} ${styles.box}`}
                        style={
                          {
                            "--bg-category": post.content.data.category.color,
                          } as React.CSSProperties
                        }
                      >
                        <PostCard
                          slug={`${post.content.data.slug}`}
                          title={`${post.content.data.title}`}
                          description={`${post.content.data.description}`}
                          author={`${post.content.data.author.name}`}
                          publishedAt={`${post.content.data.publishedAt}`}
                          category={{
                            title: post.content.data.category.title,
                            color: post.content.data.category.color,
                          }}
                        />
                      </div>
                    );
                  }
                  if (post.content.kind === "logo") {
                    return (
                      <div
                        key={indexPost}
                        className={styles[`${post.area}--area`]}
                      >
                        <LogoBox size={`${post.content.variant}`} />
                      </div>
                    );
                  }
                  if (post.content.kind === "nav") {
                    return (
                      <div
                        key={indexPost}
                        className={`${styles[`${post.area}--area`]} ${styles.box}`}
                        style={
                          { "--bg-category": "#ff6622" } as React.CSSProperties
                        }
                      >
                        <NavBox />
                      </div>
                    );
                  }
                })}
              </div>
            ))}
          {/* 3. ADICIONAL: Se tiver posts, mas forem MENOS que 5, o FewResults aparece LOGO ABAIXO dos posts */}
          {qtdPosts > 0 && qtdPosts < 5 && (
            <FewResults
              imageSrc={fewResult.image}
              imageAlt={fewResult.altImg}
              actionLabel="View all articles"
              description={fewResult.alt}
              joke={fewResult.joke}
              key={1}
            />
          )}
        </>
      )}
    </div>
  );
}
