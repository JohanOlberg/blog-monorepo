export const apiMessageMap: Record<string, string> = {
  // Auth / session
  "Token missing": "Your session expired. Please log in again.",
  "Invalid token": "Your session is no longer valid. Please log in again.",
  "Unauthorized": "You need to be logged in to perform this action.",
  "Forbidden": "You do not have permission to perform this action.",
  "Invalid credentials" : "Your login is not valid",

  // Generic API / validation
  "Invalid input": "Please check the form fields and try again.",
  "Bad Request": "Some information is invalid. Please review the form.",
  "Internal Server Error": "An unexpected server error occurred. Please try again.",
  "Not Found": "The requested item could not be found.",

  // Category
  "Category Not Found!": "Category not found.",
  "Category not found": "Category not found.",
  "Category is required": "Please select a category.",
  "Category title is required": "Category title is required.",
  "Category slug is required": "Category slug is required.",
  "Category color is required": "Please select a category color.",
  "Category already exists": "A category with this information already exists.",
  "Slug already exists": "This slug is already in use. Please choose another one.",
  "Title already exists": "This title is already in use. Please choose another one.",

  // Author
  "Author Not Found!": "Author not found.",
  "Author not found": "Author not found.",
  "Author is required": "Please select an author.",
  "Name is required": "Name is required.",
  "Email is required": "Email is required.",
  "Author already exists": "An author with this information already exists.",

  // User
  "User Not Found!": "User not found.",
  "User not found": "User not found.",
  "User required": "Please select a user.",
  "User already exists": "A user with this information already exists.",
  "Email already exists": "This email is already in use.",
  "Invalid email": "Please enter a valid email address.",
  "Password required": "Password is required.",
  "Invalid password": "Password is invalid.",
  "Invalid role": "Please select a valid user role.",
  "Invalid status": "Please select a valid user status.",

  // Post
  "Post Not Found!": "Post not found.",
  "Post not found": "Post not found.",
  "Post required": "Post not found.",
  "Title is required": "Title is required.",
  "Description is required": "Description is required.",
  "Slug is required": "Slug is required.",
  "Content is required": "Content is required before publishing.",
  "Invalid post status": "Invalid post status.",
  "Post already exists": "A post with this information already exists.",

  // Length validations
  "Title length must be between 10 and 100 characters": "Title must be between 10 and 100 characters.",
  "Description length must be between 50 and 100 characters": "Description must be between 50 and 100 characters.",
  "Slug length must be between 5 and 50 characters": "Slug length must be between 5 and 50 characters",

  // Database / unique constraint fallback
  "Unique constraint failed": "This item already exists. Please check duplicated fields.",
};