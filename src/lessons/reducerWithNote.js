import { useEffect, useState, useReducer } from "react";
import { act } from "react-dom/test-utils";
import notesReducer from "../reducers/note";
import Note from "../components/Note";

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
  const addNotes = () => {
    notesDispatch({ type: "add", title, noteContent });
    setTitle("");
    setContent("");
  };
  const removeNote = (title) => {
    notesDispatch({ type: "remove", title });
  };
  return (
    <div className="whole">
      <h1>notes</h1>

      {notes.map((note) => (
        <Note
          removeNote={removeNote}
          key={note.title}
          title={note.title}
          noteContent={note.noteContent}
        />
      ))}
      <div className="form">
        <input
          type="text"
          value={title}
          plalceholder="Note Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Note Content"
          value={noteContent}
          onChange={(e) => setContent(e.target.value)}></textarea>
        <button onClick={addNotes}>add note</button>
      </div>
    </div>
  );
};
