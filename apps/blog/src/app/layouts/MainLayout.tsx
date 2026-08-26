import { Outlet } from "react-router-dom";
import "./MainLayout.css"

export default function MainLayout() {
  return (
    <div className="layout">
      <main className="main">
        <div className="content">
          <Outlet />
        </div>
      </main>

    </div>
  );
}