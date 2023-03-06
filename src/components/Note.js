import React, { useContext, useState, useEffect, memo, useMemo } from "react";
import NoteContext from "../context/NoteContext";
import useMousePosition from "../hooks/useMousePosition";

class Notes extends React.Component {
  static contextType = NoteContext;
  constructor(props) {
    super(props);
    this.removeNote = this.removeNote.bind(this);
  }
  removeNote = (title) => {
    this.context.notesDispatch({ type: "remove", title });
  };

  render() {
    return (
      <div className="note">
        <p>{this.context.name}</p>
        <p>{this.context.lName}</p>
        <h4>{this.props.title}</h4>
        <p>{this.props.noteContent}</p>
        <button onClick={(e) => this.removeNote(this.props.title)}> X</button>
      </div>
    );
  }
}
// Notes.contextType = NoteContext; // use of class.contextType

const Note = memo(function ({ title, noteContent }) {
  const { notesDispatch, name } = useContext(NoteContext);
  const noteReturned = useMemo(() => {
    console.log("memorized note function  part ");
    const removeNote = (title) => {
      notesDispatch({ type: "remove", title });
    };
    return (
      <div className="note">
        <h4></h4>
        <h4>{title}</h4>
        <p>{noteContent}</p>
        <button onClick={(e) => removeNote(title)}> X</button>
      </div>
    );
  }, [title, noteContent]);
  return noteReturned;
});
export default Note;
