import { httpClient } from "../../../../shared/api/http-client";
import type { PostsFilters } from "../model/public-post-summary";

export async function getPostsList({search,category,sort}:PostsFilters){
    const params = new URLSearchParams()
    let url = "public/posts"

        if (search) {
            params.set("search", search)        
        }
        if (category) {
            params.set("category", category)        
        }
         if (sort) {
            params.set("sort", sort)        
        }
        if(params.size){
            url += "?"+params
        }

    const result = await httpClient.get(url)
    return result.data
}