import { AppError } from "@shared/kernel/errors/app-error.js"

export class UserNotFoundError extends AppError {
  constructor() {
    super("User not foun")
  }
}