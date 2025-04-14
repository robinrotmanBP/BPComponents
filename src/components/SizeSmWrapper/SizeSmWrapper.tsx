/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  size: "sm";
  className: any;
  line: string;
}

export const SizeSmWrapper = ({
  size,
  className,
  line = "/img/line-32.svg",
}: Props): JSX.Element => {
  return (
    <div
      className={`relative w-5 h-5 bg-[url(/img/background-32.svg)] bg-[100%_100%] ${className}`}
    >
      <img
        className="absolute w-[11px] h-[11px] top-0 left-[9px]"
        alt="Line"
        src={line}
      />
    </div>
  );
};

SizeSmWrapper.propTypes = {
  size: PropTypes.oneOf(["sm"]),
  line: PropTypes.string,
};
