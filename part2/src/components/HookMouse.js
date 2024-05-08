import React, { useEffect, useState } from "react";
import MouseContainer from "./MouseContainer";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);


  const logMousePosition = (e) => {
    console.log("mouse event");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    console.log("useEffect logged");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
        console.log('component unmounted')
        window.removeEventListener("mouse move", logMousePosition)
    }
  }, []);

  return (
    <div>
    <MouseContainer/><br/>
      Hooks X- {x} - Y - {y}
    </div>
  );
}

export default HookMouse;
