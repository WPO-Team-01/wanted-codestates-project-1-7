import styled from "styled-components";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Editor from "./Editor";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

const EditorWrapper = styled.div`
  * {
    outline: none;
  }
`;

const EditorSet = ({ value, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: value ?? "",
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  return (
    <EditorWrapper>
      <Editor editor={editor} />
      <EditorContent editor={editor} />
    </EditorWrapper>
  );
};

export default EditorSet;
