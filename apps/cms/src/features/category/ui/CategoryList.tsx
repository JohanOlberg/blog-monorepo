import type { categoryFormDataItem } from "../model/category.types";
import "./CategoryList.css";



type CategoryListProps = {
  categoryList: categoryFormDataItem[];
  selectedCategoryId: number | undefined;
  isLoading?: boolean;
  onSelectCategory: (categoryId: number) => void;
};



export function CategoryList({
  categoryList ,
  selectedCategoryId,
  isLoading = false,
  onSelectCategory,
}: CategoryListProps) {
  if (isLoading) {
    return (
      <div className="authors-list__feedback">
        Loading authors...
      </div>
    );
  }

  if (categoryList.length === 0) {
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

        <span>{categoryList.length}</span>
      </div>

      <ul className="authors-list__items">
        {categoryList.map((category) => {
          const isSelected = selectedCategoryId === category.id;

          return (
            <li key={category.id}>
              <button
                className={`authors-list__item ${
                  isSelected ? "authors-list__item--selected" : ""
                }`}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                aria-pressed={isSelected}
              >
                <span className="authors-list__avatar"
                    style={{ backgroundColor: category.color?? 'transparent'  }}
                >
                  
                </span>

                <span className="authors-list__information">
                  <strong className="authors-list__name">
                    {category.title}
                  </strong>

                  <span className="authors-list__email">
                    {category.slug}
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