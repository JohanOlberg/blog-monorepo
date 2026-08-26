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
  const sortedUsers = [...users].sort((a, b) => {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
});
  return(

    <UsersPageContent users={sortedUsers} />
 )
   
}