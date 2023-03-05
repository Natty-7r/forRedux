import { useContext, useRef, useState } from "react";
import NoteContext from "../context/NoteContext";

export default () => {
  const onSubmit = () => {};
  const [title, setTitle] = useState("");
  const [noteContent, setContent] = useState("");
  const { notesDispatch } = useContext(NoteContext);
  const input = useRef(1);
  console.log(input);
  const addNotes = () => {
    notesDispatch({ type: "add", title, noteContent });
    setTitle("");
    setContent("");
  };
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Note Tiltle"
        value={title}
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
  );
};
