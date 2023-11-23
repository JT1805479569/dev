import React, { memo } from "react";
import styleStrToObject from "./utils/index";
const IconAvatar = memo((props) => {
  const { width = 12, height = 12 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={styleStrToObject(
        `height: ${height}px; width:${width}px;display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;`
      )}
    >
      <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
    </svg>
  );
});

export default IconAvatar;
