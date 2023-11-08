export class AuthError extends Error {
    constructor(message: string = "Unauthorized") {
        super(message);
        this.name = "Unauthorized";
    }
}
