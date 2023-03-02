import React from "react";
export default ({ title, noteContent, removeNote }) => {
  return (
    <div className="note">
      <h4>{title}</h4>
      <p>{noteContent}</p>
      <button onClick={(e) => removeNote(title)}> X</button>
    </div>
  );
};
