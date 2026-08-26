import { useCategory } from "../hooks/useCategory";
import { CategoryPageContent } from "./CategoryPageContent";
import "./CategoryPage.css";

export function CategoryPage() {
  const {
    data: category = [],
    isLoading,
    isError,
  } = useCategory();

  if (isLoading) {
    return (
      <main className="category-settings-page">
        <div className="category-settings-page__loading">
          Loading Category...
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="category-settings-page">
        <div className="category-settings-page__loading">
          Could not load Category.
        </div>
      </main>
    );
  }
  const sortedCategory = [...category].sort((a, b) => {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
});
  return <><CategoryPageContent category={sortedCategory} isLoading={isLoading} isError={isError}/></>;
}