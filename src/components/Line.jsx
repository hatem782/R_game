import React from "react";
import Note from "./Note";

function Line(props) {
  let { notes, color, time, add_note } = props;
  return (
    <div>
      <div className="containers">
        {notes.map((note) => {
          if (note.time < time && note.color === color) {
            return <Note color={color} key={note.id}></Note>;
          }
        })}
        <div
          className={`note_b nb4 ${color}`}
          onClick={() => {
            add_note(color);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Line;
