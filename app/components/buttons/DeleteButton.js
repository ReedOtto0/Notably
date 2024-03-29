import { useContext } from "react";
import { NotesDispatchContext } from "../../features/NotesContext";
import Icon from "../icons/Icon";

export default function DeleteButton({ noteId }) {
  const notesDispatch = useContext(NotesDispatchContext);

  return (
    <button
      className="w-8 h-8 rounded-full p-1 mt-1"
      onClick={(e) => {
        e.preventDefault();
        notesDispatch({ type: "delete", id: noteId });
      }}
    >
      <Icon icon="trash" size="" />
    </button>
  );
}
