import "./CategorySelector.css";

export function CategorySelector() {
  return (
    <section className="category-widget">
      <header className="category-widget__header">
        <span>Category</span>
        <strong>Content Identity</strong>
      </header>

      <div className="category-current">
        <div className="category-main-info">
          <span className="category-color" style={{ background: "#2afc98" }} />

          <div>
            <strong>Frontend</strong>
            <small>Current category</small>
          </div>
        </div>

        <button className="category-small-btn">Edit</button>
      </div>

      <div className="category-list">
        <article className="category-item">
          <div className="category-main-info">
            <span className="category-color" style={{ background: "#bba7ff" }} />

            <div>
              <strong>Architecture</strong>
              <small>architecture</small>
            </div>
          </div>

          <button className="category-small-btn">Edit</button>
        </article>

        <article className="category-form">
          <label>
            Title
            <input defaultValue="Architecture" />
          </label>

          <label>
            Slug
            <input defaultValue="architecture" />
          </label>

          <label>
            Color
            <div className="category-colors">
              <button style={{ background: "#2afc98" }} />
              <button style={{ background: "#bba7ff" }} />
              <button style={{ background: "#ffb347" }} />
              <button style={{ background: "#ff66c4" }} />
            </div>
          </label>

          <button className="category-save-btn">Save</button>
        </article>

        <article className="category-item">
          <div className="category-main-info">
            <span className="category-color" style={{ background: "#ffb347" }} />

            <div>
              <strong>Backend</strong>
              <small>backend</small>
            </div>
          </div>

          <button className="category-small-btn">Edit</button>
        </article>

        <article className="category-item">
          <div className="category-main-info">
            <span className="category-color" style={{ background: "#ff66c4" }} />

            <div>
              <strong>UX/UI</strong>
              <small>ux-ui</small>
            </div>
          </div>

          <button className="category-small-btn">Edit</button>
        </article>
      </div>

      <article className="category-create">
        <button className="category-create-btn">+ Create category</button>

        <div className="category-form category-form--create">
          <label>
            Title
            <input placeholder="New category" />
          </label>

          <label>
            Slug
            <input placeholder="new-category" />
          </label>

          <label>
            Color
            <div className="category-colors">
              <button style={{ background: "#2afc98" }} />
              <button style={{ background: "#bba7ff" }} />
              <button style={{ background: "#ffb347" }} />
              <button style={{ background: "#ff66c4" }} />
            </div>
          </label>

          <button className="category-save-btn">Save</button>
        </div>
      </article>
    </section>
  );
}