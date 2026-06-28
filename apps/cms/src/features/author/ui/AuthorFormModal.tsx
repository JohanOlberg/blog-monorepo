import { useState } from "react";
import type { Author } from "../model/author.types";
//import { useCreateAuthor } from "../hooks/useCreateAuthor";
import { useAuthorUpdate } from "../hooks/useAuthorUpdate";
import "./AuthorFormModal.css";

type AuthorFormModalProps = {
  author: Author | null;
  onClose: () => void;
};

export function AuthorFormModal({ author, onClose }: AuthorFormModalProps) {
  const isEditMode = Boolean(author);

  const [name, setName] = useState(author?.name ?? "");
  const [bio, setBio] = useState(author?.bio ?? "");
  const [avatarUrl, setAvatarUrl] = useState(author?.avatarUrl ?? "");
  const [status, setStatus] = useState(author?.status ?? "ACTIVE");
  const [userId, setUserId] = useState(author?.userId?.toString() ?? "");

  //const createAuthor = useCreateAuthor();
  if(!author){throw new Error("erroS")}
  const updateAuthor = useAuthorUpdate(author?.id);

  //const isPending = createAuthor.isPending || updateAuthor.isPending;
const isPending = updateAuthor.isPending;
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isEditMode && author) {
      updateAuthor.mutate(
        {
          name,
          bio: bio.trim() === "" ? null : bio,
          avatarUrl: avatarUrl.trim() === "" ? null : avatarUrl,
          status,
        },
        {
          onSuccess: onClose,
        }
      );

      return;
    }
/*
    createAuthor.mutate(
      {
        name,
        bio: bio.trim() === "" ? null : bio,
        avatarUrl: avatarUrl.trim() === "" ? null : avatarUrl,
        userId: Number(userId),
      },
      {
        onSuccess: onClose,
      }
    );*/
  }

  return (
    <div className="author-form-modal-overlay">
      <div className="author-form-modal">
        <header className="author-form-modal__header">
          <span>{isEditMode ? "Edit author" : "Create author"}</span>
          <h2>{isEditMode ? author?.name : "New author"}</h2>
        </header>

        <form className="author-form-modal__form" onSubmit={handleSubmit}>
          <label className="author-form-modal__field">
            <span>Name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Author name"
            />
          </label>

          <label className="author-form-modal__field">
            <span>Bio</span>
            <textarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              placeholder="Short author bio"
              rows={4}
            />
          </label>

          <label className="author-form-modal__field">
            <span>Avatar</span>
            <input
              value={avatarUrl}
              onChange={(event) => setAvatarUrl(event.target.value)}
              placeholder="Initials, image URL, or empty"
            />
          </label>

          {!isEditMode && (
            <label className="author-form-modal__field">
              <span>User ID</span>
              <input
                value={userId}
                onChange={(event) => setUserId(event.target.value)}
                placeholder="Linked user id"
                type="number"
              />
            </label>
          )}

          {isEditMode && (
            <label className="author-form-modal__field">
              <span>Status</span>
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as Author["status"])
                }
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
                <option value="BLOCKED">BLOCKED</option>
              </select>
            </label>
          )}

          <footer className="author-form-modal__actions">
            <button
              type="button"
              className="author-form-modal__button author-form-modal__button--secondary"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="author-form-modal__button author-form-modal__button--primary"
              disabled={isPending}
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}