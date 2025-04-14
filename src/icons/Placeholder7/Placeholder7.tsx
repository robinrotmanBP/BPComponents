/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Placeholder7 = ({
  color = "#808080",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3468_568384)">
        <path
          d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.66667"
        />
      </g>

      <defs>
        <clipPath id="clip0_3468_568384">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Placeholder7.propTypes = {
  color: PropTypes.string,
};
