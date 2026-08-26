
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePostById } from "../hooks/usePostById";
import { useChangePostStatus } from "../hooks/useChangeStatus";

import { usePostUpdate } from "../hooks/usePostUpdate";
import { PostEditorContext } from "../context/PostEditorContext";
import type { PostEditorForm, PostUpdate, PostListItem, PostStatus, PostFormState } from "../model/post.types";
import { getApiErrorMessage } from "../../../shared/api/getApiErrorMessage";
 

import { PostEditorMetadataForm } from "../ui/PostMetadataForm";
import { PostContentEditor } from "../ui/PostContentEditor";
import { PostReadingPreview } from "../ui/ComponentePreviewBlog";
import "./PostEditorPage.css";
import { PostContentPage } from "./PostContentPage";
import { useChangeCategory } from "../hooks/useChangeCategory";
import { FeedbackMessage } from "../../../shared/ui/FeedbackMessage";
import type { Category } from "../../category/model/category.types";
import { useChangeAuthor } from "../hooks/useChangeAuthor";
import type { Author } from "../../author/model/author.types";

function toPostEditorForm(post: PostListItem): PostFormState {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content ?? "",
    slug: post.slug,
    status: post.status,
    author: post.author,
    category: post.category,
    publishedAt: post.publishedAt,
  };
}

export function PostEditorPage() {
  const { postId } = useParams();
  const parsedPostId = Number(postId);
  const result = usePostById(parsedPostId);

  if (!postId || Number.isNaN(parsedPostId)) {
    return <p>ID inválido.</p>;
  }

  if (result.isLoading) {
    return <p>Carregando...</p>;
  }

  if (result.isError) {
    return <p>Erro ao carregar post.</p>;
  }

  if (!result.data) {
    return <p>Post não encontrado.</p>;
  }

  return <PostEditorLoaded post={result.data} />;
}

function PostEditorLoaded({ post }: { post: PostListItem }) {
  const [ feedback, setFeedback] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const [form, setForm] = useState<PostFormState>(() =>toPostEditorForm(post),);
  const [ modalAberto, setModalAberto] = useState(false);

  const { mutate: changeStatus, isPending: isChangingStatus } = useChangePostStatus();
  const { mutate: changeCategory, isPending: isChangingCategory} = useChangeCategory()
   const { mutate: changeAuthor, isPending: isChangingAuthor } = useChangeAuthor();
  const { mutate, isPending } = usePostUpdate(Number(post.id));

  function handleChangeCategory(category: Category) {
  changeCategory(
    {
      postId: post.id,
      categoryId: category.id,
    },
    {
      onSuccess: () => {
        updateField("category", category);
        setFeedback({type:"success",msg:"Sucefull to change Post Category!"})
        setForm((currentForm) => ({
          ...currentForm,
          category,
          categoryId: category.id,
        }))
      },
      onError: (error) => {
          setFeedback({
            type: "error",
            msg: getApiErrorMessage(error),
        });
      },
    },
  );
}
 

  function handleChangeAuthor(author: Author) {
    changeAuthor(
      {
        postId: post.id,
        authorId: author.id,
      },
      {
        onSuccess: () => {
          updateField("author", author);
          setFeedback({type:"success",msg:"Sucefull to change Post Author!"})
        },
        onError: (error) => {
          setFeedback({
            type: "error",
            msg: getApiErrorMessage(error),
        });
      },
      },
    );
  }  

  function handleChangeStatus(status: PostStatus) {
  changeStatus(
    {
      postId: post.id,
      status,
    },
    {
      onSuccess: () => {
        updateField("status", status);
        setFeedback({type:"success",msg:"Sucefull to change Post Status!"})
      },
      onError: (error) => {
          setFeedback({
            type: "error",
            msg: getApiErrorMessage(error),
        });
      },
    }
  );
}

  
  function handleSave(dataForm: PostUpdate) {
    if(!dataForm.id) return
    const postMainContentUpdate = {
      id: dataForm.id,
      title: dataForm.title,
      description: dataForm.description,
      content: dataForm.content ?? "",
      slug: dataForm.slug,
    };

    mutate(postMainContentUpdate);
  }

  function updateField<K extends keyof PostEditorForm>(
    field: K,
    value: PostEditorForm[K]
  ) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  return (
    <PostEditorContext.Provider value={{ form, updateField }}>
      <main className="post-editor-page">
        <section className="post-editor-shell">
          <header className="post-editor-header">
            <div>
              <span className="post-editor-label">CMS Editor</span>
              <h1>Edit post</h1>
              <p>
                Update the post metadata, content and publishing informations.
              </p>
            </div>


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
            canPublish= {true}
            isPostSaved= {true}
            mode="EDIT"
            currentAuthor= {form.author}
            currentCategory= {form.category}
            postId= {post.id}
            currentStatus= {form.status}
            onChangeAuthor= {handleChangeAuthor}
            onChangeCategory= {handleChangeCategory}
            onChangeStatus= {handleChangeStatus}
            isChangingAuthor= {isChangingAuthor}
            isChangingCategory= {isChangingCategory}
            isChangingStatus= {isChangingStatus}
          />
          </section>
          
{}
          <section className="post-editor-main-grid">
            <PostEditorMetadataForm />
            <PostContentEditor />
          </section>
          <div className="post-editor-actions">
              <button
                onClick={() => setModalAberto(true)}
                className="post-editor-button secondary"
                type="button"
              >
                Preview
              </button>

              {modalAberto && (
                <div
                  className="blog-preview-modal-overlay"
                  onClick={() => setModalAberto(false)}
                >
                  <div
                    className="blog-preview-modal-content"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="blog-preview-actions">
                      <Link to={`/admin/posts/${form.id}/edit`}>
                        <button className="blog-preview-action-button blog-preview-action-button--edit">
                          Save and Exit
                        </button>
                      </Link>
                       <Link to={`/admin/posts/${form.id}/edit`}>
                        <button className="blog-preview-action-button blog-preview-action-button--edit">
                          Save
                        </button>
                      </Link>
                      <button
                        className="blog-preview-action-button blog-preview-action-button--close"
                        onClick={() => setModalAberto(false)}
                        type="button"
                      >
                        Close ×
                      </button>
                    </div>
                    <PostReadingPreview post = {form}/>
                  </div>
                </div>
              )}

              <button
                className="post-editor-button primary"
                onClick={() => handleSave(form)}
                disabled={isPending}
                type="button"
              >
                {isPending ? "Saving..." : "Save changes"}
              </button>
            </div>
        
        
        </section>
      </main>
    </PostEditorContext.Provider>
  );
}
