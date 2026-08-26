import {useState, type ChangeEvent, type FormEvent} from "react";

import "./ChangePassword.css";

type ChangePasswordProps = {
  userId: number;
  isSaving: boolean;
  onChangePassword: (data: {
    userId: number;
    password: string;
  }) => void;
};

export function ChangePassword({userId,  isSaving = false,  onChangePassword,}: ChangePasswordProps) {
  const [password, setPassword] = useState<string>()

  const isDisabled = isSaving;


   function handlePasswordChange(event: ChangeEvent<HTMLInputElement>) {
      setPassword(event.target.value)
   }
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();


    if (!password) {
      return;
    }
      
    onChangePassword({
      userId,
      password,
    });
    setPassword("")
  }

  return (
    <article className="change-password-box">
      <header className="change-password-box__header">
        <span className="change-password-box__eyebrow">
          Quick Actions
        </span>

        <h2 className="change-password-box__title">
          Change Password
        </h2>
      </header>

      <form
        className="change-password-box__form"
        onSubmit={handleSubmit}
      >
        <label className="change-password-box__field">
          <span>New password</span>

          <input
            type="password"
            value={password}
            placeholder={"Type a new password"}
            disabled={isDisabled}
            onChange={handlePasswordChange}
          />
        </label>

        <button
          className="change-password-box__button"
          type="submit"
          disabled={isDisabled}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>
      </form>
    </article>
  );
}