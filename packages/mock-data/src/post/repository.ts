import { posts } from "./post";

export function getAllPosts(){
if(!posts){
    throw new Error("Post not found");
}
return (posts)
}
