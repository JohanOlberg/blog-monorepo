import { useUser } from "../hooks/useUser";
import { UsersPageContent } from "./UsersPageContent";


export function UsersPage() {
  const {
    data: users = [],
    isLoading,
    isError,
  } = useUser();

  if (isLoading) {
    return (
      <main className="settings-page">
        <div className="settings-page__loading">
          Loading users...
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="settings-page">
        <div className="settings-page__loading">
          Could not load users.
        </div>
      </main>
    );
  }

  return(

    <UsersPageContent users={users} />
 )
   
}