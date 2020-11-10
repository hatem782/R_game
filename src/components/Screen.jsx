import React, { useState, useEffect, isValidElement } from "react";
import { data } from "../Data/data";
import "./style.css";

import Line from "./Line";

function Screen() {
  const [time, set_time] = useState(0);
  const [notes, set_notes] = useState(data);

  const [make_notes, set_make_notes] = useState("");

  useEffect(() => {
    setInterval(() => {
      set_time((old_time) => old_time + 1);
    }, 100);
  }, []);

  function delete_note() {
    set_notes(notes.shift());
  }

  function add_note(color) {
    let note = { time: time, color: color, id: notes.length };
    set_make_notes(
      (mk) => mk + `{ time: ${time}, color: "${color}", id: ${notes.length} },`
    );

    set_notes([...notes, note]);

    console.log(notes);
  }

  return (
    <div className="notes_b">
      <Line
        color="green"
        time={time}
        notes={notes}
        add_note={add_note}
        delete_note={delete_note}
      ></Line>
      <Line
        color="orange"
        time={time}
        notes={notes}
        add_note={add_note}
        delete_note={delete_note}
      ></Line>
      <Line
        color="blue"
        time={time}
        notes={notes}
        add_note={add_note}
        delete_note={delete_note}
      ></Line>
      <Line
        color="purple"
        time={time}
        notes={notes}
        add_note={add_note}
        delete_note={delete_note}
      ></Line>
      <span className="make_notes">{make_notes}</span>
    </div>
  );
}

export default Screen;
