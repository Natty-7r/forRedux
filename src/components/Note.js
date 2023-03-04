import React, { useContext, useState, useEffect } from "react";
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

const Note = ({ title, noteContent }) => {
  const { notesDispatch, name } = useContext(NoteContext);
  const position = useMousePosition();
  const removeNote = (title) => {
    notesDispatch({ type: "remove", title });
  };
  return (
    <div className="note">
      <h4>
        {position.x},{position.y}
      </h4>
      <h4>{title}</h4>
      <p>{noteContent}</p>
      <button onClick={(e) => removeNote(title)}> X</button>
    </div>
  );
};
export default Note;
