import {
  type ChangeEvent,
  type FormEvent,
} from "react";

import type{AuthorFormData,  } from "../model/author.types";
import "./AuthorForm.css";

type AuthorFormProps = {
  mode: "CREATE" | "EDIT";
  form: AuthorFormData;
  //users: UserOption[];
  isSaving?: boolean;
  onFormChange: (formData: AuthorFormData) => void;
  onSubmit: (formData: AuthorFormData) => void;
  onCancel: () => void;
};

export function AuthorForm({
  mode,
  form,
  isSaving = false,
  onFormChange,
  onSubmit,
  onCancel,
}: AuthorFormProps) {
  

  function handleInputChange(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) {
  const { name, value } = event.target;

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
    <form className="author-form" onSubmit={handleSubmit}>
      <header className="author-form__header">
        <span className="author-form__eyebrow">
          {mode === "CREATE" ? "New author" : "Selected author"}
        </span>

        <h2 className="author-form__title">
          {mode === "CREATE" ? "Create Author" : "Edit Author"}
        </h2>
      </header>

      <div className="author-form__fields">
        <label className="author-form__field">
          <span>Name</span>

          <input
            name="name"
            type="text"
            value={form.name}
            placeholder="Author name"
            disabled={isSaving}
            onChange={handleInputChange}
          />
        </label>

        <label className="author-form__field">
          <span>Bio</span>

          <textarea
            name="bio"
            value={form.bio ?? ""}
            placeholder="Write a short biography"
            disabled={isSaving}
            onChange={handleInputChange}
          />
        </label>

      </div>

      <footer className="author-form__actions">
        <button
          className="author-form__button author-form__button--secondary"
          type="button"
          disabled={isSaving}
          onClick={handleCancel}
        >
          Cancel
        </button>

        <button
          className="author-form__button author-form__button--primary"
          type="submit"
          disabled={isSaving}
        >
          {isSaving
            ? "Saving..."
            : mode === "CREATE"
              ? "Create Author"
              : "Save Changes"}
        </button>
      </footer>
    </form>
  );
}