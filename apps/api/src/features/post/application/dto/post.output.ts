
import {type PostStatus } from "../../domain/value-objects/post-status.js";

export type Author = {
  id: number;
  name: string;
  avatarUrl: string | null;
  userId: number;
  email:string
}

export type User = {
    id:number;
    name: string;
    email:string
}

export type Category = {
    id:number
    title:string
    color:string  | null;
    slug:string
    createdAt: Date;
    updatedAt: Date ;
}

export type PostOutput = {
    title: string;
    id: number;
    status: PostStatus;
    slug: string;
    description: string;
    categoryId: number;
    content: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date | null;
    archivedAt: Date | null;
};

export type PostListOutput = {
    title: string;
    id: number;
    status: PostStatus;
    slug: string;
    description: string;
    category: Category;
    author: Author;
    createdAt: Date;
};

export type PostDetailsOutput = {
    title: string;
    id: number;
    status: PostStatus;
    slug: string;
    content: string;
    description: string;
    category: Category;
    author: Author;
    createdAt: Date;
};


