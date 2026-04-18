import { SlugLengthError, SlugFormatError } from "../errors/post-errors.js"

export class Slug{
    

    constructor(private readonly slug:string){}
   
     static formatSlug(text: string): string {
        return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    }
    static createSlug(newSlug:string):Slug {
        const formattedSlug  = Slug.formatSlug(newSlug)
        const formattedValidatedSlug = Slug.validateSlug(formattedSlug)
        return new Slug(formattedValidatedSlug)
    }

    static validateSlug(slug:string){
        if(slug.length <= 5 || slug.length > 50){
            throw new SlugLengthError();
        }
        if(/^\d+$/.test(slug)){
            throw new SlugFormatError();
        }
        return slug
    }

    getValue(){
        return this.slug
    }

}