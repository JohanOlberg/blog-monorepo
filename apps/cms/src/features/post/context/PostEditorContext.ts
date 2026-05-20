import { createContext, useContext } from "react";

import type { PostEditorForm } from "../model/post.types";

type PostEditorContextValue ={
    form: PostEditorForm,
    updateField: <k extends keyof  PostEditorForm>(
        field: k,
        value:PostEditorForm[k]
    )=> void
}

export const PostEditorContext =  createContext<PostEditorContextValue | null>(null);

export function usePostEditorContext() {
  const context = useContext(PostEditorContext);
 if (!context) {
    throw new Error(
      "usePostEditorContext must be used inside PostEditorContext.Provider"
    );
  }

  return context;
}
