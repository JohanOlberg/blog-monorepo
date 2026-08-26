   import "./UserDisableRoles.css"

   export function UserDisableRoles(){
    
    return(
    <article className="post-create-status">
      <header className="post-create-status__header">
        <span>Status</span>
        <strong>Workflow</strong>
      </header>

      <div className="post-create-status__current">
        <span className="post-create-status__label">Current</span>
        <strong>Inactive</strong>

        <small>
          Save this user before activate.
        </small>
      </div>

      <button
        type="button"
        className="post-create-status__publish"
        disabled={true}
      >
        Save before activate
      </button>
    </article>
    )}