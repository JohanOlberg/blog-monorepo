import "./Sidebar.css";
import { navigationItems } from "../../shared/config/navigation.config";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__logo">B</div>

        <div>
          <strong>Blog CMS</strong>
          <span>Admin Panel</span>
        </div>
      </div>

      <nav className="sidebar__nav">
        {navigationItems.map((route) => (
          <NavLink
            end
            key={route.id}
            to={route.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar__button sidebar__button--active"
                : "sidebar__button"
            }
          >
            <span className="sidebar__icon">
              <route.icon size={20} strokeWidth={2.2} />
            </span>

            <span>{route.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}