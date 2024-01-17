"use client";

import useFocusContainer from "@/app/lib/useFocusContainer";
import { useContext, useEffect, useRef, useState } from "react";
import DeleteButton from "../buttons/DeleteButton";
import { AutoSizingTextarea } from "./TextArea/AutoSizingTextArea";
import {
  NotesContext,
  NotesDispatchContext,
} from "@/app/features/NotesContext";
import NoteToolbar from "./NoteToolbar";

export default function NoteCard({ note, noteId }) {
  const notesDispatch = useContext(NotesDispatchContext);

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [type, setType] = useState(note.type);
  const [color, setColor] = useState(note.color);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setType(note.type);
    setColor(note.type);
  }, [note]);

  const updateNote = () => {
    notesDispatch({
      type: "update",
      id: noteId,
      note: {
        title: title,
        type: type,
        content: content,
      },
    });
  };

  const hasTitle = title !== "";
  const noteRef = useRef(null);
  const [focused, handleFocus, handleBlur] = useFocusContainer(
    noteRef.current,
    null,
    updateNote
  );

  return (
    <li
      className="border-2 border-black rounded-lg mt-2 py-2 px-3 w-full relative"
      ref={noteRef}
    >
      <form
        className="flex flex-col w-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <input
          type="text"
          className="w-full text-lg focus:outline-none resize-none text-base bg-transparent"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          hidden={!hasTitle && !focused}
        />
        <AutoSizingTextarea
          styles={`w-full focus:outline-none resize-none text-base bg-transparent ${
            hasTitle || focused ? "mt-3" : ""
          }`}
          placeholder="Blank note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          initialRows={focused ? 3 : 1}
        />
      </form>
      <NoteToolbar hide={!focused}>
        <DeleteButton noteId={noteId} />
      </NoteToolbar>
    </li>
  );
}
