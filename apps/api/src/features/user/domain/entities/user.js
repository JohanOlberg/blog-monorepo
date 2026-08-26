import {} from "@user/domain/types/user-status.js";
import {} from "@user/domain/types/user-roles.js";
import { NameRequiredError, EmailRequiredError, PasswordHashRequiredError, InvalidUserStatusError, InvalidUserRoleError, InvalidUserPasswordError } from "../errors/user-errors.js";
export class NewUser {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
    static create(newUser) {
        if (!newUser.name || newUser.name.trim() === "") {
            throw new NameRequiredError();
        }
        if (!newUser.email || newUser.email.trim() === "") {
            throw new EmailRequiredError();
        }
        if (!newUser.passwordHash || newUser.passwordHash.trim() === "") {
            throw new PasswordHashRequiredError();
        }
        return new NewUser({
            ...newUser, status: "ACTIVE", role: "ADMIN"
        });
    }
}
export class User {
    props;
    constructor(props) {
        this.props = props;
    }
    getProps() { return this.props; }
    update(now, data) {
        if (!data.name || data.name.trim() === "") {
            throw new NameRequiredError();
        }
        if (!data.email || data.email.trim() === "") {
            throw new EmailRequiredError();
        }
        this.props.email = data.email;
        this.props.name = data.name;
        this.props.updatedAt = now;
        //this.props.role = data.
    }
    activate(now) {
        if (this.props.status === "ACTIVE") {
            throw new InvalidUserStatusError();
        }
        this.props.status = "ACTIVE";
        this.props.updatedAt = now;
    }
    deactivate(now) {
        if (this.props.status === "INACTIVE") {
            throw new InvalidUserStatusError();
        }
        this.props.status = "INACTIVE";
        this.props.updatedAt = now;
    }
    block(now) {
        if (this.props.status === "BLOCKED") {
            throw new InvalidUserStatusError();
        }
        this.props.status = "BLOCKED";
        this.props.updatedAt = now;
    }
    changeRole(now, newRole, id) {
        if (this.props.role === newRole) {
            throw new InvalidUserRoleError();
        }
        if (this.props.id === id) {
            throw new InvalidUserRoleError();
        }
        this.props.role = newRole;
        this.props.updatedAt = now;
    }
    changePassword(now, passwordHash) {
        if (this.props.passwordHash.trim() === "") {
            throw new InvalidUserPasswordError();
        }
        this.props.passwordHash = passwordHash;
        this.props.passwordChangedAt = now;
        this.props.updatedAt = now;
    }
    changeAuthors(now) { }
    static restore(user) {
        return new User(user);
    }
}
//# sourceMappingURL=user.js.map