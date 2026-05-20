import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import "./AdminLayout.css"
import { PageContainer } from "../../shared/ui/PageContainer.tsx";


export function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-layout__main">
        <Header />

        <main className="admin-layout__content">
          <PageContainer>
            <Outlet />
          </PageContainer>
          
        </main>
        <Footer/>
      </div>
      
    </div>
  );
}