
import {type PostStatus } from "../../domain/value-objects/post-status.js";

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
    categoryId: number;
    authorId: number;
    createdAt: Date;
};