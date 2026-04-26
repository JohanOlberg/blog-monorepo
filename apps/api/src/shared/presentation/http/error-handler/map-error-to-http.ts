import { ZodError } from "zod"
import {
  SlugAlreadyExistsError,
  PostNotFoundError,

} from "@post/application/errors/post-application-errors.js"
import { PostError } from "@post/domain/errors/post-errors.js"
import { UserError,
        EmailAlreadyExistsError,
        InvalidCredentialsError,
        UserNotFoundError
 } from "@user/domain/errors/user-errors.js"
  

export function toHTTPError(error: unknown) {
    
    if (error instanceof ZodError) {    
    return {
                statusCode:400,
                error:"Bad Request",
                message: "Invalid input"
            }
    }
    
    if(error instanceof SlugAlreadyExistsError){    
    return {
                statusCode:409,
                error:"Conflict",
                message: error.message
            }
    }
    
    if(error instanceof PostNotFoundError){
    return {
                statusCode:404,
                error:"Not Found",
                message: error.message
            }
    }
     if(error instanceof PostError){
    return {
                statusCode:422,
                error:"Unprocessable Entity",
                message: error.message
            }
    }
    
    if(error instanceof EmailAlreadyExistsError){
    return {
                "statusCode": 409,
                "error": "Conflict",
                "message": "Email already exists"
            }
    }
    if(error instanceof InvalidCredentialsError){
    return {
                "statusCode": 401,
                "error": "Unauthorized",
                "message": "Invalid credentials"
            }
    }
    if(error instanceof UserNotFoundError){
    return {
                "statusCode": 404,
                "error": "Not Found",
                "message": "Not Found"
            }
    }
    
    if(error instanceof UserError){
    return {
                statusCode:422,
                error:"Unprocessable Entity",
                message: error.message
            }
    }

            return {
                statusCode:500,
                error:"Internal Server Error",
                message:"Internal Server Error"
            } 
    
  }