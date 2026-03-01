import type {Post} from "@blog/domain"

export const newPost: Post = {
                        content:{image:{src:"linkImage",title:"Uma imagem de teste"}, text:"Um texto de teste"}, 
                        description:"Primeiro Post do Blog", 
                        title:"Primeiro", id:"1",
                        status:"pendente",
                        date:new Date(),
                        author:"Johan",
                        }
                      
