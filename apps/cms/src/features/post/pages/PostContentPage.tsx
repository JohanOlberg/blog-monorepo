
import type { Author } from "../../author/model/author.types";
import { AuthorSelector } from "../../author/ui/AuthorSelector";
import { CategorySelector } from "../../category/ui/CategorySelector";
import type { Category } from "../model/post.types";
import { PostStatusControl, type PostStatus } from "../ui/PostStatusControl";


import "./PostContentPage.css"

type PostContentPageProps = {
  mode: "CREATE" | "EDIT";
  postId?: number;
  isPostSaved: boolean;
  canPublish: boolean;
  currentCategory: Category | null;
  currentAuthor: Author | null;
  currentStatus: PostStatus;

    isChangingAuthor?: boolean,
    isChangingCategory?: boolean,
    isChangingStatus?: boolean,

  onChangeAuthor: (author: Author) => void;
  onChangeCategory: (category: Category) => void;
  onChangeStatus?: (status: PostStatus) => void;
}

export function PostContentPage({
        mode, 
        isPostSaved, 
        canPublish, 
        currentAuthor, 
        currentStatus, 
        currentCategory, 
        postId,

        isChangingAuthor,
        isChangingCategory,
        isChangingStatus,

        onChangeStatus,
        onChangeAuthor,
        onChangeCategory
    }:PostContentPageProps){
    return (<>
    
       
            <AuthorSelector
                mode={mode}
                currentAuthor={currentAuthor}
                isSaving={isChangingAuthor}
                onChangeAuthor={onChangeAuthor}
            />
            <CategorySelector
                mode={mode}
                postId={postId}
                currentCategory={currentCategory}
                onChangeCategory={onChangeCategory}
                isSaving={isChangingCategory}
            />
            <PostStatusControl
                mode={mode}
                currentStatus={currentStatus}
                isPostSaved={isPostSaved}
                canPublish={canPublish}
                onChangeStatus={onChangeStatus}
                isSaving={isChangingStatus}
            />

         
   

    </>)
}