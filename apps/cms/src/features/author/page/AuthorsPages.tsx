import { useAuthors } from "../hooks/useAuthor";
import { AuthorsPageContent } from "../ui/AuthorsPageContent";
import "./AuthorsPage.css";
export function AuthorsPage() {
  const {
    data: authors = [],
    isLoading,
    isError,
  } = useAuthors();

  if (isLoading) {
    return (
      <main className="settings-page">
        <div className="settings-page__loading">
          Loading authors...
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="settings-page">
        <div className="settings-page__loading">
          Could not load authors.
        </div>
      </main>
    );
  }
  const sortedAuthors = [...authors].sort((a, b) => a.id - b.id);
  return <AuthorsPageContent authors={sortedAuthors} />;
}