import { forwardRef, useContext, useRef, useMemo, memo, useState } from "react";
import NoteContext from "../context/NoteContext";
const d = () => {
  console.log("ddd");
  return <h2>ddddddd</h2>;
};
const Mine = memo(d);

const NoteForm = function () {
  console.log("form compenent ");
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
      <Mine />
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
};
const memodForm = memo(NoteForm);
export default memodForm;
