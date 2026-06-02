import type { UserRoles } from "@user/domain/types/user-roles.js";
import { type Permission } from "./permissions.js";
export const ROLE_PERMISSIONS: Record<UserRoles, Permission[]> = {
  EDITOR: [
    "POST_CREATE",
    "POST_UPDATE",
    "POST_PUBLISH",
    "POST_ARCHIVE",
    "POST_DRAFT"
  ],
  AUTHOR: [
    "POST_CREATE",
    "POST_UPDATE"
  ],
  
  ADMIN: [
    "POST_CREATE",
    "POST_UPDATE",
    "POST_PUBLISH",
    "POST_ARCHIVE",
    "USER_CHANGE_ROLE",
    "AUTHOR_CREATE"
  ]
}