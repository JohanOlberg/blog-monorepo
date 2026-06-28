import "./CategorySelector.css";
import type { Category } from "../../post/model/post.types"
import { useCategory } from "../hooks/useCategory";
import { useChangeCategory } from "../../post/hooks/useChangeCategory";
import { useState } from "react";
import {CategoryEditModal} from "./CategoryEditModal.js";

type categorySelectorProps = {
  postId?: number;
  currentCategory?: Category;
};

export function CategorySelector({ postId, currentCategory }: categorySelectorProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const result = useCategory();
  const { mutate, isPending } = useChangeCategory();

  function handleEditClick(category: Category) {
    setSelectedCategory(category);
    setIsModalOpen(true);
  }

  function handleChangeCategory(categoryId: number) {
    if (!postId) return;

    mutate({
      postId,
      categoryId,
    });
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
              style={{ backgroundColor: `${currentCategory.color}` }}
            />

            <div>
              <strong>{currentCategory.title}</strong>
              <small>Current category</small>
            </div>
          </div>

          <button
            className="category-small-btn"
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
                  style={{ backgroundColor: `${category.color}` }}
                />

                <div>
                  <strong>{category.title}</strong>
                  <small>{category.slug}</small>
                </div>
              </div>

              <button
                className="category-small-btn"
                onClick={() => handleChangeCategory(category.id)}
                disabled={isPending}
              >
                Select
              </button>
            </article>
          ))}
      </div>

      {isModalOpen && selectedCategory && postId && (
        <CategoryEditModal
          category={selectedCategory}
          onClose={() => setIsModalOpen(false)}
          postId={postId}
        />
      )}
    </section>
  );
}