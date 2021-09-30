import { memo } from "react";

function CildFunction({
  success,
  onClick,
}: {
  success: { value: boolean };
  onClick: () => void;
}) {
  console.log("renderuing", success);

  if (!success.value) return null;

  return <h3> Max count is 10 </h3>;
}

export default memo(CildFunction);
