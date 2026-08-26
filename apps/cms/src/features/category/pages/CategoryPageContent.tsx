
import type{ Category,categoryFormData } from "../model/category.types"
import { categoryColors } from "../model/category-colors";



import { useCategoryCreate } from "../hooks/useCategoryCreate";
import { useCategoryUpdate } from "../hooks/useCategoryUpdate";
import { useState } from "react";
import { CategoryList } from "../ui/CategoryList";
import {CategoryForm} from "../ui/CategoryForm"
import { FeedbackMessage } from "../../../shared/ui/FeedbackMessage";
import { getApiErrorMessage } from "../../../shared/api/getApiErrorMessage";

export type propsCategory ={
category: Category[]
isLoading: boolean
isError: boolean
}

type CategoryPageMode =
  | {
      type: "CREATE";
    }
  | {
      type: "EDIT";
      categoryId: number;
    };

function createFormFromCategory(category:Category):categoryFormData{ 
    return {
        //id : category.id,
        title: category.title,
        slug: category.slug,
        color: category.color
    }
}

const empityCategoryForm = {
     id :"",
    title: "",
    slug: "",
    color:""
}





export function CategoryPageContent({category, isLoading, isError}:propsCategory){
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
    const firstCategory = category[0] ?? null
    const {mutate : categoryCreate} = useCategoryCreate()
   
    
    const [pageMode, setPageMode] = useState<CategoryPageMode>(() =>
        firstCategory
            ? {
                type: "EDIT",
                categoryId: firstCategory.id,
            }
            : {
                type: "CREATE",
            },
    
    );
    const selectedCategoryId =
    pageMode.type === "EDIT"
        ? pageMode.categoryId
        : undefined;

    const {mutate : categoryUpdate, isPending} = useCategoryUpdate(selectedCategoryId)

    const [form, setForm] = useState<categoryFormData>(() =>
        firstCategory
        ? createFormFromCategory(firstCategory)
        : empityCategoryForm,
    );
    
    function selectColor(){
      const randomColor = Math.floor(Math.random() * categoryColors.length);
      return categoryColors[randomColor].value
    }

    function handleCreateCategory() {
        setPageMode({
            type: "CREATE",
        });
        setForm({...empityCategoryForm, color:selectColor()});
    }

  
  
  function handleSelectCategory(categoryId: number) {
    const selectedCategory = category.find(
      (category) => category.id === categoryId,
    );

    if (!selectedCategory) {
      return;
    }

    setPageMode({
      type: "EDIT",
      categoryId,
    });

    setForm(createFormFromCategory(selectedCategory));
  }
    function handleSubmitCategory(formData: categoryFormData) {
  if (pageMode.type === "CREATE") {
    categoryCreate(formData, {
      onSuccess: () => {
        setFeedback({type:"success",msg:"Sucefull to create a New Category!"})
        setForm({
          ...empityCategoryForm,
          color: selectColor(),
        });
      },
     onError: (error) => {
    setFeedback({
      type: "error",
      msg: getApiErrorMessage(error),
    });
  },
});

    return;
  }

  categoryUpdate(formData, {
  onSuccess: () => {
    setFeedback({
      type: "success",
      msg: "Category edited successfully.",
    });
  },

  onError: (error) => {
    setFeedback({
      type: "error",
      msg: getApiErrorMessage(error),
    });
  },
});
    return;
}
  
    function handleCancelCategory() {
      if (pageMode.type === "CREATE") {
        setForm(empityCategoryForm);
        return;
      }
  
      const selectedCategory = category.find(
      (category) => category.id === pageMode.categoryId,
    );
  
      if (!selectedCategory) {
        return;
      }
  
      setForm(createFormFromCategory(selectedCategory));
    }
    if (isLoading) {
    return (
      <main className="settings-page">
        <div className="settings-page__loading">
          Loading Categories...
        </div>
      </main>
    );
  }
  
  if (isError) {
    return (
      <main className="settings-page">
        <div className="settings-page__loading">
          Could not load Categories.
        </div>
      </main>
    );
  }

    return(<>
  <main className="settings-page">
    <header className="settings-page__header">
      <div className="settings-page__heading">
        <span className="settings-page__eyebrow">
          Settings
        </span>

        <h1 className="settings-page__title">
          Category
        </h1>

        <p className="settings-page__description">
          Manage editorial identities and linked users.
        </p>
      </div>

      {pageMode.type === "EDIT" && (
        <button
          className="settings-page__new-button"
          type="button"
          onClick={handleCreateCategory}
        >
          New Category
        </button>
      )}
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

     
    <section className="settings-page__content">
      <aside className="settings-page__list-panel">
        <CategoryList 
          categoryList={category}
          onSelectCategory={handleSelectCategory}
          selectedCategoryId={selectedCategoryId}
          isLoading={isLoading}
        />
      </aside>
     
      <section className="settings-page__editor-panel">
        <CategoryForm
        form = {form}
        mode = {pageMode.type}
        isSaving = {isPending}
        onFormChange = {setForm}
        onSubmit = {handleSubmitCategory}
        onCancel = {handleCancelCategory}
        />
      </section>
    </section>  
  </main>
    
    </>)
}