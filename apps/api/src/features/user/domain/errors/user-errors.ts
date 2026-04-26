import { AppError } from "@shared/kernel/errors/app-error.js"

export class UserError extends AppError{

}

export class NameRequiredError extends UserError {
  constructor() {
    super("Name is required")
  }
}

export class EmailRequiredError extends UserError {
  constructor() {
    super("Email is required")
  }
}

export class PasswordHashRequiredError extends UserError {
  constructor() {
    super("Password hash is required")
  }
}

export class EmailAlreadyExistsError extends UserError {
  constructor() {
    super("Email already exists")
  }
}

export class InvalidCredentialsError extends UserError {
  constructor() {
    super("Invalid credentials")
  }
}

export class InvalidUserStatusError extends UserError {
  constructor() {
    super("Invalid status")
  }
}
export class UserNotFoundError extends UserError {
  constructor() {
    super("Invalid status")
  }
}

