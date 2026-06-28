
export type categoryUpdate = {
    title:string,
    slug:string,
    color:string  | null
}


export type Category = {
    id:number
    title:string
    color:string  | null;
    slug:string
    createdAt: Date;
    updatedAt: Date ;
}