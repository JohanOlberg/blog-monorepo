import type { CSSProperties } from "react";
import type { PostListItem } from "../model/public-post-summary";

import styles from "./PostCard.module.css";

interface PostCardProps {
  post: PostListItem;
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export function PostCard({ post }: PostCardProps) {
  const date = new Date(post.createdAt);

  const formattedDate = Number.isNaN(date.getTime())
    ? null
    : dateFormatter.format(date);

  return (
    <article
      className={styles.card}
      style={
        {
          "--category-color": post.category.color,
        } as CSSProperties
      }
    >
      <header className={styles.header}>
        <span className={styles.category}>
          {post.category.title}
        </span>
      </header>

      <div className={styles.content}>
        <h2 className={styles.title}>
          {post.title}
        </h2>

        <p className={styles.description}>
          {post.description}
        </p>
      </div>

      <footer className={styles.meta}>
        <span className={styles.author}>
          by <strong>{post.author.name}</strong>
        </span>

        {formattedDate && (
          <time
            className={styles.date}
            dateTime={date.toISOString()}
          >
            {formattedDate}
          </time>
        )}
      </footer>
    </article>
  );
}