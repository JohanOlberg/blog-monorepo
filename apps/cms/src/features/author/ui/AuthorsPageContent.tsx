import {  useState } from "react";
import { AuthorsList } from "../ui/AuthorsList";
import { AuthorForm } from "../ui/AuthorForm";

import type {
  Author,
  AuthorFormData,
} from "../model/author.types";
import { useAuthorCreate } from "../hooks/useAuthorCreate";
import { useAuthorUpdate } from "../hooks/useAuthorUpdate";
import { useUser } from "../../user/hooks/useUser";
import { UserSelector } from "../../user/ui/UserSelector";

import { FeedbackMessage } from "../../../shared/ui/FeedbackMessage";
import { getApiErrorMessage } from "../../../shared/api/getApiErrorMessage";


type AuthorPageMode =
  | {
      type: "CREATE";
    }
  | {
      type: "EDIT";
      authorId: number;
    };

type AuthorsPageContentProps = {
  authors: Author[];
};

const emptyAuthorForm: AuthorFormData = {
  name: "",
  bio: "",
  avatarUrl: "",
  userId: 0,
  status:"INACTIVE"
};


function createFormFromAuthor(author: Author): AuthorFormData {
  return {
    name: author.name,
    bio: author.bio ?? "",
    avatarUrl: author.avatarUrl ?? "",
    userId: author.userId,
    status: author.status
  };
}

export function AuthorsPageContent({
  authors,
}: AuthorsPageContentProps) {
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const firstAuthor = authors[0] ?? null;
  const { data: usersList, isLoading :userLoding, isError:userError } = useUser();
  const {mutate : createAuthor} = useAuthorCreate()
  const [pageMode, setPageMode] = useState<AuthorPageMode>(() =>
    firstAuthor
      ? {
          type: "EDIT",
          authorId: firstAuthor.id,
        }
      : {
          type: "CREATE",
        },
  );
    const selectedAuthorId =
    pageMode.type === "EDIT"
        ? pageMode.authorId
        : undefined;
    
  const {
  mutate: updateAuthor,
} = useAuthorUpdate(selectedAuthorId);

  

  const [form, setForm] = useState<AuthorFormData>(() =>
    firstAuthor
      ? createFormFromAuthor(firstAuthor)
      : emptyAuthorForm,
  );


  const isSaving = false;

  const usersListitem = usersList?.map((user) => (
    {
      id:user.id, 
      name: user.name, 
      email: user.email,
      status: user.status

    }))

  function SelectUser(id:number){
    setForm({...form, userId : id})
  }

  function handleCreateAuthor() {
    setPageMode({
      type: "CREATE",
    });

    setForm(emptyAuthorForm);
  }

  function handleSelectAuthor(authorId: number) {
    const selectedAuthor = authors.find(
      (author) => author.id === authorId,
    );

    if (!selectedAuthor) {
      return;
    }

    setPageMode({
      type: "EDIT",
      authorId,
    });

    setForm(createFormFromAuthor(selectedAuthor));
  }

  function handleSubmitAuthor(formData: AuthorFormData) {
    if (pageMode.type === "CREATE") {
      createAuthor(formData, {
        onSuccess:(data:Author) => {
          setFeedback({type:"success",msg:"Sucefull to create a New Author!"})
          setForm(createFormFromAuthor(data))
          setPageMode({
            type: "EDIT",
            authorId:data.id,
          })
        },
        onError: (error) => {
          setFeedback({
            type: "error",
            msg: getApiErrorMessage(error),
          });
        }
      })
     return;
    }
      
     updateAuthor(formData, {
        onSuccess:() => {
          setFeedback({type:"success",msg:"Sucefull edited Author!"})
          //setForm(createFormFromAuthor(formData))
          
        },
        onError: (error) => {
          setFeedback({
            type: "error",
            msg: getApiErrorMessage(error),
          });
        }
      })
    }
    
  

  function handleCancelAuthor() {
    if (pageMode.type === "CREATE") {
      setForm(emptyAuthorForm);
      return;
    }

    const selectedAuthor = authors.find(
      (author) => author.id === pageMode.authorId,
    );

    if (!selectedAuthor) {
      return;
    }

    setForm(createFormFromAuthor(selectedAuthor));
  }
  

  return (
    
    <main className="settings-page">
      <header className="settings-page__header">
        <div className="settings-page__heading">
          <span className="settings-page__eyebrow">
            Settings
          </span>

          <h1 className="settings-page__title">
            Authors
          </h1>

          <p className="settings-page__description">
            Manage editorial identities and linked users.
          </p>
        </div>

        {pageMode.type === "EDIT" && (
          <button
            className="settings-page__new-button"
            type="button"
            onClick={handleCreateAuthor}
          >
            New Author
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
          <AuthorsList
            authorsList={authors}
            selectedAuthorId={selectedAuthorId}
            onSelectAuthor={handleSelectAuthor}
          />
        </aside>
        <section className="user-editor-layout">
          {pageMode.type === "CREATE" ? (
          <section className="settings-page__editor-panel">
            <UserSelector
              currentUser={form.userId}
              isError={userError}
              isLoading= {userLoding}
              onSelectUser={SelectUser}
              users={usersListitem??[]}
            />
          </section>
          ):(<></>)
          }
          <section className="settings-page__editor-panel">
            <AuthorForm
              mode={pageMode.type}
              form={form}
              isSaving={isSaving}
              onFormChange={setForm}
              onSubmit={handleSubmitAuthor}
              onCancel={handleCancelAuthor}
            />
          </section>
        </section>
      
        
      </section>
    </main>
  );
}