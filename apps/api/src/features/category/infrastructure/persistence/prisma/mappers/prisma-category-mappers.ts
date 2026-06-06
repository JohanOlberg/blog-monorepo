import { Prisma } from "@prisma/client";
import { Category, NewCategory } from "src/features/category/domain/entities/category.js";
import type { CategoryOutput } from "src/features/category/application/dto/category.output.js";
type PrismaCategory = Prisma.CategoryGetPayload<{}>

export function toPrismaCreate(category:NewCategory){
    const props = category.getProps()
    return{
        title: props.title,
        slug: props.slug,
        color: props.color
    }
}

export function toPrismaUpdate(category:Category){
    const props = category.getProps()
    return{
        title: props.title,
        slug: props.slug,
        color: props.color
    }
}

export function toCategoryListOutput(props:PrismaCategory):CategoryOutput{
    
    return{
        id: props.id,
        title: props.title,
        slug: props.slug,
        color: props.color,
                
    }
}

export function toDomain(category:PrismaCategory):Category{

    return Category.restore({
        id:category.id,
        title:category.title,
        color:category.color,
        slug:category.slug
    })
}

