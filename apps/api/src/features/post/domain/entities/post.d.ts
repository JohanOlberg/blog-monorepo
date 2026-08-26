import { type PostStatus } from "../value-objects/post-status.js";
interface NewPostProps {
    title: string;
    status: PostStatus;
    slug: string;
    description: string;
    categoryId: number;
    content: string;
    authorId: number;
}
interface PostCreateInput {
    title: string;
    slug: string;
    description: string;
    categoryId: number;
    content: string;
    authorId: number;
}
export declare class NewPost {
    private readonly props;
    private constructor();
    getProps(): NewPostProps;
    static create(newPost: PostCreateInput): NewPost;
}
/** Edicao e exibicao de um post ja persistido com suas respectivas props */
interface PostProps {
    title: string;
    id: number;
    status: PostStatus;
    description: string;
    slug: string;
    categoryId: number;
    content: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date | null;
    archivedAt: Date | null;
}
interface PostPropsUpdate {
    title: string;
    slug: string;
    description: string;
    content: string;
}
export declare class Post {
    private readonly props;
    private constructor();
    getProps(): PostProps;
    publish(now: Date): void;
    archive(now: Date): void;
    draft(now: Date): void;
    changeCategory(now: Date, categoryId: number): void;
    changeAuthor(now: Date, authorId: number): void;
    update(now: Date, post: PostPropsUpdate): void;
    static restore(post: PostProps): Post;
}
export {};
//# sourceMappingURL=post.d.ts.map