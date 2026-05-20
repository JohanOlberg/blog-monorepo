import {
  LayoutDashboard,
  FileText,
  SquarePen,
  Users,
  UserSquare2,

} from "lucide-react";

export const navigationItems = [
    {
        id:"dashboard",
        label:"Dashboard",
        path:"/admin/",
        icon:LayoutDashboard,
        type:"ROUTE",
        roles: ["ADMIN","AUTHOR","EDITOR"]
    },
    {
        id:"posts",
        label:"Posts",
        path:"/admin/posts",
        icon:FileText,
        type:"ROUTE",
        roles:[ "AUTHOR"],
    },

    {
        id:"new-Post",
        label:"New Post",
        path:"/admin/posts/new",
        icon:SquarePen,
        type:"ROUTE",
        roles: ["AUTHOR","EDITOR"]
    },

    {
        id:"users",
        label:"Users",
        path:"/admin/users",
        icon:Users,
        type:"ROUTE",
        roles: ["ADMIN"]
    },

    {
        id:"authors",
        label:"Authors",
        path:"/admin/authors",
        icon:UserSquare2,
        type:"ROUTE",
        roles: ["ADMIN","AUTHOR","EDITOR"]
    }
]
