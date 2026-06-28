import { useState } from "react";
import { useAuthors } from "../hooks/useAuthor";
import { AuthorFormModal } from "../ui/AuthorFormModal";
import type { Author } from "../model/author.types";
import "./AuthorListPage.css";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function AuthorListPage() {
  const { data: authors, isLoading, isError } = useAuthors();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);

  function handleCreate() {
    setSelectedAuthor(null);
    setIsModalOpen(true);
  }

  function handleEdit(author: Author) {
    setSelectedAuthor(author);
    setIsModalOpen(true);
  }

  if (isLoading) return <p>Loading authors...</p>;
  if (isError) return <p>Failed to load authors.</p>;

  return (
    <main className="authors-page">
      <header className="authors-page__hero">
        <div>
          <span>Settings</span>
          <h1>Authors</h1>
          <p>Manage editorial identities connected to users and posts.</p>
        </div>

        <button className="authors-page__create" onClick={handleCreate}>
          New author
        </button>
      </header>

      <section className="authors-panel">
        <header className="authors-panel__header">
          <span>Author</span>
          <span>User email</span>
          <span>Status</span>
          <span>Actions</span>
        </header>

        <div className="authors-panel__list">
          {authors?.map((author) => (
            <article className="authors-row" key={author.id}>
              <div className="authors-row__identity">
                <div className="authors-row__avatar">
                  {author.avatarUrl || getInitials(author.name)}
                </div>

                <div>
                  <strong>{author.name}</strong>
                  <small>{author.bio || "No bio added"}</small>
                </div>
              </div>

              <div className="authors-row__email">{author.email}</div>

              <div>
                <span
                  className={`authors-row__status authors-row__status--${author.status.toLowerCase()}`}
                >
                  {author.status}
                </span>
              </div>

              <div className="authors-row__actions">
                <button onClick={() => handleEdit(author)}>Edit</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <AuthorFormModal
          author={selectedAuthor}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </main>
  );
}