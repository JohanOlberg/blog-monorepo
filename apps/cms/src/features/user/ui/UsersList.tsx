import type { UserListItem } from "../model/user.types";

import "../../author/ui/AuthorsList.css";

type UsersListProps = {
  users: UserListItem[];
  selectedUserId: number | null;
  onSelectUser: (userId: number) => void;
};

function getInitials(name: string) {
  //if(!name){ throw new Error("Nane required")};
  
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function UsersList({
  users,
  selectedUserId,
  onSelectUser,
}: UsersListProps) {
  if (users.length === 0) {
    return (
      <div className="authors-list__feedback">
        <strong>No users found</strong>

        <p>Create your first user using the editor.</p>
      </div>
    );
  }

  return (
    <div className="authors-list">
      <div className="authors-list__header">
        <h2>Users</h2>

        <span>{users.length}</span>
      </div>

      <ul className="authors-list__items">
        {users.map((user) => {
          const isSelected = selectedUserId === user.id;

          return (
            <li key={user.id}>
              <button
                className={`authors-list__item ${
                  isSelected ? "authors-list__item--selected" : ""
                }`}
                type="button"
                onClick={() => onSelectUser(user.id)}
                aria-pressed={isSelected}
              >
                <span className="authors-list__avatar">
                  {getInitials(user.name)}
                </span>

                <span className="authors-list__information">
                  <strong className="authors-list__name">
                    {user.name}
                  </strong>

                  <span className="authors-list__email">
                    {user.email}
                  </span>

                  <span
                    className={`authors-list__status authors-list__status--${user.status.toLowerCase()}`}
                  >
                    {user.status}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}