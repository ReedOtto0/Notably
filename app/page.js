/*
 * Notes schema:
 * notably_notes = [
 *     {
 *       type: "note || list"
 *       title: "title"
 *       content: "note" || [...listItems : string]
 *     },
 *   ...
 * ]
 */

"use client";

import { useEffect, useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./features/NotesContext";
import { loadFromStorage } from "./lib/localStorageUtils";

import NoteCardContainer from "./components/NoteCards/NoteCardContainer";
import AddNoteCard from "./components/NoteCards/AddNoteCard";
import SaveButton from "./components/buttons/SaveButton";

const defaultNote = {
  type: "note",
  title: "First Time Caller",
  content: "Time to take your first note!",
};

export default function Home() {
  const [notes, notesDispatch] = useReducer(notesReducer, [
    { type: "note", title: "", content: "Loading..." },
  ]);

  function notesReducer(notes, action) {
    switch (action.type) {
      case "load":
        return action.notes;
      case "add":
        let newNotes = [...notes, action.note];
        return newNotes;
      case "delete":
        return notes.filter((_note, index) => index !== action.id);
    }
  }

  useEffect(() => {
    let loadedNotes = loadFromStorage();
    if (loadedNotes.length === 0) {
      loadedNotes = [defaultNote];
    }
    notesDispatch({ type: "load", notes: loadedNotes });
  }, []);

  return (
    <main className="flex min-h-svh flex-col items-center p-2 bg-gray-100 relative">
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={notesDispatch}>
          <AddNoteCard />
          <NoteCardContainer />
          <SaveButton />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </main>
  );
}
