import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { Dashboard } from "../../features/dashboard/pages/DashboardPage";

import { PostListPage } from "../../features/post/pages/PostListPage";
import { PostEditorPage } from "../../features/post/pages/PostEditorPage"
import {LoginPage} from "../../features/auth/pages/LoginPage";
import { RequireAuth } from "../../shared/auth/RequireAuth";
import { CreatePostPage } from "../../features/post/pages/PostCreatePage";
import { AuthorsPage } from "../../features/author/page/AuthorsPages";
import { UsersPage } from "../../features/user/pages/UsersPage";
import { CategoryPage } from "../../features/category/pages/CategoryPage";


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
      /*{
        path: "posts/:postId",
        element: (<PostDetailPage/>),
      },*/
      {
        path: "posts/:postId/edit",
        element: (<PostEditorPage/>),
      },
      {
        path: "posts/new",
        element: (<CreatePostPage/>),
      },
      {
        path: "authors",
        element: (<AuthorsPage/>),
      },
      {
        path: "users",
        element: (<UsersPage/>),
      },
      {
        path: "category",
        element: (<CategoryPage/>),
      },
    ],
  },
])
 