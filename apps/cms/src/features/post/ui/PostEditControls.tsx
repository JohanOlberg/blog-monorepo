import "./PostEditControls.css"
//import { useChangePostStatus } from "../hooks/useChangeStatus";
//import { usePostEditorContext } from "../context/PostEditorContext";
import { PostStatusWorkflow } from "./PostChangeStatus";

export default function PostEditControlsSimple() {
  //const { mutate } = useChangePostStatus()
  //const { form } = usePostEditorContext();

  return (
    <section className="post-controls">


      {/* =====================================================
        CATEGORY
      ====================================================== */}
      <article className="control-card">
        <div className="control-header">
          <span>CATEGORY</span>
          <h2>Content Identity</h2>
        </div>

        <div className="category-dropdown">
          <button className="category-trigger">
            <span
              className="category-color"
              style={{ background: '#2afc98' }}
            />

            <span>
              <strong>Frontend</strong>
              <small>Current category</small>
            </span>

            <span className="arrow">⌄</span>
          </button>

          <div className="category-menu">
            <button className="category-option">
              <span
                className="category-color"
                style={{ background: '#2afc98' }}
              />
              <span>Frontend</span>
              <small>23 posts</small>
            </button>

            <button className="category-option">
              <span
                className="category-color"
                style={{ background: '#bba7ff' }}
              />
              <span>Architecture</span>
              <small>12 posts</small>
            </button>

            <button className="category-option">
              <span
                className="category-color"
                style={{ background: '#ffb347' }}
              />
              <span>Backend</span>
              <small>9 posts</small>
            </button>
          </div>
        </div>
      </article>


      {/* =====================================================
        STATUS
      ====================================================== */}


        <PostStatusWorkflow/>

    </section>
  );
}
