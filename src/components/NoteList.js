import { useContext } from "react";
import Note from "./Note";
import NoteContext from "../context/NoteContext";
export default () => {
  const { notes, removeNote, notesDispatch, name, lName, changeLName } =
    useContext(NoteContext);
  return (
    <NoteContext.Provider
      value={{
        notes,
        removeNote,
        notesDispatch,
        name: "natty",
        lName,
      }}>
      {
        //  overriding context value using provider
      }
      <div className="note_list">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            noteContent={note.noteContent}
          />
        ))}
      </div>
    </NoteContext.Provider>
  );
};
