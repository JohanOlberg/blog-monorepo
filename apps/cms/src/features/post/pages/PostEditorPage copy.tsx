//import { PostMetadaForm } from "../ui/PostMetadataForm"
import { useEditor } from "@tiptap/react";
import "./PostEditorPage.css";
import StarterKit from "@tiptap/starter-kit";



export function PostEditorPage() {
/*
useEditor({

    extensions: [StarterKit],
    //content: value,
    //onUpdate: ({ editor }) => {
    //onchange(editor.getHTML())
    }
})

*/




  return (
    <main className="post-edit-page">
      <section className="post-edit-shell">
        <header className="post-edit-header">
          <div>
            <span className="post-edit-label">Edit mode</span>
            <h1>Edit Post</h1>
            <p>Atualize as informações do seu post e publique quando estiver pronto.</p>
          </div>

          <div className="post-edit-header-actions">
            <button className="neo-icon-button">☼</button>
            <button className="neo-icon-button">◉</button>
            <button className="neo-icon-button">⋮</button>
            <button className="neo-button">Cancelar</button>
            <button className="neo-button neo-button-dark">Salvar alterações</button>
          </div>
        </header>

        <form className="post-edit-form">
          <section className="post-edit-grid">
            <div className="neo-field field-title">
              <label>Title</label>
              <input type="text" defaultValue="Emerging Web Design Trends" />
            </div>

            <div className="neo-field">
              <label>Status</label>
              <select defaultValue="Published">
                <option>Draft</option>
                <option>Published</option>
                <option>Archived</option>
              </select>
            </div>

            <div className="neo-field field-title">
              <label>Slug</label>
              <input type="text" defaultValue="emerging-web-design-trends" />
            </div>

            <div className="neo-field">
              <label>Category</label>
              <select defaultValue="Design">
                <option>Design</option>
                <option>Frontend</option>
                <option>Architecture</option>
              </select>
            </div>

            <div className="neo-field">
              <label>Author</label>
              <input type="text" defaultValue="Johan Olberg" />
            </div>

            <div className="neo-card dates-card">
              <div>
                <span>Created at</span>
                <strong>2026-05-08</strong>
              </div>

              <div>
                <span>Updated at</span>
                <strong>2026-05-13</strong>
              </div>

              <div>
                <span>Published at</span>
                <strong>2026-05-13</strong>
              </div>
            </div>

            <div className="neo-field field-full">
              <label>Description</label>
              <textarea
                rows={4}
                defaultValue="Uma descrição curta do post para aparecer antes do conteúdo principal."
              />
              <small>85 / 160</small>
            </div>

            <div className="neo-field field-full">
              <label>Content</label>

              <div className="editor-toolbar">
                <button type="button">B</button>
                <button type="button">I</button>
                <button type="button">S</button>
                <button type="button">H2</button>
                <button type="button">H3</button>
                <button type="button">•</button>
                <button type="button">1.</button>
                <button type="button">🔗</button>
                <button type="button">🖼</button>
                <button type="button">❝</button>
                <button type="button">&lt;/&gt;</button>
              </div>

              <textarea
                rows={10}
                defaultValue={`<h2>Introdução</h2>
<p>Este é o conteúdo do post em HTML.</p>
<p>Futuramente esse campo pode ser substituído por um editor visual como TipTap.</p>
<ul>
  <li>Layouts modernos</li>
  <li>Neomorfismo aplicado com equilíbrio</li>
  <li>Interface limpa e produtiva</li>
</ul>`}
              />

              <small>HTML · 321 palavras</small>
            </div>

            <div className="neo-field">
              <label>SEO / Visibilidade</label>
              <input type="text" defaultValue="Emerging Web Design Trends" />
              <textarea
                rows={3}
                defaultValue="Principais tendências de design para web em 2026 e como aplicá-las em projetos modernos."
              />
              <small>92 / 160</small>
            </div>

            <div className="neo-card options-card">
              <h3>Opções</h3>

              <div className="option-row">
                <span>Permitir comentários</span>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="option-row">
                <span>Destacar este post</span>
                <input type="checkbox" />
              </div>

              <div className="option-row">
                <span>Ordem de exibição</span>
                <input type="range" min="0" max="20" defaultValue="10" />
              </div>
            </div>
          </section>
        </form>

        <footer className="post-edit-footer">
          <button className="danger-button">Excluir post</button>

          <div>
            <button className="neo-button">Visualizar</button>
            <button className="neo-button neo-button-accent">Salvar alterações</button>
          </div>
        </footer>
      </section>
    </main>
  );
}