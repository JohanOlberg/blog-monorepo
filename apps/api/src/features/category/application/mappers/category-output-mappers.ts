import { Category } from "../../domain/entities/category.js";

export function toListCategoryOutput(category:Category){
    const props = category.getProps()
    return{
        id:props.id,
        title:props.title,
        slug:props.slug,
        color:props.color
    }
}