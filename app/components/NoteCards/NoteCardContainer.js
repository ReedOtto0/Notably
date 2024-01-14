"use client";

import { useContext } from "react";

import NoteCard from "./NoteCard";
import { NotesContext } from "../../features/NotesContext";

export default function NoteContainer() {
  const notes = useContext(NotesContext);
  const noteCards = notes.map((note, index) => (
    <NoteCard note={note} noteId={index} key={index} />
  ));

  return <ul className={`mt-2 w-full grid-cols-2`}>{noteCards}</ul>;
}
