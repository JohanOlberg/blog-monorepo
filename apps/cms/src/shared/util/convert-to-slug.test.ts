import { describe, expect, it } from "vitest";
import { convertToSlug } from "./convert-to-slug";

describe('convertToSlug',()=>{
    it.each([
        {
            title:"Meu Primeiro Post",
            expectedSlug:"meu-primeiro-post"
        },
        {
            title:"   Meu Primeiro Post    ",
            expectedSlug:"meu-primeiro-post"
        },
        {
            title:"Introdução ao React!",
            expectedSlug:"introducao-ao-react"
        }
    ])(
        'should convert "$title" to "$expectedSlug"',
        ({title, expectedSlug})=>{
            expect(convertToSlug(title))
            .toBe(expectedSlug)
        }
    )

    
})