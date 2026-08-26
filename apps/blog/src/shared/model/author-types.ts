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