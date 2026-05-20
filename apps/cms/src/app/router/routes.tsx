import { createBrowserRouter } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import { Dashboard } from "../../features/dashboard/pages/DashboardPage";
import { AuthorListPage } from "../../features/author/page/AuthorListPage";
import { UserListPage } from "../../features/user/pages/UserListPage";
import { PostListPage } from "../../features/post/pages/PostListPage";
import { PostEditorPage } from "../../features/post/pages/PostEditorPage"
import {Login} from "../../features/auth/pages/LoginPage";
import { PostDetailPage } from "../../features/post/pages/PostDetailPage";


export const router = createBrowserRouter([


{
    path: "/",
    element: <Login />
},
{
    path: "/login",
    element: <Login />
},
{
    path: "/admin",
    element:<AdminLayout/>,
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
 