import { usePostListViewModel } from '../hooks/usePostListViewModel';
import  './listPost.css'

export function PostListPage() {
  
      const posts = usePostListViewModel();
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