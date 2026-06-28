import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar.tsx";

import "./AdminLayout.css"
import { PageContainer } from "../../shared/ui/PageContainer.tsx";


export function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />


      <div className="admin-layout__main">

        <main className="admin-layout__content">
          <PageContainer>
            <Outlet />
          </PageContainer>
          
        </main>
        
      </div>
      
    </div>
  );
}