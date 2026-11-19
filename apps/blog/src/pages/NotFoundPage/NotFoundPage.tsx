import { PageState } from "../../shared/components/PageState";

export function NotFoundPage() {
  return (
    <PageState
      kind="not-found"
      title="Page not found"
      message="This address does not match a page on ArchType. Explore the blog to find an article."
    />
  );
}
