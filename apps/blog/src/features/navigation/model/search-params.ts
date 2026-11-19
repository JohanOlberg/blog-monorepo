/** Change only the search term, preserving category, ordering, and other URL state. */
export function withSearch(current: URLSearchParams, value: string): URLSearchParams {
  const next = new URLSearchParams(current);
  const search = value.trim();
  if (search) next.set("search", search);
  else next.delete("search");
  return next;
}
