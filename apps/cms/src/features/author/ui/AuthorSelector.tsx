import "./AuthorSelector.css";
import type { Author } from "../model/author.types";
import { useAuthors } from "../hooks/useAuthor";
import { useChangeAuthor } from "../../post/hooks/useChangeAuthor";

type AuthorSelectorProps = {
  postId?: number;
  currentAuthor?: Author;
  onSelectAuthor?: (author: Author) => void;
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
  postId,
  currentAuthor,
  onSelectAuthor,
}: AuthorSelectorProps) {
  const { data: authors, isLoading, isError } = useAuthors();
  const { mutate, isPending } = useChangeAuthor();

  function handleSelectAuthor(author: Author) {
    if (postId) {
      mutate({
        postId,
        authorId: author.id,
      });

      return;
    }

    onSelectAuthor?.(author);
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
              {currentAuthor.avatarUrl}
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
            <span className="author-avatar author-avatar--empty">?</span>

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
                onClick={() => handleSelectAuthor(author)}
                disabled={isPending}
              >
                Select
              </button>
            </article>
          ))}
      </div>
    </section>
  );
}