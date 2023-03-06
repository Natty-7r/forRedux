import { forwardRef, useContext, useRef, useState } from "react";
import NoteContext from "../context/NoteContext";
import note from "../reducers/note";

export default forwardRef((props, ref) => {
  const onSubmit = () => {};
  const title = useRef();
  const noteContent = useRef();
  const { notesDispatch } = useContext(NoteContext);

  const addNotes = () => {
    notesDispatch({
      type: "add",
      title: title.current.value,
      noteContent: noteContent.current.value,
    });
    title.current.value = "";
    noteContent.current.value = "";
  };
  return (
    <div className="form">
      <input
        ref={title}
        type="text"
        placeholder="Note Tiltle"
      />
      <textarea
        ref={noteContent}
        placeholder="Note Content"></textarea>
      <button onClick={addNotes}>add note</button>
    </div>
  );
});
