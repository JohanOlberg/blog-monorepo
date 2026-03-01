export type post ={
    postStatus : "pendente"|"criado"|"arquivado"
    post : {
        title:string,
        id:string,
        description:string,
        text:string
    }
}