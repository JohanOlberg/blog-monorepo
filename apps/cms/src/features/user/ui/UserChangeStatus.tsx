import "./UserChangeStatus.css";

const statusOptions = {
  ACTIVE: {
    label: "Active",
    actionLabel:"Activate",
    description: "User can access the CMS",
    className: "user-status-published",
  },
  INACTIVE: {
    label: "Inactive",
    actionLabel:"Deactivate",
    description: "User is disabled",
    className: "user-status-draft",
  },
  BLOCKED: {
    label: "Blocked",
    actionLabel:"Block",
    description: "User is blocked", //post from this user can`t show in blog
    className: "user-status-archived",
  },
} as const;

type UserStatus = keyof typeof statusOptions;

type UserStatusWorkflowProps ={
    currentUserStatus: UserStatus
    isSaving: boolean
    onChangeStatus: (data:UserStatus)=>void
}

export function UserStatusWorkflow({ currentUserStatus, isSaving, onChangeStatus}:UserStatusWorkflowProps) {
  
  const otherStatuses = Object.keys(statusOptions).filter(
    (status) => status !== currentUserStatus
  ) as UserStatus[];

  function handleChangeStatus(status: UserStatus) {
    onChangeStatus(status)
  }

  const current = statusOptions[currentUserStatus];

  return (
    <article className="user-status-control-card">
      <div className="user-status-control-header">
        <span>Status</span>
        <h2>Workflow</h2>
      </div>

      <div className="user-status-workflow">
        <div
          className={`user-status-card user-status-card--current ${current.className}`}
        >
          <span className="user-status-label">Current</span>

          <strong>{current.actionLabel}</strong>
          <small>{current.description}</small>
        </div>

        <div className="user-status-options">
          {otherStatuses.map((status) => {
            const option = statusOptions[status];

            return (
              <button
                key={status}
                className={`user-status-card user-status-card--option ${option.className}`}
                onClick={() => handleChangeStatus(status)}
                type="button"
                disabled={isSaving}
              >
                <span className="user-status-label">Change to</span>
                <strong>{option.label}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
