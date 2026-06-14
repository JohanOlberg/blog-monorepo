import "./PostChangeAuthor.css"
    
export function PostChangeAuthor(){
    return( 
        
    <section className="author-widget">
      <header className="author-widget__header">
        <span>Author</span>
        <strong>Ownership</strong>
      </header>

      <div className="author-current">
        <div className="author-avatar">JO</div>

        <div>
          <strong>Johan Olberg</strong>
          <small>jolberg@gmail.com</small>
        </div>
      </div>

      <button className="author-change-btn">
        Change author
      </button>


    </section>
    )
}