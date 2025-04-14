import PropTypes from "prop-types";
import React from "react";
import { Placeholder7 } from "../../icons/Placeholder7";
import { SizeSmWrapper } from "../SizeSmWrapper";

interface Props {
  iconTrailing?: boolean;
  loadingText?: boolean;
  iconLeading?: boolean;
  size: "md" | "sm" | "lg" | "xl";
  hierarchy: "link-color" | "tertiary" | "link-gray" | "secondary" | "primary";
  stateProp: "default" | "focused" | "loading" | "hover" | "disabled";
  iconOnly?: boolean;
  className?: string;
}

export const ButtonsButton = ({
  iconTrailing = true,
  loadingText = true,
  iconLeading = true,
  size,
  hierarchy,
  stateProp,
  iconOnly = false,
  className = "",
}: Props): JSX.Element => {
  // Combine classes based on props
  const buttonClasses = [
    "buttons-button", // Base class
    size, // Size class (sm, md, lg, xl)
    hierarchy, // Hierarchy class (primary, secondary, etc.)
    stateProp, // State class (default, focused, hover, etc.)
    iconOnly ? "icon-only-true" : "icon-only-false",
    className // Custom classes from props
  ].join(" ");

  const renderIcon = (position: "leading" | "trailing") => {
    const shouldRender = position === "leading" ? iconLeading : iconTrailing;
    if (!shouldRender) return null;
    const color =
      hierarchy === "primary" && ["default", "focused", "hover"].includes(stateProp)
        ? "#1A1A1A"
        : ["hover"].includes(stateProp) &&
          ["link-color", "link-gray", "secondary", "tertiary"].includes(hierarchy)
        ? "#999999"
        : "#808080";

    return <Placeholder7 className="!relative !w-5 !h-5" color={color} />;
  };

  const renderContent = () => {
    if (iconOnly) {
      return <>{renderIcon("leading")}</>;
    }

    if (stateProp === "loading") {
      return (
        <>
          <SizeSmWrapper
            className={hierarchy === "primary" ? "bg-[url(/img/background-29.svg)]" : ""}
            line={hierarchy === "primary" ? "/img/line-29.svg" : "/img/line-31.svg"}
            size="sm"
          />
          {loadingText && <div className="text-padding ml-2">Submitting...</div>}
        </>
      );
    }

    return (
      <>
        {renderIcon("leading")}
        <span className="text-padding mx-1"><span className="text">Button CTA</span></span>
        {renderIcon("trailing")}
      </>
    );
  };

  return (
    <div className={buttonClasses}>
      {renderContent()}
    </div>
  );
};

ButtonsButton.propTypes = {
  iconTrailing: PropTypes.bool,
  loadingText: PropTypes.bool,
  iconLeading: PropTypes.bool,
  size: PropTypes.oneOf(["md", "sm", "lg", "xl"]).isRequired,
  hierarchy: PropTypes.oneOf([
    "link-color",
    "tertiary",
    "link-gray",
    "secondary",
    "primary",
  ]).isRequired,
  stateProp: PropTypes.oneOf(["default", "focused", "loading", "hover", "disabled"]).isRequired,
  iconOnly: PropTypes.bool,
  className: PropTypes.string,
};
