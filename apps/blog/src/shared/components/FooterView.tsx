import { Link } from "react-router-dom";
import "./Footer.css";

import { PostCard } from "../../features/post/list/components/PostCard";
import { DecorativeBox } from "../../features/post/list/components/DecorativeBox";

type FooterPost = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;

  category: {
    title: string;
    color: string;
  };

  author: {
    name: string;
  };
};

type FooterViewProps = {
  post?: FooterPost;
};

export function FooterView({ post }: FooterViewProps) {
  return (
    <footer className="site-footer">

      {/* POST - SEM DECORAÇÃO */}
      {post ? (
        <section className="site-footer__post">
          <Link
            to={`/posts/${post.slug}`}
            className="site-footer__post-link"
          >
            <div
              className="site-footer__post-box"
              style={{
                backgroundColor: post.category?.color,
              }}
            >
              <PostCard
                slug={post.slug}
                title={post.title}
                description={post.description}
                author={post.author.name}
                publishedAt={post.publishedAt}
                category={{
                  title: post.category?.title,
                  color: post.category?.color,
                }}
              />
            </div>
          </Link>
        </section>
      ) : (
        <section className="site-footer__post">
          <div className="site-footer__post-empty">
            Latest article coming soon.
          </div>
        </section>
      )}

      {/* BRAND */}
      <DecorativeBox
        tone="magenta"
        className="site-footer__brand"
        decorativeVariant="a"
      >
        <div className="site-footer__brand-inner">
          <div className="site-footer__logo">
            &lt;t&gt;
          </div>

          <strong className="site-footer__brand-name">
            ArchType
          </strong>

          <p className="site-footer__brand-slogan">
            Ideas for a brighter internet.
          </p>

          <span className="site-footer__copyright">
            © {new Date().getFullYear()} ArchType
          </span>
        </div>
      </DecorativeBox>

      {/* CONNECT */}
      <DecorativeBox
        tone="olive"
        className="site-footer__connect"
        decorativeVariant="c"
      >
        <div className="site-footer__section">
          <span className="site-footer__eyebrow">
            Connect
          </span>

          <div className="site-footer__accent-line" />

          <div className="site-footer__links">
            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span className="site-footer__muted">
              LinkedIn soon
            </span>
          </div>
        </div>
      </DecorativeBox>

      {/* EXPLORE */}
      <DecorativeBox
        tone="violet"
        className="site-footer__nav"
        decorativeVariant="b"
      >
        <div className="site-footer__section">
          <span className="site-footer__eyebrow">
            Explore
          </span>

          <div className="site-footer__accent-line" />

          <div className="site-footer__links">
            <Link to="/about">
              About
            </Link>

            <Link to="/latest">
              Latest
            </Link>
          </div>
        </div>
      </DecorativeBox>

    </footer>
  );
}