import Note from "./Note";
export default ({ notes, removeNote }) => {
  return (
    <div className="note_list">
      {notes.map((note) => (
        <Note
          removeNote={removeNote}
          key={note.title}
          title={note.title}
          noteContent={note.noteContent}
        />
      ))}
    </div>
  );
};
