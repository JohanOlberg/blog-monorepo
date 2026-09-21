import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";


type PostCardProps = {
  slug:string
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  category: {
    title: string;
    color: string;
  };
};

export function PostCard({
  slug,
  title,
  description,
  author,
  publishedAt,
  category,
}: PostCardProps) {
  return (
    <Link style={{"textDecoration":"none"}} to={`/posts/${slug}`}>
    <article
      className={styles["post-card"]}
      style={{
        "--category-color": category.color,
      } as React.CSSProperties}
    >
      <header className={styles["post-card__header"]}>
        <span className={styles["post-card__category"]}>
          {category.title}
        </span>

        <time
          className={styles["post-card__date"]}
          dateTime={publishedAt}
        >
          {new Date(publishedAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </time>
      </header>

      <div className={styles["post-card__content"]}>
        <h2 className={styles["post-card__title"]}>
          {title}
        </h2>

        <p className={styles["post-card__description"]}>
          {description}
        </p>
      </div>

      <footer className={styles["post-card__footer"]}>
        <span className={styles["post-card__author"]}>
          By {author}
        </span>

        <span className={styles["post-card__arrow"]}>
          →
        </span>
      </footer>
    </article>
    </Link>
  );
}