import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { XClose3 } from "../../icons/XClose3";
import { XClose5 } from "../../icons/XClose5";
import { XClose12 } from "../../icons/XClose12";
import { XClose14 } from "../../icons/XClose14";
import "./storybook.css";

interface Props {
  size: "md" | "lg" | "sm";
  darkBackground: boolean;
  stateProp: "focused" | "hover" | "default";
  className: any;
}

export const ButtonsButtonClose = ({
  size,
  darkBackground,
  stateProp,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "sm",

    darkBackground: darkBackground,

    state: stateProp || "default",
  });

  return (
    <div
      className={`buttons-button-close ${state.size} ${state.state} dark-background-${state.darkBackground} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.size === "lg" &&
        (!state.darkBackground || state.state === "hover") && (
          <XClose3
            className="x-close"
            color={
              !state.darkBackground && state.state === "hover"
                ? "#999999"
                : state.darkBackground
                  ? "white"
                  : "#B3B3B3"
            }
          />
        )}

      {((!state.darkBackground && state.size === "md") ||
        (!state.darkBackground && state.size === "sm") ||
        (state.darkBackground &&
          state.size === "md" &&
          state.state === "hover") ||
        (state.darkBackground &&
          state.size === "sm" &&
          state.state === "hover")) && (
        <XClose5
          className="instance-node"
          color={
            !state.darkBackground && state.state === "hover"
              ? "#999999"
              : state.darkBackground
                ? "white"
                : "#B3B3B3"
          }
        />
      )}

      {state.darkBackground &&
        state.size === "lg" &&
        ["default", "focused"].includes(state.state) && (
          <XClose12 className="x-close" />
        )}

      {((state.darkBackground &&
        state.size === "md" &&
        state.state === "default") ||
        (state.darkBackground &&
          state.size === "md" &&
          state.state === "focused") ||
        (state.darkBackground &&
          state.size === "sm" &&
          state.state === "default") ||
        (state.darkBackground &&
          state.size === "sm" &&
          state.state === "focused")) && <XClose14 className="instance-node" />}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

ButtonsButtonClose.propTypes = {
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  darkBackground: PropTypes.bool,
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
