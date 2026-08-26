import "./CategorySelector.css";
import type { Category } from "../../post/model/post.types.js";
import { useCategory } from "../hooks/useCategory";
import { useState } from "react";
import { CategoryEditModal } from "./CategoryEditModal.js";

type CategorySelectorProps = {
  postId?: number;
  currentCategory: Category | null;
  mode: "CREATE" | "EDIT";
  isSaving?: boolean;
  onChangeCategory: (category: Category) => void;
};

export function CategorySelector({
  postId,
  currentCategory,
  mode,
  isSaving,
  onChangeCategory,
}: CategorySelectorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const result = useCategory();

  function handleEditClick(category: Category) {
    setSelectedCategory(category);
    setIsModalOpen(true);
  }

  function handleSelectCategory(category: Category) {
    onChangeCategory(category);
  }

  return (
    <section className="category-widget">
      <header className="category-widget__header">
        <span>Category</span>
        <strong>Content Identity</strong>
      </header>

      {currentCategory ? (
        <div className="category-current">
          <div className="category-main-info">
            <span
              className="category-color"
              style={{ backgroundColor: currentCategory.color || "transparente"}}
            />

            <div>
              <strong>{currentCategory.title}</strong>
              <small>Current category</small>
            </div>
          </div>

          <button
            className="category-small-btn"
            type="button"
            onClick={() => handleEditClick(currentCategory)}
          >
            Edit
          </button>
        </div>
      ) : (
        <div className="category-current">
          <div className="category-main-info">
            <span className="category-color category-color--empty" />

            <div>
              <strong>No category selected</strong>
              <small>Select a category below</small>
            </div>
          </div>
        </div>
      )}

      <div className="category-list">
        {result.data
          ?.filter((category) => category.id !== currentCategory?.id)
          .map((category) => (
            <article className="category-item" key={category.id}>
              <div className="category-main-info">
                <span
                  className="category-color"
                  style={{ backgroundColor: category.color ? category.color:"transparent" }}
                />

                <div>
                  <strong>{category.title}</strong>
                  <small>{category.slug}</small>
                </div>
              </div>

              <button
                className="category-small-btn"
                type="button"
                onClick={() => handleSelectCategory(category)}
                disabled={isSaving}
              >
                Select
              </button>
            </article>
          ))}
      </div>

      {isModalOpen && selectedCategory && mode === "EDIT" && postId && (
        <CategoryEditModal
          category={selectedCategory}
          onClose={() => setIsModalOpen(false)}
          postId={postId}
        />
      )}
    </section>
  );
}