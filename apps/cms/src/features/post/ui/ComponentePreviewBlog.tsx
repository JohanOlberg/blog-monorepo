import type { PostEditorForm } from "../model/post.types";
import "./ComponentePreviewBlog.css"
//import { usePostEditorContext } from "../context/PostEditorContext";

type Props = {
  post: PostEditorForm;
};

export function PostReadingPreview({ post }: Props) {

  return (
    <article className="post-reading-preview">
      <header className="post-reading-preview__header">
        <h1 className="post-reading-preview__title">{post.title}</h1>

        <p className="post-reading-preview__description">
          {post.description}
        </p>

        <div
          className="post-reading-preview__meta"
          aria-label="Informações do post"
        >
          <span className="post-reading-preview__author">
            {post.author.name ?? "Author"}
          </span>
          <span>{post.publishedAt ?? "Data de criação"}</span>
          <span>{"20mins Tempo de leitura"}</span>
        </div>
      </header> 
<img className="post-reading-preview__image" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80" alt="Tela com código JavaScript em um notebook" />


      <section
        className="post-reading-preview__content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}