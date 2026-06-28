import type { Category } from "../model/category.types";
import React, { useState } from "react";
import { useCategoryUpdate } from "../hooks/useCategoryUpdate.js"
import { convertToSlug } from "../../../shared/util/convert-to-slug";
import "./CategoryEditModal.css";
import { useQueryClient } from "@tanstack/react-query";

type CategoryEditModalProps = {
  category: Category | null;
  onClose: () => void;
  postId: number
};

const colorOptions = [
  "#2df299",
  "#b9a4ff",
  "#ffb84d",
  "#f054b8",
  "#3db5e8",
  "#ff5a66",
];

export function CategoryEditModal({category,onClose,postId}: CategoryEditModalProps) {
  const queryClient = useQueryClient();
    if(!category){throw new Error("cate")}
  const [title, setTitle] = useState(category.title);
  const [slug, setSlug] = useState(category.slug);
  const [color, setColor] = useState(category.color||null);

  const { mutate, isPending } = useCategoryUpdate(category.id);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
if(!category){throw new Error("cate")}
    mutate(
      {
        
        title,
        slug,
        color,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["posts", postId]
          });

          onClose();
        },
      }
    );
  }

  return (
    <div className="category-edit-modal-overlay">
      <div className="category-edit-modal">
        <header className="category-edit-modal__header">
          <span>Edit category</span>
          <h2>{category.title}</h2>
        </header>

        <form className="category-edit-modal__form" onSubmit={handleSubmit}>
          <label className="category-edit-modal__field">
            <span>Title</span>
            <input
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
                setSlug(convertToSlug(event.target.value))
              }}
            />
          </label>

          <label className="category-edit-modal__field">
            <span>Slug</span>
            <input
              value={slug}
              onChange={(event) => {
                setSlug(convertToSlug(event.target.value))
              }}
            />
          </label>

          <div className="category-edit-modal__field">
            <span>Color</span>

            <div className="category-edit-modal__colors">
              {colorOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={
                    option === color
                      ? "category-edit-modal__color category-edit-modal__color--selected"
                      : "category-edit-modal__color"
                  }
                  style={{ backgroundColor: option }}
                  onClick={() => setColor(option)}
                  aria-label={`Select color ${option}`}
                />
              ))}
            </div>
          </div>

          <footer className="category-edit-modal__actions">
            <button
              type="button"
              className="category-edit-modal__button category-edit-modal__button--secondary"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="category-edit-modal__button category-edit-modal__button--primary"
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