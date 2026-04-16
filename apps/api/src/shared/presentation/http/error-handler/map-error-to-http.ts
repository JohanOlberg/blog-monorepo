import { ZodError } from "zod"



export function toHTTPError(error: unknown) {
    if (error instanceof ZodError) {    
    return {
                statusCode:400,
                error:"Bad Request",
                message:"Bad Request"
            }
    }
    
       return {
                statusCode:500,
                error:"Internal Server Error",
                message:"Internal Server Error"
            } 
    
    /*
    if(error instanceof SlugAlreadyExistsError){    
    return {
                statusCode:409,
                error:"Conflict",
                message:"Conflict"
            }
    }
    
    if(error instanceof PostNotFoundError){
    return {
                statusCode:404,
                error:"Internal Server Error",
                message:"Internal Server Error"
            }
    }
    if(error instanceof InvalidPostStateError){
    return {
                statusCode:422,
                error:"Unprocessable Entity",
                message:"Unprocessable Entity"
            }
    }
            */
  }