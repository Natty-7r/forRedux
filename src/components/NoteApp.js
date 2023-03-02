import { useEffect, useState, useReducer } from "react";
import notesReducer from "../reducers/note";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default () => {
  const [title, setTitle] = useState("");
  const [noteContent, setContent] = useState("");
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      notesDispatch({ type: "fetch", notes });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = (title) => {
    notesDispatch({ type: "remove", title });
  };
  return (
    <div className="whole">
      <h1>notes</h1>
      <NoteList
        notes={notes}
        removeNote={removeNote}
      />
      <NoteForm
        title={title}
        setTitle={setTitle}
        noteContent={noteContent}
        setContent={setContent}
        notesDispatch={notesDispatch}
      />
    </div>
  );
};
