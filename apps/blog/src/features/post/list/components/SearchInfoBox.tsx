import type { CSSProperties } from "react";
import styles from "./SearchInfoBox.module.css";

type CategoryInfo = {
    title: string | null;
    color: string | null;
  };

type SearchInfoBoxProps = {
  search?: string | null;
  category?: CategoryInfo[] | null;
  sort?: string | null;
  resultsCount: number;
};

export function SearchInfoBox({
  search,
  category,
  sort,
  resultsCount,
}: SearchInfoBoxProps) {
    const uniqueCategories = [
  ...new Map(category?.map((item) => [item.title, item])).values(),
];
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <span className={styles.code}>
          {search ? "SEARCH // RESULTS" : "FILTER // RESULTS"}
        </span>

        <span className={styles.count}>
          {resultsCount.toString().padStart(2, "0")}
        </span>
      </header>

      <div className={styles.content}>
        {search && (
          <div className={styles.query}>
            <span className={styles.queryLabel}>QUERY</span>
            <strong className={styles.queryValue}>
              “{search}”
            </strong>
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.posts}>
            {resultsCount} {resultsCount === 1 ? "POST" : "POSTS"}
          </span>

          <div className={styles.filters}>
            {uniqueCategories?.map((item) => {
              const categoryStyle = {
                "--filter-color": item.color,
              } as CSSProperties;

              return (
                <span
                  key={item.title}
                  className={styles.category}
                  style={categoryStyle}
                >
                  <span className={styles.categoryDot} />
                  {item.title}
                </span>
              );
            })}

            {sort && (
              <span className={styles.sort}>
                {sort}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
