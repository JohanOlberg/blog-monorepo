import type {
  ChangeEvent,
  FormEvent,
} from "react";

import type {
  UserFormData,
  userRoles,
  userStatus,
} from "../model/user.types";

import "../../author/ui/AuthorForm.css";

type UserFormProps = {
  mode: "CREATE" | "EDIT";
  form: UserFormData;
  isSaving?: boolean;
  onFormChange: (formData: UserFormData) => void;
  onSubmit: (formData: UserFormData) => void;
  onCancel: () => void;
};

const roleOptions: userRoles[] = [
  "ADMIN",
  "EDITOR",
  "AUTHOR",
];

const statusOptions: userStatus[] = [
  "ACTIVE",
  "INACTIVE",
  "BLOCKED",
];

export function UserForm({
  mode,
  form,
  isSaving = false,
  onFormChange,
  onSubmit,
  onCancel,
}: UserFormProps) {
  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target;

    onFormChange({
      ...form,
      [name]: value,
    });
  }

  function handleRoleChange(
    event: ChangeEvent<HTMLSelectElement>,
  ) {
    onFormChange({
      ...form,
      role: event.target.value as userRoles,
    });
  }

  function handleStatusChange(
    event: ChangeEvent<HTMLSelectElement>,
  ) {
    onFormChange({
      ...form,
      status: event.target.value as userStatus,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(form);
  }

  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <header className="author-form__header">
        <span className="author-form__eyebrow">
          {mode === "CREATE" ? "New user" : "Selected user"}
        </span>

        <h2 className="author-form__title">
          {mode === "CREATE" ? "Create User" : "Edit User"}
        </h2>
      </header>

      <div className="author-form__fields">
        <label className="author-form__field">
          <span>Name</span>

          <input
            name="name"
            type="text"
            value={form.name}
            placeholder="User name"
            disabled={isSaving}
            onChange={handleInputChange}
          />
        </label>

        <label className="author-form__field">
          <span>Email</span>

          <input
            name="email"
            type="email"
            value={form.email}
            placeholder="user@email.com"
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
          onClick={onCancel}
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
              ? "Create User"
              : "Save Changes"}
        </button>
      </footer>
    </form>
  );
}