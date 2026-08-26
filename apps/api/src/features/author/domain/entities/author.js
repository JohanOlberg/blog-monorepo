import {} from "../types/author-status.js";
export class NewAuthor {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() { return this.props; }
    static create(input) {
        if (!input.name || input.name.trim() === "") {
            throw new Error("Author name is required");
        }
        if (!input.userId || input.userId <= 0) {
            throw new Error("Author name is required");
        }
        return new NewAuthor({
            ...input, status: "ACTIVE"
        });
    }
}
export class Author {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() { return this.props; }
    static restore(author) {
        return new Author(author);
    }
    update(now, props) {
        if (!props.name || props.name.trim() === "") {
            throw new Error("Author name is required");
        }
        this.props.name = props.name;
        this.props.bio = props.bio;
        this.props.avatarUrl = props.avatarUrl;
        this.props.updatedAt = now;
    }
    activate(now) {
        //if(this.props.status === "ACTIVE"){throw new Error("Author status is required")}
        if (!this.props.bio || this.props.bio.trim() === "") {
            throw new Error("Author bio is required");
        }
        if (!this.props.avatarUrl || this.props.avatarUrl.trim() === "") {
            throw new Error("Author avatar is required");
        }
        //this.props.status = "ACTIVE"
        this.props.updatedAt = now;
    }
    deactivate(now) {
        //if(this.props.status === "INACTIVE"){throw new Error("Author status is required")}
        //this.props.status = "INACTIVE"
        this.props.updatedAt = now;
    }
    changeUser(now, userId) {
        if (!userId || userId <= 0) {
            throw new Error("Author userId is required");
        }
        if (userId != this.props.userId) {
            throw new Error("Author userId is required");
        }
        this.props.userId = userId;
        this.props.updatedAt = now;
    }
}
//# sourceMappingURL=author.js.map