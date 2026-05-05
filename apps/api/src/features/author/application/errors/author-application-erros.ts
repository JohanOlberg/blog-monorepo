import { AppError } from "@shared/kernel/errors/app-error.js"

export class AuthorNotFoundError extends AppError {
  constructor() {
    super("Author not found")
  }
}

export class UserNotFoundError extends AppError {
  constructor() {
    super("User not found")
  }
}