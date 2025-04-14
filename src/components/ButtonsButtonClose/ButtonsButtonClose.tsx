import PropTypes from "prop-types";
import React, { useReducer } from "react";
import { XClose3 } from "../../icons/XClose3";
import { XClose5 } from "../../icons/XClose5";
import { XClose12 } from "../../icons/XClose12";
import { XClose14 } from "../../icons/XClose14";
import "./storybook.css";

interface Props {
  size: "sm" | "md" | "lg";
  darkBackground: boolean;
  stateProp: "focused" | "hover" | "default";
  className?: string;
}

export const ButtonsButtonClose = ({
  size,
  darkBackground,
  stateProp,
  className = "",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size,
    darkBackground,
    state: stateProp,
  });

const compoundClass = [
  `buttons-button-close`,
  state.size,
  state.state,
  `dark-background-${state.darkBackground}`,
  className,
].join(" ");

  return (
    <div
      className={compoundClass}
      onMouseEnter={() => dispatch("mouse_enter")}
      onMouseLeave={() => dispatch("mouse_leave")}
    >
      {/* LG Icon */}
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

      {/* SM / MD Icon */}
      {((!state.darkBackground && ["md", "sm"].includes(state.size)) ||
        (state.darkBackground &&
          ["md", "sm"].includes(state.size) &&
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

      {/* Dark LG (default/focused) */}
      {state.darkBackground &&
        state.size === "lg" &&
        ["default", "focused"].includes(state.state) && (
          <XClose12 className="x-close" />
        )}

      {/* Dark SM/MD (default/focused) */}
      {state.darkBackground &&
        ["md", "sm"].includes(state.size) &&
        ["default", "focused"].includes(state.state) && (
          <XClose14 className="instance-node" />
        )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return { ...state, state: "hover" };
    case "mouse_leave":
      return { ...state, state: "default" };
    default:
      return state;
  }
}

ButtonsButtonClose.propTypes = {
  size: PropTypes.oneOf(["md", "lg", "sm"]),
  darkBackground: PropTypes.bool,
  stateProp: PropTypes.oneOf(["focused", "hover", "default"]),
};
