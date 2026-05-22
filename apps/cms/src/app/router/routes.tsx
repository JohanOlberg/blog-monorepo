import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { Dashboard } from "../../features/dashboard/pages/DashboardPage";
import { AuthorListPage } from "../../features/author/page/AuthorListPage";
import { UserListPage } from "../../features/user/pages/UserListPage";
import { PostListPage } from "../../features/post/pages/PostListPage";
import { PostEditorPage } from "../../features/post/pages/PostEditorPage"
import {LoginPage} from "../../features/auth/pages/LoginPage";
import { PostDetailPage } from "../../features/post/pages/PostDetailPage";
import { RequireAuth } from "../../shared/auth/RequireAuth";


export const router = createBrowserRouter([


{
    path: "/",
    element: <LoginPage />
},
{
    path: "/login",
    element: <LoginPage />
},
{
    path: "/admin",
    element: (
      <RequireAuth>
          <AdminLayout/>
      </RequireAuth>
  ),
    children: [
      {
        index: true,
        element:(<Dashboard/>),
      },
      {
        path: "posts",
        element: (<PostListPage/>),
      },
      {
        path: "posts/:postId",
        element: (<PostDetailPage/>),
      },
      {
        path: "posts/:postId/edit",
        element: (<PostEditorPage/>),
      },
      {
        path: "posts/new",
        element: (<PostEditorPage/>),
      },
      {
        path: "authors",
        element: (<AuthorListPage/>),
      },
      {
        path: "users",
        element: (<UserListPage/>),
      },
    ],
  },
])
 