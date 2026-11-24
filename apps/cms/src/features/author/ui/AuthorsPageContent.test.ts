import { describe, expect, it } from "vitest";
import { createFormFromAuthor } from "../model/author-form";
import type { Author } from "../model/author.types";

describe('createFormFromAuthor', ()=>{
    describe('Valid inputs', ()=>{
          it.each([
            {
                label:"preserves populated bio and avatarUrl",
                input:{
                    id: 1,
                    name:"Johan",
                    bio:"Sou Desenvolvedor",
                    avatarUrl:"./assets",
                    userId:1,
                    email:"jolberg882@gmail.com",
                    status:"ACTIVE",
                    updatedAt:""
                } satisfies Author,
                expected:{
                    name:"Johan",
                    bio:"Sou Desenvolvedor",
                    avatarUrl:"./assets",
                    userId:1,
                    status:"ACTIVE"
                }  
            },
            {
                label:"converts null bio and avatarUrl to empty strings",
                input:{
                    id: 1,
                    name:"Johan",
                    bio:null,
                    avatarUrl:null,
                    userId:1,
                    email:"jolberg882@gmail.com",
                    status:"ACTIVE",
                    updatedAt:""
                } satisfies Author,
                expected:{
                    name:"Johan",
                    bio:"",
                    avatarUrl:"",
                    userId:1,
                    status:"ACTIVE"
                }  
            }
        ])("$label",({input,expected})=>{ 
            const result = createFormFromAuthor(input);

            expect(result).toEqual(expected)

        })

    })
})

