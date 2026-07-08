import { useState } from "react";
import type { Author, AuthorFormState } from "../model/author.types";
import { useAuthorCreate } from "../hooks/useAuthorCreate";
import { useAuthorUpdate } from "../hooks/useAuthorUpdate";
import "./AuthorFormModal.css";

type AuthorFormModalProps = {
  author: Author | null;
  onClose: () => void;
};

export function AuthorFormModal({ author, onClose }: AuthorFormModalProps) {
 
  const isEditMode = Boolean(author);

  const [form, setForm] = useState<AuthorFormState>({
      name: author?.name ?? "",
      bio: author?.bio ?? "",
      avatarUrl: author?.avatarUrl ?? "",
      status: author?.status ?? "ACTIVE",
      userId: author?.userId ?? null,
  });


  const updateAuthor = useAuthorUpdate(author?.id);

  const createAuthor = useAuthorCreate();

  const isPending = createAuthor.isPending || updateAuthor.isPending;


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isEditMode) {
        updateAuthor.mutate(
          {
            name: form?.name ?? "",
            bio: form?.bio ?? "",
            avatarUrl: form?.avatarUrl ?? "",        
          },
          {
            onSuccess: onClose,
          }
        );
    } else {
      if (!form.userId) return;
        createAuthor.mutate(
          {
            name: form.name,
            bio: form?.bio ?? "",
            avatarUrl: form?.avatarUrl ?? "",
            userId: form.userId ,
            status: form.status ?? "ACTIVE",
          },
          {
            onSuccess: onClose,
          }
        );
    }
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
              value={form.name}
              onChange={(event) => setForm({...form, name: event.target.value})}
              placeholder="Author name"
            />
          </label>

          <label className="author-form-modal__field">
            <span>Bio</span>
            <textarea
              value={form.bio}
              onChange={(event) => setForm({...form, bio: event.target.value})}
              placeholder="Short author bio"
              rows={4}
            />
          </label>

          <label className="author-form-modal__field">
            <span>Avatar</span>
            <input
              value={form.avatarUrl}
              onChange={(event) => setForm({...form, avatarUrl: event.target.value})}
              placeholder="Initials, image URL, or empty"
            />
          </label>

          {!isEditMode && (
            <label className="author-form-modal__field">
              <span>Linked Account</span>
              <input
                value={Number(form.userId)}
                onChange={(event) =>
                  setForm({
                    ...form,
                    userId: event.target.value
                      ? Number(event.target.value)
                      : null,
                  })
                }
                placeholder="Linked user id"
                type="number"
              />
            </label>
          )}

          {isEditMode && (
            <label className="author-form-modal__field">
              <span>Status</span>
              <select
                value={form.status}
                onChange={(event) =>
                  setForm({...form, status: event.target.value as Author["status"]})
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
