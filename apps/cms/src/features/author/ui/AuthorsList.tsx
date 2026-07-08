import type { AuthorListItem } from "../model/author.types";
import "./authorsList.css";



type AuthorsListProps = {
  authorsList: AuthorListItem[];
  selectedAuthorId: number | undefined;
  isLoading?: boolean;
  onSelectAuthor: (authorId: number) => void;
};

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function AuthorsList({
  authorsList ,
  selectedAuthorId,
  isLoading = false,
  onSelectAuthor,
}: AuthorsListProps) {
  if (isLoading) {
    return (
      <div className="authors-list__feedback">
        Loading authors...
      </div>
    );
  }

  if (authorsList.length === 0) {
    return (
      <div className="authors-list__feedback">
        <strong>No authors found</strong>

        <p>Create your first author using the editor.</p>
      </div>
    );
  }

  return (
    <div className="authors-list">
      <div className="authors-list__header">
        <h2>Authors</h2>

        <span>{authorsList.length}</span>
      </div>

      <ul className="authors-list__items">
        {authorsList.map((author) => {
          const isSelected = selectedAuthorId === author.id;

          return (
            <li key={author.id}>
              <button
                className={`authors-list__item ${
                  isSelected ? "authors-list__item--selected" : ""
                }`}
                type="button"
                onClick={() => onSelectAuthor(author.id)}
                aria-pressed={isSelected}
              >
                <span className="authors-list__avatar">
                  {getInitials(author.name)}
                </span>

                <span className="authors-list__information">
                  <strong className="authors-list__name">
                    {author.name}
                  </strong>

                  <span className="authors-list__email">
                    {author.email}
                  </span>

                  <span
                    className={`authors-list__status authors-list__status--${author.status.toLowerCase()}`}
                  >
                    {author.status}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}