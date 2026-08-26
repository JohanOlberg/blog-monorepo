import "./UserSelector.css";
import type { UserListItem } from "../model/user.types";

type UsersListProps = {
  users: UserListItem[];
  currentUser:number | null
  isLoading:boolean;
  isError:boolean

  onSelectUser: (userId: number) => void;
};


function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}


export function UserSelector({
  users,
  currentUser,
  isLoading,
  isError,
  onSelectUser,
}: UsersListProps) {
  
 const current =  users?.find((current) => current.id === currentUser)

  function handleSelectUser(user:UserListItem){
    onSelectUser(user.id)
  }

  if (isLoading) {
    return (
      <section className="author-widget">
        <p>Loading users...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="author-widget">
        <p>Failed to load users.</p>
      </section>
    );
  }

  return (
    <section className="author-widget">
      <header className="author-widget__header">
        <span>Author</span>
        <strong>Content Signature</strong>
      </header>

      
        <div className="author-current">
  
        {current ?(

            <div className="author-main-info">
                <div className="authors-avatar">
                    {getInitials(current.name)}
                </div>
                <div>
                    <strong>{current.name}</strong>
                    <small>{current.email}</small>
                    <small>Current User</small>
                </div>
            </div>
            
        ) : (
        <div className="author-main-info">
            <span className="author-avatar author-avatar--empty"></span>
            <div>
              <strong>No User selected</strong>
              <small>Select an User below</small>
            </div>
        </div>
        )}
        
        </div>

      <div className="author-list">
        {users
          ?.filter((user) => user.id !== currentUser)
          .map((user) => (
            <article className="author-item" key={user.id}>
              <div className="author-main-info">
                <div className="authors-avatar">
                  {getInitials(user.name)}
                </div>

                <div>
                  <strong>{user.name}</strong>
                  <small>{user.email}</small>
                  <small>{user.status}</small>
                </div>
              </div>

              <button
                className="author-small-btn"
                onClick={() => handleSelectUser(user)}
                //disabled={isPending}
              >
                Select
              </button>
            </article>
          ))}
      </div>
    </section>
  );
}