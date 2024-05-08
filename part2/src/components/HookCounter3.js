import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.FirstName}
          onChange={(e) => setName({...name, FirstName: e.target.value })}
        />
        <input
          type="text"
          value={name.LastName}
          onChange={(e) => setName({ ...name, LastName: e.target.value })}
        />

        <h2>Your firstname is {name.FirstName}</h2>
        <h2>Your LastName is {name.LastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}

export default HookCounter3;
