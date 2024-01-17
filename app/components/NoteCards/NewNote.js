"use client";

import { useState, useContext, useRef } from "react";
import { NotesDispatchContext } from "../../features/NotesContext";
import { AutoSizingTextarea } from "./TextArea/AutoSizingTextArea";
import CloseButton from "../buttons/CloseButton";

export default function AddNoteCard() {
  const notesDispatch = useContext(NotesDispatchContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("note");
  const [focus, setFocus] = useState(false);

  function createNote() {
    if (title !== "" || content !== "") {
      notesDispatch({
        type: "add",
        note: {
          title: title,
          type: type,
          content: content,
        },
      });
    }
    setTitle("");
    setContent("");
    setFocus(false);
  }

  const maintainFocusClass = "add-note-form-element";
  function lostFocus(e) {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains(maintainFocusClass)
    ) {
      createNote();
    }
  }

  const hiddenStyles = focus ? "" : "absolute hidden";
  const sectionStyles = `${
    focus ? "p-2 mb-2" : "py-1 px-2"
  } w-full border-2 border-black rounded-lg relative ${maintainFocusClass}`;

  const textInputStyles =
    "focus:outline-none resize-none text-base bg-transparent";
  const titleStyles = `text-lg px-1 ${textInputStyles} ${maintainFocusClass} ${hiddenStyles}`;
  const contentStyles = `${
    focus ? "mt-2 p-1" : "p-1"
  } ${textInputStyles} ${maintainFocusClass}`;

  const submitStyles = `w-8 h-8 rounded-full p-1 mt-1 absolute bottom-1 right-1 ${maintainFocusClass} ${hiddenStyles}`;

  return (
    <section
      className={sectionStyles}
      onFocus={() => setFocus(true)}
      onBlur={(e) => lostFocus(e)}
    >
      <form
        className="flex flex-col w-full"
        onSubmit={(e) => {
          e.preventDefault();
          createNote();
        }}
      >
        <input
          type="text"
          className={titleStyles}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <AutoSizingTextarea
          styles={contentStyles}
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          initialRows={focus ? 3 : 1}
        />
        <CloseButton styles={submitStyles} />
      </form>
    </section>
  );
}
