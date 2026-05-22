export type UserRole = "ADMIN" | "EDITOR" | "AUTHOR";

export type AuthenticatedUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type LoginOutput = {
  accessToken: string;
  user: AuthenticatedUser;
};
