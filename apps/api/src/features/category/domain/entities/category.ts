

 interface NewCategoryProps{
    title: string
    slug: string
    color: string
 }


 export class NewCategory {
    private constructor(private readonly props:NewCategoryProps){}
    
    getProps(){return this.props}

   static create(input: NewCategoryProps) {
        if (!input.title || input.title.trim() === "") {
        throw new Error("Category title is required")
        }

        if (!input.slug || input.slug.trim() === "") {
        throw new Error("Category slug is required")
        }

        if (!input.color || input.color.trim() === "") {
        throw new Error("Category color is required")
        }
        return new NewCategory(
            input
        )
    }
 }

  interface CategoryProps{
    id :number
    title: string
    slug: string
    color: string
 }

   interface CategoryUpdateProps{
    title: string
    slug: string
    color: string
 }


 export class Category {
    private constructor(private props:CategoryProps){}
    
    getProps(){return this.props}

    updateCategory(input:CategoryUpdateProps){
        if (!input.title || input.title.trim() === "") {
        throw new Error("Category title is required")
        }

        if (!input.slug || input.slug.trim() === "") {
        throw new Error("Category slug is required")
        }

        if (!input.color || input.color.trim() === "") {
        throw new Error("Category color is required")
        }
        
        this.props.title = input.title
        this.props.slug = input.slug
        this.props.color = input.color
    }

    static restore(category:CategoryProps){
        return new Category(category)
    }
 }

 