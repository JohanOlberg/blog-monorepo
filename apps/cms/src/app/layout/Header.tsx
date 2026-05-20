import {
  Users,
  Bell
} from "lucide-react";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">LOGO</div>
      </div>

      <div className="header__center">
        <h1 className="header__title">Nome do Blog</h1>
      </div>

      <div className="header__right">
        <button className="header__iconButton" aria-label="Notificações">
          <Bell size={18} />
        </button>

        <div className="header__user">
          <button className="header__userButton">
            <Users size={18} />
          </button>

          <div className="header__userMenu">
            <p className="header__userName">Johan Olberg</p>

            <hr className="header__divider" />

            <button className="header__menuButton">
              Preferências
            </button>

            <button className="header__menuButton header__menuButton--logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
