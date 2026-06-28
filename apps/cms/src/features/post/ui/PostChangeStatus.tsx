import { useState } from "react";
import { usePostEditorContext } from "../context/PostEditorContext";
import { useChangePostStatus } from "../hooks/useChangeStatus";
import "./PostChangeStatus.css";

const statusOptions = {
  PUBLISHED: {
    label: "Published",
    description: "Visible on blog",
    className: "post-status-published",
  },
  DRAFT: {
    label: "Draft",
    description: "Hidden from blog",
    className: "post-status-draft",
  },
  ARCHIVED: {
    label: "Archived",
    description: "Stored as archive",
    className: "post-status-archived",
  },
} as const;

type PostStatus = keyof typeof statusOptions;

export function PostStatusWorkflow() {
  const { form, updateField } = usePostEditorContext();
  const { mutate, isPending } = useChangePostStatus();

  const [currentStatus, setCurrentStatus] = useState<PostStatus>(
    form.status as PostStatus
  );

  const otherStatuses = Object.keys(statusOptions).filter(
    (status) => status !== currentStatus
  ) as PostStatus[];

  function handleChangeStatus(status: PostStatus) {
    mutate(
      {
        postId: form.id,
        status,
      },
      {
        onSuccess: () => {
          setCurrentStatus(status);
          updateField("status", status);
        },
      }
    );
  }

  const current = statusOptions[currentStatus];

  return (
    <article className="post-status-control-card">
      <div className="post-status-control-header">
        <span>Status</span>
        <h2>Workflow</h2>
      </div>

      <div className="post-status-workflow">
        <div
          className={`post-status-card post-status-card--current ${current.className}`}
        >
          <span className="post-status-label">Current</span>
          <strong>{current.label}</strong>
          <small>{current.description}</small>
        </div>

        <div className="post-status-options">
          {otherStatuses.map((status) => {
            const option = statusOptions[status];

            return (
              <button
                key={status}
                className={`post-status-card post-status-card--option ${option.className}`}
                onClick={() => handleChangeStatus(status)}
                type="button"
                disabled={isPending}
              >
                <span className="post-status-label">Change to</span>
                <strong>{option.label}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}
