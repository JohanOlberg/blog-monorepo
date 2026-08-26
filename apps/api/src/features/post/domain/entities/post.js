import {} from "../value-objects/post-status.js";
import { CategoryRequiredError, AuthorRequiredError, TitleRequiredError, DescriptionRequiredError, SlugRequiredError, ContentRequiredError, TitleLengthError, DescriptionLengthError, InvalidPostStatusError } from "../errors/post-errors.js";
import { Slug } from "../value-objects/post-slug.js";
export class NewPost {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
    static create(newPost) {
        if (!newPost.title || newPost.title.trim() === "") {
            throw new TitleRequiredError();
        }
        if (!newPost.categoryId) {
            throw new CategoryRequiredError();
        }
        if (newPost.title.length <= 10 || newPost.title.length > 30) {
            throw new TitleLengthError();
        }
        if (!newPost.authorId) {
            throw new AuthorRequiredError();
        }
        if (!newPost.description || newPost.description.trim() === "") {
            throw new DescriptionRequiredError();
        }
        if (newPost.description.length <= 30 || newPost.description.length > 100) {
            throw new DescriptionLengthError();
        }
        if (!newPost.slug || newPost.slug.trim() === "") {
            throw new SlugRequiredError();
        }
        const slug = Slug.createSlug(newPost.slug).getValue();
        return new NewPost({
            ...newPost, status: "DRAFT", slug: slug
        });
    }
}
export class Post {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() { return this.props; }
    publish(now) {
        if (this.props.status === 'PUBLISHED') {
            throw new InvalidPostStatusError();
        }
        if (!this.props.categoryId) {
            throw new CategoryRequiredError();
        }
        if (!this.props.content || this.props.content.trim() === "" || this.props.content.length === 0) {
            throw new ContentRequiredError();
        }
        if (!this.props.authorId) {
            throw new AuthorRequiredError();
        }
        if (!this.props.description || this.props.description.trim() === "") {
            throw new DescriptionRequiredError();
        }
        if (!this.props.title || this.props.title.trim() === "") {
            throw new TitleRequiredError();
        }
        if (this.props.title.length <= 10 || this.props.title.length > 30) {
            throw new TitleLengthError();
        }
        if (this.props.description.length <= 30 || this.props.description.length > 100) {
            throw new DescriptionLengthError();
        }
        if (!this.props.slug || this.props.slug.trim() === "") {
            throw new SlugRequiredError();
        }
        this.props.status = 'PUBLISHED';
        this.props.updatedAt = now;
        this.props.publishedAt = now;
        this.props.archivedAt = null;
    }
    archive(now) {
        if (this.props.status === 'ARCHIVED') {
            throw new InvalidPostStatusError();
        }
        this.props.status = 'ARCHIVED';
        this.props.archivedAt = now;
        this.props.updatedAt = now;
        this.props.publishedAt = null;
    }
    draft(now) {
        if (this.props.status === 'DRAFT') {
            throw new InvalidPostStatusError();
        }
        this.props.status = 'DRAFT';
        this.props.updatedAt = now;
        this.props.archivedAt = null;
        this.props.publishedAt = null;
    }
    changeCategory(now, categoryId) {
        if (!categoryId) {
            throw new CategoryRequiredError();
        }
        this.props.categoryId = categoryId;
        this.props.updatedAt = now;
    }
    changeAuthor(now, authorId) {
        if (!authorId) {
            throw new AuthorRequiredError();
        }
        this.props.authorId = authorId;
        this.props.updatedAt = now;
    }
    update(now, post) {
        if (!post.description || post.description.trim() === "") {
            throw new DescriptionRequiredError();
        }
        if (!post.title || post.title.trim() === "") {
            throw new TitleRequiredError();
        }
        if (post.title.length <= 10 || post.title.length > 30) {
            throw new TitleLengthError();
        }
        if (post.description.length <= 30 || post.description.length > 100) {
            throw new DescriptionLengthError();
        }
        if (!post.slug || post.slug.trim() === "") {
            throw new SlugRequiredError();
        }
        if (this.props.status === 'PUBLISHED' && (!post.content || post.content.trim() === "")) {
            throw new ContentRequiredError();
        }
        this.props.updatedAt = now;
        this.props.content = post.content;
        this.props.description = post.description;
        this.props.title = post.title;
        this.props.slug = Slug.createSlug(post.slug).getValue();
    }
    static restore(post) {
        return new Post(post);
    }
}
//# sourceMappingURL=post.js.map