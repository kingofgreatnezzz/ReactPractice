{/* 

import React, { useEffect, useState } from "react";

function InterveralHookCOunter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1)
  };

  useEffect(() => {
    const Interval = setInterval(tick, 1000)
    // cleanup function
    return () => {
      clearInterval(Interval);
    };
  }, []);
  return <div>{count}</div>
}

export default InterveralHookCOunter;

*/}