import { AppError } from "@shared/kernel/errors/app-error.js"

export class PostError extends AppError {
 
}

export class CategoryRequiredError extends PostError {
  constructor() {
    super("Category is required")
  }
}

export class AuthorRequiredError extends PostError {
  constructor() {
    super("Author is required")
  }
}

export class TitleRequiredError extends PostError {
  constructor() {
    super("Title is required")
  }
}

export class DescriptionRequiredError extends PostError {
  constructor() {
    super("Description is required")
  }
}

export class SlugRequiredError extends PostError {
  constructor() {
    super("Slug is required")
  }
}

export class ContentRequiredError extends PostError {
  constructor() {
    super("Content is required")
  }
}

export class TitleLengthError extends PostError {
  constructor() {
    super("Title length must be between 10 and 100 characters")
  }
}

export class DescriptionLengthError extends PostError {
  constructor() {
    super("Description length must be between 50 and 100 characters")
  }
}

export class SlugLengthError extends PostError {
  constructor() {
    super("Slug length must be between 5 and 50 characters")
  }
}

export class SlugFormatError extends PostError {
  constructor() {
    super("Slug should contains letters")
  }
}


export class InvalidPostStatusError extends PostError {
  constructor() {
    super("Invalid post status")
  }
}