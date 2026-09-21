import avatar from "../../../../assets/author/avatar.webp";

import {
  type CSSProperties,
} from "react";

import {
  Link,
  
  useParams,
} from "react-router-dom";

import type {
  PublicPostDetail,
  PublicPostSummary,
} from "../viewmodel/public-post-detail";

import { usePostsBySlug } from "../hooks/usePostBySlug";

import styles from "./PageDetailPost.module.css";
import { NavBox } from "../../../navigation/components/NavBox";

type PostDetailProps = {
  /**
   * Pode receber:
   *
   * - últimos posts da categoria
   * - ou últimos posts gerais como fallback
   */
  morePosts?: PublicPostSummary[];

  /**
   * Desktop mostra normalmente.
   * Mobile fica escondida por padrão.
   */
  showImageOnMobile?: boolean;

  className?: string;
};

export function PostDetail({
  morePosts = [],
  showImageOnMobile = false,
  className,
}: PostDetailProps) {
  

  const { slug } = useParams<{
    slug: string;
  }>();

  const {
    data: post,
  } = usePostsBySlug(
    slug || null,
  );

  if (!slug) {
    return (
      <div>
        Post não encontrado
      </div>
    );
  }

  /*
   * Se o hook tiver isLoading/error,
   * depois podemos tratar isso melhor.
   */
  if (!post) {
    return null;
  }

  const rootClassName = [
    styles.root,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cssVariables = {
    "--category-color":
      post.category.color,
  } as CSSProperties;

  const hasImage = Boolean(
    post.image?.url,
  );



  return (
    <main
      className={rootClassName}
      style={cssVariables}
    >
      {/* =================================
          NAVIGATION
      ================================= */}

      <div className={styles.fullNavSlot}>
  <NavBox
  className={styles.detailNav}
     />
</div>

      {/* =================================
          DETAIL LAYOUT
      ================================= */}

      <div className={styles.grid}>
        {/* ==============================
            HERO
        ============================== */}

        <header
          className={[
            styles.box,
            styles.titleBox,
          ].join(" ")}
        >
          <div
            className={styles.titleTop}
          >
            <Link
              to={`/?category=${encodeURIComponent(
                post.category.slug,
              )}`}
              className={
                styles.category
              }
            >
              {post.category.title}
            </Link>

            <time
              dateTime={
                post.publishedAt
              }
              className={
                styles.titleDate
              }
            >
              {formatDate(
                post.publishedAt,
              )}
            </time>
          </div>

          <h1
            className={styles.title}
          >
            {post.title}
          </h1>

          <div
            className={styles.heroDivider}
          />

          <div
            className={styles.summary}
          >
            <span
              className={
                styles.sectionCode
              }
            >
              01 // SUMMARY
            </span>

            <p
              className={
                styles.description
              }
            >
              {post.description}
            </p>
          </div>
        </header>

        {/* ==============================
            AUTHOR
        ============================== */}

        <aside
          className={[
            styles.box,
            styles.authorBox,
          ].join(" ")}
        >
          <span
            className={
              styles.authorLabel
            }
          >
            // AUTHOR
          </span>

          <div
            className={
              styles.authorIdentity
            }
          >
            <AuthorAvatar
              author={post.author}
              large
            />

            <div
              className={
                styles.authorName
              }
            >
              <span>
                Written by{" "}
              </span>

              <strong>
                {post.author.name}
              </strong>
            </div>
          </div>

          {post.author.bio && (
            <p
              className={
                styles.authorBio
              }
            >
              {post.author.bio}
            </p>
          )}
        </aside>

        {/* ==============================
            POST IMAGE
        ============================== */}

        {hasImage &&
          post.image && (
            <figure
              className={[
                styles.box,
                styles.imageBox,

                !showImageOnMobile
                  ? styles.hideImageMobile
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <img
                src={
                  post.image.url
                }
                alt={
                  post.image.alt ??
                  post.title
                }
              />
            </figure>
          )}

        {/* ==============================
            CONTENT
        ============================== */}

        <article
          className={[
            styles.box,
            styles.contentBox,
          ].join(" ")}
        >
          <div
            className={
              styles.content
            }
            dangerouslySetInnerHTML={{
              /**
               * O HTML vem do TipTap.
               *
               * Idealmente sanitizado
               * no backend ou antes
               * da persistência.
               */
              __html:
                post.content,
            }}
          />
        </article>

        {/* ==============================
            MORE POSTS
        ============================== */}

        {morePosts.length > 0 && (
          <section
            className={[
              styles.box,
              styles.moreSection,
            ].join(" ")}
          >
            <header
              className={
                styles.moreHeader
              }
            >
              <h2>
                More from{" "}
                <span>
                  {
                    post.category
                      .title
                  }
                </span>
              </h2>

              <Link
                to={`/?category=${encodeURIComponent(
                  post.category.slug,
                )}`}
              >
                View all

                <span>→</span>
              </Link>
            </header>

            <div
              className={
                styles.moreGrid
              }
            >
              {morePosts
                .slice(0, 3)
                .map((item) => (
                  <RelatedPostCard
                    key={item.id}
                    post={item}
                  />
                ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

/* ============================================
   RELATED POST
============================================ */

type RelatedPostCardProps = {
  post: PublicPostSummary;
};

function RelatedPostCard({
  post,
}: RelatedPostCardProps) {
  const style = {
    "--post-color":
      post.category.color,
  } as CSSProperties;

  return (
    <Link
      to={`/posts/${post.slug}`}
      className={
        styles.relatedPost
      }
      style={style}
    >
      <div
        className={
          styles.relatedPostTop
        }
      >
        <span>
          {post.category.title}
        </span>

        <time
          dateTime={
            post.publishedAt
          }
        >
          {formatDate(
            post.publishedAt,
          )}
        </time>
      </div>

      <h3>
        {post.title}
      </h3>

      {post.description && (
        <p>
          {post.description}
        </p>
      )}

      <footer>
        <span>
          By {post.author.name}
        </span>

        <span
          className={
            styles.relatedArrow
          }
        >
          →
        </span>
      </footer>
    </Link>
  );
}

/* ============================================
   AUTHOR
============================================ */

type AuthorAvatarProps = {
  author:
    PublicPostDetail["author"];

  large?: boolean;
};

function AuthorAvatar({
  author,
  large = false,
}: AuthorAvatarProps) {
  return (
    <img
      src={avatar}
      alt={author.name}
      className={[
        styles.authorAvatar,

        large
          ? styles.authorAvatarLarge
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

/* ============================================
   DATE
============================================ */

function formatDate(
  value: string,
) {
  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  ).format(
    new Date(value),
  );
}


