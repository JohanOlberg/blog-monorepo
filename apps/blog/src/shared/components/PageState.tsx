import { Link } from "react-router-dom";
import { NavBox } from "../../features/navigation/components/NavBox";
import styles from "./PageState.module.css";

type PageStateProps = {
  kind: "loading" | "error" | "not-found";
  title: string;
  message: string;
  onRetry?: () => void;
  isRetrying?: boolean;
};

export function PageState({
  kind,
  title,
  message,
  onRetry,
  isRetrying = false,
}: PageStateProps) {
  return (
    <div className={styles.page}>
      <div className={styles.navigationSlot}>
        <NavBox className={styles.navigation} />
      </div>
      <section
        className={styles.panel}
        role={kind === "error" ? "alert" : kind === "loading" ? "status" : undefined}
        aria-busy={kind === "loading" || isRetrying}
      >
        <span className={styles.code}>
          {kind === "not-found" ? "404" : kind === "loading" ? "LOADING" : "REQUEST ERROR"}
        </span>
        <h1>{title}</h1>
        <p>{message}</p>
        <div className={styles.actions}>
          {onRetry && (
            <button type="button" onClick={onRetry} disabled={isRetrying}>
              {isRetrying ? "Trying again…" : "Try again"}
            </button>
          )}
          <Link to="/">Back to the blog</Link>
        </div>
      </section>
    </div>
  );
}
