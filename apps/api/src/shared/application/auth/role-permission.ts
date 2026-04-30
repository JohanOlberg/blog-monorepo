import type { UserRoles } from "@user/domain/types/user-roles.js";
import { type Permission } from "./permissions.js";
export const ROLE_PERMISSIONS: Record<UserRoles, Permission[]> = {
  USER: [],
  AUTHOR: [
    "POST_CREATE",
    "POST_UPDATE"
  ],
  EDITOR: [
    "POST_CREATE",
    "POST_UPDATE",
    "POST_PUBLISH",
    "POST_ARCHIVE",
    "POST_DRAFT"
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