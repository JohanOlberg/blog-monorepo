export type userRoles = "ADMIN" | "AUTHOR" | "EDITOR";

export type userStatus = "INACTIVE" | "ACTIVE" | "BLOCKED";

export type ChangeUserRoleInput = {
    userId: number;
    role: userRoles;
}

export type ChangeUserPasswordInput = {
    userId: number;
    password: string;
}

export type UserFormData = {
  name: string;
  email: string;
  password: string;
  role: userRoles;
  status: userStatus;
};

export type userCreateInput = {
  name: string;
  email: string;
  password: string;
};

export type userUpdateInput = {
  name: string;
  email: string;
  password: string;
};
export type userUpdateInputStatus = {
  name: string;
  email: string;
  password: string;
  status: userStatus;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: userRoles;
  status: userStatus;
  updatedAt:string
};

export type UserOption = {
  id: number;
  name: string;
  email: string;
};

export type UserListItem = {
  id: number;
  name: string;
  email: string;
  status: userStatus;
};

export type UserRoleOption = {
  value: userRoles;
  label: string;
  description: string;
  className: string;
};