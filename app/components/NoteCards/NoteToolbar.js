export default function NoteToolbar({ hide, children }) {
  return (
    <div className="absolute bottom-1 right-1" hidden={hide}>
      {children}
    </div>
  );
}
