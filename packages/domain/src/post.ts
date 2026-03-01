type Status = ("draft"|"published"|"archived")
type Image = {
    title:string, //isso sera usado no alt da imagem para SEO e acessibilidade
    src:string, //aqui vai ser o caminho da imagem mas ainda nao sei como vai ser o caminho temporariamnete vai ser string
}

type Content = {
        
        image?:Image,
        text:string
}

export type Post ={
        title:string,
        id:string,
        status:Status,
        description:string,
        content:Content,
        author:string // acho que pode ser interessante criar um tipo autor por enquanto so string
        date:string

}