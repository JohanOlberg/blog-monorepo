import "./Sidebar.css";
import { navigationItems } from "../../shared/config/navigation.config";
import { useAuthStore } from '../../features/auth/store/auth.store';
import { NavLink } from "react-router-dom";

export function Sidebar() {
    const user = useAuthStore(state => state.user);
    const logout = useAuthStore(state => state.logout);

    const allowedRoutes = navigationItems.filter(
      route => route.roles.includes(user.role)
    )
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
        {allowedRoutes.map((route) => (
          <NavLink 
            end
            role={user?.role}
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
       <div className="sidebar__user">
    <div className="sidebar__user-info">
      <strong>{user?.name}</strong>
      <span>{user?.role}</span>
    </div>

    <button className="sidebar__logout" onClick={logout}>
      Logout
    </button>
  </div>
    </aside>
  );
}