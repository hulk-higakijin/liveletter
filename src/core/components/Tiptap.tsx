"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect } from "react";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Underline,
			TextAlign.configure({ types: ["heading", "paragraph"] }),
			Link,
			Image,
			Placeholder.configure({ placeholder: "Write something amazing..." }),
		],
	});

  useEffect(() => {
    editor?.commands.focus()
  }, [editor])

	return <EditorContent editor={editor} autoFocus />;
};

export default Tiptap;
