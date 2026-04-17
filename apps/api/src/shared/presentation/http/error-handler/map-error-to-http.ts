import { ZodError } from "zod"
import {
  SlugAlreadyExistsError,
  PostNotFoundError,

} from "@posts/application/errors/post-application-errors.js"
import { PostError } from "@posts/domain/errors/post-errors.js"
  

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

            return {
                statusCode:500,
                error:"Internal Server Error",
                message:"Internal Server Error"
            } 
    
  }