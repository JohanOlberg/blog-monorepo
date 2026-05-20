import "./PostChangeAuthor.css"
    
export function PostChangeAuthor(){
    return( 
        
    <section className="editor-card">
      <h1 className="title">Edit post</h1>

      <label className="field-label">Author</label>

      <div className="author-control">
        <button className="author-trigger" type="button">
          <span className="avatar">JO</span>
          <span>
            <strong>Johan Olberg</strong>
            <small>Current author · click to search and change</small>
          </span>
          <span className="author-trigger__arrow">⌄</span>
        </button>

        <section className="author-dropdown">
          <header className="author-dropdown__header">
            <span>Author selector</span>
            <h2>Choose author</h2>
          </header>

          <div className="author-search-area">
            <label>Search by name, email or knowledge</label>
            <input value="Johan" aria-label="Search author" />
          </div>

          <div className="author-results">
            <button className="author-result is-current" type="button">
              <span className="avatar">JO</span>
              <span>
                <h3>Johan Olberg</h3>
                <p>jolberg@gmail.com</p>
                <p>Writes about React, CMS architecture and frontend engineering.</p>
                <span className="tag-row">
                  <span className="tag">React</span>
                  <span className="tag">CMS</span>
                  <span className="tag">Frontend</span>
                </span>
              </span>
              <span className="author-result__action">Current</span>
            </button>

            <button className="author-result" type="button">
              <span className="avatar">JD</span>
              <span>
                <h3>Johan Dev</h3>
                <p>johan.dev@gmail.com</p>
                <p>Focused on UX, design systems and editorial layout.</p>
                <span className="tag-row">
                  <span className="tag">UX</span>
                  <span className="tag">Design</span>
                </span>
              </span>
              <span className="author-result__action">Select</span>
            </button>
          </div>

          <footer className="author-dropdown__footer">
            <p>Showing similar authors.</p>
            <button className="btn" type="button">Cancel</button>
          </footer>
        </section>
      </div>
    </section>
    )
}