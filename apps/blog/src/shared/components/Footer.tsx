import { useLatestPost } from "./hook/useLatestPost";
import { FooterView } from "./FooterView";

import { useMatch } from "react-router-dom";
import { routes } from "../../app/router/routes";

export function Footer() {
  const article = useMatch(routes.posts.detailPath);
  const { data: latestPost } = useLatestPost(article?.params.slug);

  return <FooterView post={latestPost} />;
}