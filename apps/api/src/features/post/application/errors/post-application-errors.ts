import { AppError } from "@shared/kernel/errors/app-error.js"

export class PostNotFoundError extends AppError {
  constructor() {
    super("Post not found")
  }
}

export class SlugAlreadyExistsError extends AppError {
  constructor() {
    super("Slug already exists")
  }
}