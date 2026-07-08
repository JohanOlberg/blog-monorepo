export type userRoles = "ADMIN" | "AUTHOR" | "EDITOR";

export type userStatus = "INACTIVE" | "ACTIVE" | "BLOCKED";

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

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: userRoles;
  status: userStatus;
};

export type UserOption = {
  id: number;
  name: string;
  email: string;
};

export type UserList = {
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