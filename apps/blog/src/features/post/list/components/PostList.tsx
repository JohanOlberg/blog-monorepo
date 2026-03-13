import { usePostListViewModel } from '../hooks/usePostListViewModel';
import  './PostList.css'

export function PostList() {
  
      const posts = usePostListViewModel();
  return (
    <section className="posts">
      {posts.map(post => (
        <article className="post-card" key={post.id}>
          <div className="post-image"></div>
          <div className="post-content">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-description">{post.description}</p>
          <div className="post-meta">
            <span className="post-author">{post.author}</span>
            <span className="post-date">{post.formattedDate}</span>
          </div>
          </div>
        </article>
      ))}
    </section>
  );
}