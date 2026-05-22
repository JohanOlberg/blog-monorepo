import "./LoginPage.css";

import { LoginForm } from "../ui/LoginForm";



export function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-card__brand">
          <div className="login-card__logo">B</div>

          <div>
            <strong>Blog CMS</strong>
            <span>Admin Panel</span>
          </div>
        </div>

        <div className="login-card__content">
          <span className="login-card__eyebrow">CMS ACCESS</span>

          <h1 className="login-card__title">LOGIN</h1>

          <p className="login-card__description">
            Access your admin panel to manage posts, authors, categories and
            publishing workflow.
          </p>

          <LoginForm/>
          <a className="login-form__forgot" href="/forgot-password">
  Forgot password?
</a>
        </div>
      </section>

      <aside className="login-preview">
        <span className="login-preview__label">BLOG CMS</span>
        <h2>Write. Manage. Publish.</h2>
        <p>
          A focused content management system built for technical posts and
          structured publishing.
        </p>
        <a className="login-preview__button" href="/register">
  Create account
</a>
      </aside>
    </main>
  );
}