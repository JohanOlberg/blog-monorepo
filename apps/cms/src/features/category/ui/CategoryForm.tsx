import "./CategoryForm.css"
import type { ChangeEvent, FormEvent } from "react";
import type{ categoryFormData } from "../model/category.types"
import { CategoryColorPicker } from "./CategoryColorPicker";

import { convertToSlug } from "../../../shared/util/convert-to-slug";

type CategoryFormProps = {
    form: categoryFormData;
    mode: "CREATE" | "EDIT";
    isSaving?: boolean;
    onFormChange: (formData: categoryFormData) => void;
    onSubmit: (formData: categoryFormData) => void;
    onCancel: () => void;
}


export function CategoryForm({form, mode, isSaving, onCancel, onFormChange, onSubmit}:CategoryFormProps){

    
      function handleInputChange(
      event: ChangeEvent<HTMLInputElement>,
    ) {
      const { name, value } = event.target;
      if (name === "title") {
    onFormChange({
      ...form,
      title: value,
      slug: convertToSlug(value),
    });

    return;
  }
    
      onFormChange({
        ...form,
        [name]: value,
      });
    }
    
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        onSubmit(form);
    }
    
    function handleCancel() {
        
        onCancel();
    }
    
      return (
        <form className="category-form" onSubmit={handleSubmit}>
          <header className="category-form__header">
            <span className="category-form__eyebrow">
              {mode === "CREATE" ? "New Category" : "Selected Category"}
            </span>
    
            <h2 className="category-form__title">
              {mode === "CREATE" ? "Create Category" : "Edit Category"}
            </h2>
          </header>
    
          <div className="category-form__fields">
            <label className="category-form__field">
              <span>Title</span>
    
              <input
                name="title"
                type="text"
                value={form.title}
                placeholder="Category name"
                disabled={isSaving}
                onChange={handleInputChange}
              />
            </label>
    
            <label className="category-form__field">
              <span>Slug</span>
    
              <input
                name="slug"
                value={form.slug ?? ""}
                placeholder="Auto complete by Title"
                disabled={isSaving}
                onChange={handleInputChange}
              />
            </label>
            <section className="category-form__field">
                <CategoryColorPicker
                    selectedColor={form.color?? "#ffe45e"}
                    onChangeColor={(color) =>
                    onFormChange({
                        ...form,
                        color,
                        })
                    }
                />   
            </section>
            
          </div>
    
          <footer className="category-form__actions">
            <button
              className="category-form__button category-form__button--secondary"
              type="button"
              disabled={isSaving}
              onClick={handleCancel}
            >
              Cancel
            </button>
    
            <button
              className="category-form__button category-form__button--primary"
              type="submit"
              disabled={isSaving}
            >
              {isSaving
                ? "Saving..."
                : mode === "CREATE"
                  ? "Create Category"
                  : "Save Changes"}
            </button>
          </footer>
        </form>
      );
}