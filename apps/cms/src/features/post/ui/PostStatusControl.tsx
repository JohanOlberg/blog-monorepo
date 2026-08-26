import "./PostStatusControl.css";

 const postStatusOptions = {
  DRAFT: {
    label: "Draft",
    description: "Hidden from blog",
    className: "post-status-draft",
  },
  PUBLISHED: {
    label: "Published",
    description: "Visible on blog",
    className: "post-status-published",
  },
  ARCHIVED: {
    label: "Archived",
    description: "Stored as archive",
    className: "post-status-archived",
  },
} as const;

export type PostStatus = keyof typeof postStatusOptions;

type PostStatusControlProps = {
  mode: "CREATE" | "EDIT";
  currentStatus?: PostStatus;
  isPostSaved?: boolean;
  isSaving?: boolean;
  canPublish?: boolean;
  onChangeStatus?: (status: PostStatus) => void;
};

export function PostStatusControl({
  mode,
  currentStatus,
  isPostSaved = mode === "EDIT",
  isSaving,
  canPublish = false,
  onChangeStatus,
}: PostStatusControlProps) {
    const safeCurrentStatus: PostStatus = currentStatus ?? "DRAFT";
    const current = postStatusOptions[safeCurrentStatus];

    const otherStatuses = Object.keys(postStatusOptions).filter(
    (status) => status !== safeCurrentStatus,
    ) as PostStatus[];

  function handleChangeStatus(status: PostStatus) {
    if (!onChangeStatus) {
      return;
    }

    if (mode === "CREATE" && !isPostSaved) {
      return;
    }

    onChangeStatus(status);
  }

  return (
    <article className="post-status-control-card">
      <div className="post-status-control-header">
        <span>Status</span>
        <h2>{mode === "CREATE" ? "Workflow" : "Workflow"}</h2>
      </div>

      <div className="post-status-workflow">
        <div
          className={`post-status-card post-status-card--current ${current.className}`}
        >
          <span className="post-status-label">Current</span>
          <strong>{current.label}</strong>
          <small>
            {mode === "CREATE" && !isPostSaved
              ? "New posts start as draft. Save the post before publishing."
              : current.description}
          </small>
        </div>

        {mode === "CREATE" && (
          <button
            className="post-status-publish-button"
            type="button"
            disabled={!isPostSaved || !canPublish || isSaving}
            onClick={() => handleChangeStatus("PUBLISHED")}
          >
            {isSaving ? "Publishing..." : "Publish"}
          </button>
        )}

        {mode === "EDIT" && (
          <div className="post-status-options">
            {otherStatuses.map((status) => {
              const option = postStatusOptions[status];

              return (
                <button
                  key={status}
                  className={`post-status-card post-status-card--option ${option.className}`}
                  onClick={() => handleChangeStatus(status)}
                  type="button"
                  disabled={isSaving}
                >
                  <span className="post-status-label">Change to</span>
                  <strong>{option.label}</strong>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
}