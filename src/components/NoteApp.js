import { useEffect, useState, useReducer, useRef, useMemo, memo } from "react";
import notesReducer from "../reducers/note";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NoteContext from "../context/NoteContext";
import useMousePosition from "../hooks/useMousePosition";

export default () => {
  const [a, A] = useState(1);
  const title = useRef();
  const position = useMousePosition();
  const MemodForm = useMemo(() => {
    const name = "runner running in code ";
    return NoteForm;
  }, [a]);

  const [lName, setLName] = useState("fek");
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
  const changeLName = () => {
    // to show context is changed from consumer by passing function to it
    lName == "fek" ? setLName("fekadu") : setLName("fek");
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        removeNote,
        notesDispatch,
        name: "Natnael",
        lName,
        changeLName,
      }}>
      <NoteContext.Consumer>
        {(context) => {
          // use of Context.Consumer to render something based on context value
          if (context.notes.length > 3) return <h2>yeah 3 </h2>;
          else return null;
        }}
      </NoteContext.Consumer>
      <h1>
        notes
        <br />
        {position.x},{position.y}
      </h1>
      <NoteList />
      <MemodForm me="mm" />
      <button onClick={(e) => A(a + 1)}>rerender</button>
    </NoteContext.Provider>
  );
};
