import "./AuthorSelector.css";
import type { Author } from "../model/author.types";
import { useAuthors } from "../hooks/useAuthor";

type AuthorSelectorProps = {
  currentAuthor: Author | null;
  mode: "CREATE" | "EDIT";
  isSaving?: boolean;
  onChangeAuthor: (author: Author) => void;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function AuthorSelector({
  currentAuthor,
  isSaving = false,
  onChangeAuthor,
}: AuthorSelectorProps) {
  const { data: authors, isLoading, isError } = useAuthors();

  function handleSelectAuthor(author: Author) {
    onChangeAuthor(author);
  }

  if (isLoading) {
    return (
      <section className="author-widget">
        <p>Loading authors...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="author-widget">
        <p>Failed to load authors.</p>
      </section>
    );
  }

  return (
    <section className="author-widget">
      <header className="author-widget__header">
        <span>Author</span>
        <strong>Content Signature</strong>
      </header>

      {currentAuthor ? (
        <div className="author-current">
          <div className="author-main-info">
            <div className="authors-avatar">
              {currentAuthor.avatarUrl || getInitials(currentAuthor.name)}
            </div>

            <div>
              <strong>{currentAuthor.name}</strong>
              <small>{currentAuthor.email}</small>
              <small>Current author</small>
            </div>
          </div>
        </div>
      ) : (
        <div className="author-current">
          <div className="author-main-info">
            <span className="author-avatar author-avatar--empty" />

            <div>
              <strong>No author selected</strong>
              <small>Select an author below</small>
            </div>
          </div>
        </div>
      )}

      <div className="author-list">
        {authors
          ?.filter((author) => author.id !== currentAuthor?.id)
          .map((author) => (
            <article className="author-item" key={author.id}>
              <div className="author-main-info">
                <div className="authors-avatar">
                  {author.avatarUrl || getInitials(author.name)}
                </div>

                <div>
                  <strong>{author.name}</strong>
                  <small>{author.email}</small>
                  <small>{author.status}</small>
                </div>
              </div>

              <button
                className="author-small-btn"
                type="button"
                onClick={() => handleSelectAuthor(author)}
                disabled={isSaving}
              >
                Select
              </button>
            </article>
          ))}
      </div>
    </section>
  );
}