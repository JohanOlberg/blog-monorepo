import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      {/* Lado alinhado com a sidebar */}


      {/* Lado alinhado com conteúdo */}
      <div className="footer__right">
        <div className="footer__links">
          <div className="footer__column">
            <strong>Posts</strong>
            <a>All Posts</a>
            <a>Create Post</a>
          </div>

          <div className="footer__column">
            <strong>Users</strong>
            <a>All Users</a>
            <a>Roles</a>
          </div>

          <div className="footer__column">
            <strong>Settings</strong>
            <a>Preferences</a>
            <a>Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}