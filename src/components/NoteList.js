import { useContext, useMemo } from "react";
import Note from "./Note";
import NoteContext from "../context/NoteContext";
export default () => {
  const { notes } = useContext(NoteContext);
  const memorizedNotes = useMemo(() => {
    return (
      <div className="note_list">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            noteContent={note.noteContent}
          />
        ))}
      </div>
    );
  }, [notes]);
  return memorizedNotes;
};
