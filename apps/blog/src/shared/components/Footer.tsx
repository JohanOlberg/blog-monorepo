import { useLatestPost } from "./hook/useLatestPost";
import { FooterView } from "./FooterView";

export function Footer() {
  const { data: latestPost } = useLatestPost();

  return <FooterView post={latestPost} />;
}