import { useEffect, useState } from "react";
import { getPostByStatus } from "../model/post.facade";
import { toPostViewModel } from "../model/post.mapper";
import { type PostViewModel } from "../model/post.viewModel";
import  './listPost.css'

export function PostListPage() {
  const [posts, setPosts] = useState<PostViewModel[]>([]);

  useEffect(() => {
    async function load() {
        const domainPosts = await getPostByStatus("published");
        const viewPosts = domainPosts.map(toPostViewModel);
      setPosts(viewPosts);
    }

    load();
  }, []);

  return (
    <section>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <span>{post.author}</span>
          <span>{post.formattedDate}</span>
        </article>
      ))}
    </section>
  );
}