import { createContext, useContext } from "react";

import type { PostFormState } from "../model/post.types";

type PostEditorContextValue ={
    form: PostFormState,
    updateField: <k extends keyof  PostFormState>(
        field: k,
        value:PostFormState[k]
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
