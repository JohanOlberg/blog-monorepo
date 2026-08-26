export type AuthorStatus = "ACTIVE" | "INACTIVE" | "BLOCKED";

export type Author = {
  id: number;
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  userId: number;
  status: AuthorStatus;
  email: string;
  updatedAt:string
};

export type AuthorUpdate = {
  name: string;
  bio: string | null;
  avatarUrl: string | null;  
};

export type AuthorFormData = {
  name: string;
  bio: string | null;
  avatarUrl: string | null;  
  userId: number 
  status: AuthorStatus
};

export type AuthorListItem = {
  id: number;
  name: string;
  email: string;
  status: AuthorStatus
};

export type AuthorCreateInput = {
  name: string;
  bio: string | null;
  avatarUrl: string | null;
  userId: number;
  status: AuthorStatus
};

export type AuthorFormState = {
  name: string;
  bio: string;
  avatarUrl: string;
  userId: number | null;
  status: AuthorStatus;
};

export type UserOption = {
  id: number;
  name: string;
  email: string;
};

