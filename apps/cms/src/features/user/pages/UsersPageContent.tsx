import { useState } from "react";

import type {
  User,
  UserFormData,
  userRoles,
  userStatus,
  
} from "../model/user.types";

import { UsersList } from "../ui/UsersList";
import { UserForm } from "../ui/UserForm";
import { ChangePassword } from "../ui/ChangePassword";
import { UserStatusWorkflow } from "../ui/UserChangeStatus";
import { UserChangeRoles } from "../ui/UserChangeRoles";

import { useChangeUserStatus } from "../hooks/useUserChangeStatus"; 
import { useUserCreate } from "../hooks/useUserCreate";
import { useUserUpdate } from "../hooks/useUserUpdate";
import { useListRoles } from "../hooks/useUserListRoles";

import "./UsersPageContent.css"


type UsersPageContentProps = {
  users: User[];
};

type UserPageMode =
  | {
      type: "CREATE";
    }
  | {
      type: "EDIT";
      userId: number;
    };

const emptyUserForm: UserFormData = {
  name: "",
  email: "",
  password: "",
  role: "AUTHOR",
  status: "ACTIVE",
};

function createFormFromUser(user: User): UserFormData {
  return {
    name: user.name,
    email: user.email,
    password: "",
    role: user.role,
    status: user.status,
  };
}

export function UsersPageContent({
  users,
}: UsersPageContentProps) {
  const firstUser = users[0] ?? null;

  const { mutate : changeStatus, isPending } = useChangeUserStatus();

  const {mutate : userCreate, } = useUserCreate()

  const {data :  UserRoleOption = [], } =  useListRoles()


  const [pageMode, setPageMode] = useState<UserPageMode>(() =>
    firstUser
      ? {
          type: "EDIT",
          userId: firstUser.id,
        }
      : {
          type: "CREATE",
        },
  );
  const selectedUserId = pageMode.type === "EDIT" ? pageMode.userId : null;


  const {mutate : userUpdate} = useUserUpdate(selectedUserId)

  const [form, setForm] = useState<UserFormData>(() =>
    firstUser
      ? createFormFromUser(firstUser)
      : emptyUserForm,
  );



  const isSaving = false;

  function handleChangePassword(){}

  function handleChangeStatus(status:userStatus){
    
    changeStatus({selectedUserId, status})
    setForm((currentForm) => ({
  ...currentForm,
  status,
}));
  }

  function handleCreateUser() {
    setPageMode({
      type: "CREATE",
    });

    setForm(emptyUserForm);
  }

  function handleSelectUser(userId: number) {
    const selectedUser = users.find(
      (user) => user.id === userId,
    );

    if (!selectedUser) {
      return;
    }

    setPageMode({
      type: "EDIT",
      userId,
    });

    setForm(createFormFromUser(selectedUser));
  }

  function handleChangeRole(role:userRoles){
    setForm((currentForm) => ({
  ...currentForm,
  role,
}));
  }


  function handleSubmitUser(formData: UserFormData) {
    if (pageMode.type === "CREATE") {
      userCreate(formData)
      return;
    }

    userUpdate(formData)
    
  }

  function handleCancelUser() {
    if (pageMode.type === "CREATE") {
      setForm(emptyUserForm);
      return;
    }
    const selectedUser = users.find(
      (user) => user.id === pageMode.userId,
    );

    if (!selectedUser) {
      return;
    }

    //UserRoleOption?.map(role=> role.value)

    setForm(createFormFromUser(selectedUser));
  }

  return (
    <main className="settings-page">
      <header className="settings-page__header">
        <div className="settings-page__heading">
          <span className="settings-page__eyebrow">
            Settings
          </span>

          <h1 className="settings-page__title">
            Users
          </h1>

          <p className="settings-page__description">
            Manage CMS users, permissions and account status.
          </p>
        </div>

        {pageMode.type === "EDIT" && (
          <button
            className="settings-page__new-button"
            type="button"
            onClick={handleCreateUser}
          >
            New User
          </button>
        )}
      </header>

      <section className="settings-page__content">
        <aside className="settings-page__list-panel">
          <UsersList
            users={users}
            selectedUserId={selectedUserId}
            onSelectUser={handleSelectUser}
          />
        </aside>
        <section className="user-editor-layout">
          <section className="user-editor-layout__quick-actions">
            <UserStatusWorkflow 
              mode={pageMode.type}
              isSaving={isPending}
              currentUserStatus={form.status}
              onChangeStatus={handleChangeStatus}
              />
              <UserChangeRoles 
              mode={pageMode.type}
              roles = {UserRoleOption}
              isSaving={isPending}
              currentRoleValue ={form.role}
              onChangeRole={handleChangeRole}
              />
          </section>
        

        <ChangePassword
        userId={selectedUserId}
        onChangePassword={handleChangePassword}
        />


        <section className="settings-page__editor-panel">
          <UserForm
            mode={pageMode.type}
            form={form}
            isSaving={isSaving}
            onFormChange={setForm}
            onSubmit={handleSubmitUser}
            onCancel={handleCancelUser}
          />
        </section>

        </section>
        
      </section>
    </main>
  );
}