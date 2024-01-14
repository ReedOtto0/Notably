import { useContext } from "react";
import { NotesContext } from "@/app/features/NotesContext";
import { saveToStorage } from "@/app/lib/localStorageUtils";
import Icon from "../icons/Icon";

export default function SaveButton() {
  const notes = useContext(NotesContext);
  return (
    <button
      className="w-12 h-12 p-[0.3rem] bg-gray-200 border-2 border-gray-600 active:border-black rounded-full fixed bottom-2 left-2 flex items-center justify-center"
      onClick={() => saveToStorage(notes)}
    >
      <Icon icon="save" size="3rem" />
    </button>
  );
}
