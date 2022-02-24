import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Editor from "./Editor";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const EditorSet = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: ``,
    onFocus: undefined,
  });

  return (
    <div>
      <Editor editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorSet;
