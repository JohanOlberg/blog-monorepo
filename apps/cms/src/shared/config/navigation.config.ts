import {
  LayoutDashboard,
  FileText,
  SquarePen,
  Users,
  UserSquare2,
  type LucideIcon,

} from "lucide-react";
import { type UserRole } from "../../features/auth/model/auth.types";

type NavigationItem = {
    id:string
    label:string
    path:string
    icon:LucideIcon
    type:string
    roles: UserRole[]
}

export const navigationItems:NavigationItem[] = [
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
        roles:[ "AUTHOR","EDITOR"],
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
