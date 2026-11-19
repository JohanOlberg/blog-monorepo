import { useEffect } from "react";

type PageMetadataProps = {
  title: string;
  description: string;
};

const defaultTitle = "ArchType | Software, Frontend & Architecture";
const defaultDescription = "Ideas and lessons on React, TypeScript, Node.js, frontend development and software architecture.";

export function PageMetadata({ title, description }: PageMetadataProps) {
  const pageTitle = title.replace(/\s+/g, " ").trim() || defaultTitle;
  const pageDescription = description.replace(/\s+/g, " ").trim() || defaultDescription;

  useEffect(() => {
    document.title = pageTitle;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = pageDescription;
  }, [pageTitle, pageDescription]);

  return null;
}
