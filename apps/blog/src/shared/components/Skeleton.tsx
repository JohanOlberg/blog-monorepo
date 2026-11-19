
import "./Skeleton.css";

export function Skeleton() {
  return (
    <div className="bento-skeleton">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className={`bento-skeleton__item ${
            index < 12
              ? "bento-skeleton__item--dark"
              : index < 16
              ? "bento-skeleton__item--medium"
              : "bento-skeleton__item--light"
          }`}
        />
      ))}
    </div>
  );
}
