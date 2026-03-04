import { posts } from "./post";
import {type Post } from "../../../domain/src/post";

export function getAllPosts(){
if(!posts){
    throw new Error("Usuário não encontrado");
}
return (posts)
}

export function getPostByStatus(post:"draft"|"published"|"archived"){
    if(!posts){
        throw new Error("Usuário não encontrado");
    }
    return (posts.filter(posts =>{return posts.status === post}))
}

export function  getPostById(post:Post){
    if(!posts){
        throw new Error("Usuário não encontrado");
    }
    return (posts.filter(posts =>{return posts.id === post.id}))
}