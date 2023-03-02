import { useState } from "react";

export default ({ notesDispatch }) => {
  const [title, setTitle] = useState("");
  const [noteContent, setContent] = useState("");

  const addNotes = () => {
    notesDispatch({ type: "add", title, noteContent });
    setTitle("");
    setContent("");
  };
  return (
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
  );
};
