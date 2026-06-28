import type { AuthorUpdate, AuthorStatus } from "../model/author.types";
import React, { useState } from "react";
import { useAuthorUpdate } from "../hooks/useAuthorUpdate";
import "./AuthorEditModal.css";
import { useQueryClient } from "@tanstack/react-query";

type AuthorEditModalProps = {
  author: AuthorUpdate;
  onClose: () => void;
  postId: number;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function AuthorEditModal({
  author,
  onClose,
  postId,
}: AuthorEditModalProps) {
  const queryClient = useQueryClient();

  const [name, setName] = useState(author.name);
  const [bio, setBio] = useState(author.bio ?? "");
  const [avatarUrl, setAvatarUrl] = useState(author.avatarUrl ?? "");
  const [status, setStatus] = useState<AuthorStatus>(author.status);

  const { mutate, isPending } = useAuthorUpdate(author.id);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    mutate(
      {
        name,
        bio: bio.trim() === "" ? null : bio,
        avatarUrl: avatarUrl.trim() === "" ? null : avatarUrl,
        status,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["authors"] });
          queryClient.invalidateQueries({ queryKey: ["posts"] });
          queryClient.invalidateQueries({ queryKey: ["posts", postId] });

          onClose();
        },
      }
    );
  }

  return (
    <div className="author-edit-modal-overlay">
      <div className="author-edit-modal">
        <header className="author-edit-modal__header">
          <span>Edit author</span>

          <div className="author-edit-modal__identity">
            <span className="author-edit-modal__avatar">
              {avatarUrl ? (
                <img src={avatarUrl} alt={name} />
              ) : (
                getInitials(name)
              )}
            </span>

            <div>
              <h2>{name}</h2>
              <small>{author.email}</small>
            </div>
          </div>
        </header>

        <form className="author-edit-modal__form" onSubmit={handleSubmit}>
          <label className="author-edit-modal__field">
            <span>Name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className="author-edit-modal__field">
            <span>Email</span>
            <input value={author.email} disabled />
          </label>

          <label className="author-edit-modal__field">
            <span>Bio</span>
            <textarea
              value={bio}
              onChange={(event) => setBio(event.target.value)}
              rows={4}
            />
          </label>

          <label className="author-edit-modal__field">
            <span>Avatar URL</span>
            <input
              value={avatarUrl}
              onChange={(event) => setAvatarUrl(event.target.value)}
              placeholder="Optional image URL"
            />
          </label>

          <label className="author-edit-modal__field">
            <span>Status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as AuthorStatus)}
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
              <option value="BLOCKED">BLOCKED</option>
            </select>
          </label>

          <footer className="author-edit-modal__actions">
            <button
              type="button"
              className="author-edit-modal__button author-edit-modal__button--secondary"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="author-edit-modal__button author-edit-modal__button--primary"
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