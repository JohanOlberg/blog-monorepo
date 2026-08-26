
import { useState } from "react";
import type { Category, PostFormState, PostCreateInput } from "../model/post.types";
import { PostContentPage } from "./PostContentPage";

import "./PostCreatePage.css";
import type { Author } from "../../author/model/author.types";
import { PostEditorMetadataForm } from "../ui/PostMetadataForm";
import { PostContentEditor } from "../ui/PostContentEditor";
import { PostEditorContext } from "../context/PostEditorContext";
import { usePostCreate } from "../hooks/usePostCreate";
import { FeedbackMessage } from "../../../shared/ui/FeedbackMessage";
import { getApiErrorMessage } from "../../../shared/api/getApiErrorMessage";
import { useNavigate } from "react-router-dom";


const emptyPostCreateForm: PostFormState = {
  id: null,
  title: "",
  description: "",
  content: "",
  slug: "",
  status: "DRAFT",
  author: null,
  category: null,
  publishedAt: null,
};


export function CreatePostPage() {
  const [ feedback, setFeedback] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const [form, setForm] = useState<PostFormState>(emptyPostCreateForm);
  const {mutate} = usePostCreate()
  const navigate = useNavigate();

  function handleChangeAuthor(author: Author) {
  setForm((form) => ({
    ...form,
    author,
  }));
}

 function handleChangeCategory(category: Category) {
  setForm((form) => ({
    ...form,
    category,
  }));
}

function updateField<K extends keyof PostFormState>(
  field: K,
  value: PostFormState[K],
) {
  setForm((form) => ({
    ...form,
    [field]: value,
  }));
}

function handleSaveDraft() {
  if (!form.author || !form.category) {
  setFeedback({
    type: "error",
    msg: "Select an author and a category before saving.",
  });

  return;
}

const payload: PostCreateInput = {
  title: form.title,
  description: form.description,
  content: form.content,
  slug: form.slug,
  authorId: form.author.id,
  categoryId: form.category.id,
};

  mutate(payload, {
    onSuccess: (createdPost) => {
      setFeedback({
        type: "success",
        msg: "Post created successfully.",
      });
      navigate(`/admin/posts/${createdPost.id}/edit`);
    },
    onError: (error) => {
      setFeedback({
        type: "error",
        msg: getApiErrorMessage(error),
      });
    },
  });
}


  return (
    <main className="post-create-page">
      <section className="post-create-shell">
        <header className="post-create-header">
          <div>
            <span className="post-create-header__label">CMS / Create Post</span>
            <h1 className="post-create-header__title">Create New Post</h1>
            <p className="post-create-header__description">
              Start as draft. Save the post before publishing.
            </p>
          </div>

          <button className="post-create-save-button" type="button" onClick={()=>handleSaveDraft()}>
            Save draft
          </button>
        </header>

        {feedback && (
          <FeedbackMessage 
            key={feedback.msg} 
            type={feedback.type} 
            message={feedback.msg} 
            onClose={() => setFeedback(null)} 
            duration={2000}
          />
        )}

        <section className="post-edit-controls">
          <PostContentPage
            mode="CREATE"
            isPostSaved={false}
            canPublish={false}
            currentAuthor={form.author}
            currentCategory={form.category}
            currentStatus={form.status}
            onChangeAuthor={handleChangeAuthor}
            onChangeCategory={handleChangeCategory}
          />
        </section>
        
        <section className="post-editor-main-grid">
                    <PostEditorContext.Provider value={{ form, updateField }}>
         
          <PostEditorMetadataForm />
          <PostContentEditor />
        
        </PostEditorContext.Provider>
      </section>
    </section>
    </main>
  );
}
