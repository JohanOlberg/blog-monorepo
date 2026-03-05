import { posts } from "./post";
import {type Post } from "../../../domain/src/post";

export function getAllPosts(){
if(!posts){
    throw new Error("Post not found");
}
return (posts)
}

export function getPostByStatus(status:"draft"|"published"|"archived"){
    if(!posts){
        throw new Error("Post not found");
    }
    return (posts.filter(posts =>{return posts.status === status}))
}

export function  getPostById(id:string){
    if(!posts){
        throw new Error("Post not found");
    }
    return (posts.find(posts =>{return posts.id === id}))
}