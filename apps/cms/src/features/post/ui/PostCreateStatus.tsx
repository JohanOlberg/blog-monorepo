import "./PostCreateStatus.css";

type PostCreateStatusProps = {
  isPostSaved?: boolean;
  canPublish?: boolean;
  onPublish?: () => void;
};

export function PostCreateStatus({
  isPostSaved = false,
  canPublish = false,
  onPublish,
}: PostCreateStatusProps) {
  const canUsePublishButton = isPostSaved && canPublish;

  return (
    <article className="post-create-status">
      <header className="post-create-status__header">
        <span>Status</span>
        <strong>Workflow</strong>
      </header>

      <div className="post-create-status__current">
        <span className="post-create-status__label">Current</span>
        <strong>Draft</strong>

        <small>
          {isPostSaved
            ? "This post is saved as draft and can be published."
            : "Save this post before publishing."}
        </small>
      </div>

      <button
        type="button"
        className="post-create-status__publish"
        disabled={!canUsePublishButton}
        onClick={onPublish}
      >
        {canUsePublishButton ? "Publish post" : "Save before publishing"}
      </button>
    </article>
  );
}