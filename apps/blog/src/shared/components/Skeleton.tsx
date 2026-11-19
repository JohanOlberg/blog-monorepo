import "./Skeleton.css";

const rows = [
  [2, 1, 1], // 1 1 2 3
  [1, 1, 2], // 1 2 3 3
  [2, 2],    // 1 1 2 2
  [1, 2, 1], // 1 2 2 3
  [1, 3],    // 1 3 3 3
  [2, 1, 1], // 1 1 2 3
];

export function Skeleton() {
  return (
    <div className="bento-skeleton" role="status" aria-label="Loading posts">
      {rows.map((row, rowIndex) => (
        <div className="bento-skeleton__row" key={rowIndex} aria-hidden="true">
          {row.map((span, index) => (
            <div
              className="bento-skeleton__item"
              key={index}
              style={{ gridColumn: `span ${span}` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}