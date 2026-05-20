import "./PostEditControls.css"
import { useRef } from 'react';
export default function PostEditControlsSimple() {
  const authorModal = useRef(null)
  return (
    <section className="post-controls">
      {/* =====================================================
        AUTHOR
      ====================================================== */}
      <article className="control-card">
        <div className="control-header">
          <span>AUTHOR</span>
          <h2>Ownership</h2>
        </div>

        <div className="author-current">
          <div className="avatar">JO</div>

          <div>
            <strong>Johan Olberg</strong>
            <small>jolberg@gmail.com</small>
          </div>
        </div>

        <button className="author-button" onClick={() => authorModal.current.showModal()}>
          Change author
        </button>
      </article>


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
      <article className="control-card">
        <div className="control-header">
          <span>STATUS</span>
          <h2>Workflow</h2>
        </div>

        <div className="status-workflow">
          <button className="status-current status-published">
            <span className="status-label">Current</span>
            <strong>Published</strong>
            <small>Visible on blog</small>
          </button>

          <div className="status-options">
            <button className="status-option status-draft">
              <span className="status-label">Change to</span>
              <strong>Draft</strong>
            </button>

            <button className="status-option status-archived">
              <span className="status-label">Change to</span>
              <strong>Archived</strong>
            </button>
          </div>
        </div>
      </article>

      {/* =====================================================
        AUTHOR MODAL MOCK
      ====================================================== */}
      <dialog ref={authorModal} className="modal-backdrop">
        <section className="author-modal">
          <header className="author-modal-header">
            <div>
              <span>AUTHOR SELECTOR</span>
              <h2>Choose author</h2>
            </div>

            <button className="close-button">×</button>
          </header>

          <div className="author-search">
            <input placeholder="Search by name, email or knowledge..." />
          </div>

          <div className="author-results">
            <button className="author-result current-author-result">
              <div className="avatar">JO</div>

              <div>
                <strong>Johan Olberg</strong>
                <small>jolberg@gmail.com</small>

                <p>
                  React, CMS architecture and frontend engineering.
                </p>

                <div className="tags">
                  <span>React</span>
                  <span>CMS</span>
                  <span>Frontend</span>
                </div>
              </div>

              <div className="author-action">Current</div>
            </button>

            <button className="author-result">
              <div className="avatar">JD</div>

              <div>
                <strong>Johan Dev</strong>
                <small>johan.dev@gmail.com</small>

                <p>
                  UX, design systems and editorial layouts.
                </p>

                <div className="tags">
                  <span>UX</span>
                  <span>Design</span>
                </div>
              </div>

              <div className="author-action">Select</div>
            </button>
          </div>
        </section>
      </dialog>

    </section>
  );
}
