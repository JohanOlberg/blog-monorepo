import { useState } from "react";
import { usePostEditorContext } from "../context/PostEditorContext";
import { useChangePostStatus } from "../hooks/useChangeStatus";
import "./PostChangeStatus.css"
 
const statusOptions = {
  PUBLISHED: {
    label: "Published",
    description: "Visible on blog",
    className: "status-published",
  },
  DRAFT: {
    label: "Draft",
    description: "Hidden from blog",
    className: "status-draft",
  },
  ARCHIVED: {
    label: "Archived",
    description: "Stored as archive",
    className: "status-archived",
  },
} as const;

type PostStatus = keyof typeof statusOptions;

export function PostStatusWorkflow() {
    const { form } = usePostEditorContext();
    const { mutate } = useChangePostStatus()
    const [currentStatus, setCurrentStatus] = useState<PostStatus>(
  form.status as PostStatus
);
  

    const otherStatuses = Object.keys(statusOptions).filter(
        (status) => status !== currentStatus
    ) as PostStatus[];


  function handleChangeStatus(status: PostStatus) {
    mutate({
      postId: form.id,
      status,
    },
    {
      onSuccess: () => {
        setCurrentStatus(status);
      },
    });

  }

  const current = statusOptions[currentStatus];

  return (
    <article className="control-card">
      <div className="control-header">
        <span>Status</span>
        <h2>Workflow</h2>
      </div>

      <div className="status-workflow">
        <div className={`status-card status-card--current ${current.className}`}>
            <span className="status-label">Current</span>
            <strong>{current.label}</strong>
            <small>{current.description}</small>
        </div>

        <div className="status-options">
          {otherStatuses.map((status) => {
            const option = statusOptions[status];

            return (
              <button
                key={status}
                className={`status-card status-card--option ${option.className}`}
                onClick={() => handleChangeStatus(status)}
                type="button"
              >
                <span className="status-label">Change to</span>
                <strong>{option.label}</strong>
              </button>
            );
          })}
        </div>
      </div>
    </article>
  );
}