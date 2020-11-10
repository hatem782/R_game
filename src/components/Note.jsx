import React, { useState, useEffect } from "react";

function Note(props) {
  const [display, set_display] = useState("default");

  useEffect(() => {}, []);

  return (
    <>
      <div
        id="note"
        className={`note ${props.color}`}
        style={{
          display: display,
        }}
      ></div>
    </>
  );
}

export default Note;
