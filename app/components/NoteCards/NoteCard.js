import DeleteButton from "../buttons/DeleteButton";

export default function NoteCard({ note, noteId }) {
  const hasTitle = note.title !== "";
  const noteContent = note.content.split("\n").map((line, lineNum, lines) => {
    return (
      <>
        {line}
        {lineNum !== lines.length - 1 && <br />}
      </>
    );
  });
  return (
    <li className="border-2 border-black rounded-lg mt-2 py-2 px-3 w-full relative">
      {hasTitle && <h3 className="font-lg font-bold mb-2">{note.title}</h3>}
      <p className="">{note.content}</p>
      <DeleteButton noteId={noteId} />
    </li>
  );
}
