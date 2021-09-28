import React, { useEffect, useRef, useState } from "react";

//1. Version of infinite loop

function UsingUseState() {
  const [name, setName] = useState("");
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prevRenderCount) => prevRenderCount + 1);
  });

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount} times</div>
    </>
  );
}

// 2.Right way with useRef

function UsingUseRef() {
  const [name, setName] = useState("");
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input type={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current}</div>
    </>
  );
}

export default UsingUseRef;
