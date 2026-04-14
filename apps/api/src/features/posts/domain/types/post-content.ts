type ContentType = "paragraph" | "heading"  | "unorderedList" | "orderedList" |
                   "listItem" | "link" | "citation" | "image" | "code" | "horizontalRule" 

type ContentTypeAttrs = "bold" | "italic" | "small" | "underline" | "highlighted" | "size"

interface PostContentNode {
    type: ContentType;
    attrs?: Record<ContentTypeAttrs, string>;//toDo: validar os atributos por tipo de node
    content?: PostContentNode[];
}


export interface PostContent {
    nodes: PostContentNode[]
};
