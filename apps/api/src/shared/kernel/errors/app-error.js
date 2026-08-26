export class AppError extends Error {
    constructor(message) {
        super(message);
        this.name = new.target.name;
    }
}
//# sourceMappingURL=app-error.js.map