import type { UserRoles } from "../../../features/user/domain/types/user-roles.js";
import { type Permission } from "./permissions.js";
export const ROLE_PERMISSIONS: Record<UserRoles, Permission[]> = {
  EDITOR: [
    "POST_CREATE",
    "POST_UPDATE",
    "POST_PUBLISH",
    "POST_ARCHIVE",
    "POST_DRAFT",
    "USER_CHANGE_ROLE",
    "USER_CREATE",
    "USER_UPDATE",
    "USER_CHANGE_STATUS",
    "USER_CHANGE_PASSWORD",
    "AUTHOR_CREATE",
    "AUTHOR_UPDATE",
    "CATEGORY_CREATE",
    "CATEGORY_UPDATE"
    
  ],
  AUTHOR: [
    "POST_CREATE",
    "POST_UPDATE",
    "POST_PUBLISH",
    "POST_ARCHIVE",
    "POST_DRAFT",
    "USER_CHANGE_ROLE",
    "USER_CREATE",
    "USER_UPDATE",
    "USER_CHANGE_STATUS",
    "USER_CHANGE_PASSWORD",
    "AUTHOR_CREATE",
    "AUTHOR_UPDATE",
    "CATEGORY_CREATE",
    "CATEGORY_UPDATE"
  ],
  
  ADMIN: [
    "POST_CREATE",
    "POST_UPDATE",
    "POST_PUBLISH",
    "POST_ARCHIVE",
    "POST_DRAFT",
    "USER_CHANGE_ROLE",
    "USER_CREATE",
    "USER_UPDATE",
    "USER_CHANGE_STATUS",
    "USER_CHANGE_PASSWORD",
    "AUTHOR_CREATE",
    "AUTHOR_UPDATE",
    "CATEGORY_CREATE",
    "CATEGORY_UPDATE"
  ]
}