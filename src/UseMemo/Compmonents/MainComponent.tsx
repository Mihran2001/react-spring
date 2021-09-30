import { useEffect, useState, useMemo, useCallback } from "react";
import CildFunction from "./ChildComponent";

export default function MainComponent() {
  const [count, setCount] = useState(0);

  const successValue = count > 10;

  const success = useMemo(() => ({ value: successValue }), [successValue]);

  const f = useMemo(
    () => ({
      g: "g",
    }),
    []
  );

  const onClick = useCallback(() => {
    console.log(f);
  }, [f]);

  useEffect(() => {
    console.log(f);
  }, [f]);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {count}
      <CildFunction success={success} onClick={onClick} />
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}
