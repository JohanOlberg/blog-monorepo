import { useEffect } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { usePostEditorContext } from "../context/PostEditorContext";

import "./PostContentEditor.css"

export function PostContentEditor() {

  const { form, updateField } = usePostEditorContext();

  const editor = useEditor({
    extensions: [StarterKit],

    // O conteúdo inicial será colocado depois pelo useEffect.
    content: "",

    // Toda vez que o usuário digitar no editor,
    // atualizamos o form.content no Context.
    onUpdate: ({ editor }) => {
      updateField("content", editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    // Carrega o conteúdo inicial vindo do form.
    // Esse effect roda quando o editor fica pronto.
    editor.commands.setContent(form.content);
  }, [editor]);
  return (
    <section className="post-content-editor">
      <header className="post-content-editor-header">
        <div>
          <span>Rich content</span>
          <h2>Content editor</h2>
        </div>

        <div className="post-content-editor-tools">
          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleBold().run()}
          >
            Bold
          </button>

          <button
            type="button"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
          >
            Italic
          </button>

          <button
            type="button"
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            H2
          </button>
        </div>
      </header>

      <div className="post-content-editor-surface">
        <EditorContent editor={editor} />
      </div>
    </section>
  );
}