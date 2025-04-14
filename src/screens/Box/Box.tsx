import React from "react";
import { Button } from "../../components/ui/button";

export const Box = (): JSX.Element => {
  // Define button data for different sizes and states
  const buttonData = {
    small: {
      sizes: { padding: "px-3.5 py-2.5", iconSize: "w-5 h-5" },
      variants: [
        {
          bg: "bg-[#f2f8ff]",
          text: "text-brand-900",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "default",
        },
        {
          bg: "bg-[#f2f8ff]",
          text: "text-brand-900",
          shadow: "shadow-focus-rings-focus-ring-shadow-xs-skeuomorphic",
          state: "focus",
        },
        {
          bg: "bg-[#4d4d4d]",
          text: "text-[#1a1a1a]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "hover",
        },
        {
          bg: "bg-black",
          text: "text-white",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "loading",
          label: "Submitting...",
        },
        {
          bg: "bg-[#333333]",
          text: "text-[#cccccc]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          border: "border-[#666666]",
          state: "disabled",
        },
        {
          bg: "bg-[#4d4d4d]",
          text: "text-[#999999]",
          shadow: "shadow-shadows-shadow-xs",
          state: "disabled-2",
        },
        {
          bg: "bg-[#333333]",
          text: "text-[#999999]",
          shadow: "shadow-shadows-shadow-xs",
          border: "border-[#4d4d4d]",
          state: "disabled-3",
        },
        { bg: "", text: "text-[#b3b3b3]", state: "disabled-4" },
        {
          bg: "bg-[#333333]",
          text: "text-[#b3b3b3]",
          shadow: "shadow-focus-rings-focus-ring",
          state: "disabled-focus",
        },
        { bg: "bg-[#4d4d4d]", text: "text-[#cccccc]", state: "disabled-hover" },
        { bg: "", text: "text-[#cccccc]", state: "disabled-5" },
        { bg: "", text: "text-[#e6e6e6] underline", state: "link" },
        {
          bg: "",
          text: "text-[#cccccc]",
          state: "loading-2",
          label: "Submitting...",
        },
        { bg: "", text: "text-[#cccccc] underline", state: "link-disabled" },
        {
          bg: "",
          text: "text-[#b3b3b3]",
          state: "loading-3",
          label: "Submitting...",
        },
      ],
    },
    medium: {
      sizes: { padding: "px-4 py-2.5", iconSize: "w-5 h-5" },
      variants: [
        {
          bg: "bg-[#f2f8ff]",
          text: "text-brand-900",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "default",
        },
        {
          bg: "bg-[#f2f8ff]",
          text: "text-brand-900",
          shadow: "shadow-focus-rings-focus-ring-shadow-xs-skeuomorphic",
          state: "focus",
        },
        {
          bg: "bg-[#4d4d4d]",
          text: "text-[#1a1a1a]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "hover",
        },
        {
          bg: "bg-black",
          text: "text-white",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "loading",
          label: "Submitting...",
        },
        {
          bg: "bg-[#333333]",
          text: "text-[#cccccc]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          border: "border-[#666666]",
          state: "disabled",
        },
        {
          bg: "bg-[#4d4d4d]",
          text: "text-[#999999]",
          shadow: "shadow-shadows-shadow-xs",
          state: "disabled-2",
        },
        {
          bg: "bg-[#333333]",
          text: "text-[#999999]",
          shadow: "shadow-shadows-shadow-xs",
          border: "border-[#4d4d4d]",
          state: "disabled-3",
        },
        { bg: "", text: "text-[#b3b3b3]", state: "disabled-4" },
        {
          bg: "bg-[#333333]",
          text: "text-[#b3b3b3]",
          shadow: "shadow-focus-rings-focus-ring",
          state: "disabled-focus",
        },
        { bg: "bg-[#4d4d4d]", text: "text-[#cccccc]", state: "disabled-hover" },
        { bg: "", text: "text-[#999999]", state: "disabled-5" },
        { bg: "", text: "text-[#e6e6e6] underline", state: "link" },
        {
          bg: "",
          text: "text-[#cccccc]",
          state: "loading-2",
          label: "Submitting...",
        },
        { bg: "", text: "text-[#cccccc] underline", state: "link-disabled" },
        {
          bg: "",
          text: "text-[#b3b3b3]",
          state: "loading-3",
          label: "Submitting...",
        },
      ],
    },
    large: {
      sizes: { padding: "px-[18px] py-3", iconSize: "w-5 h-5" },
      variants: [
        {
          bg: "bg-[#f2f8ff]",
          text: "text-[#1a1a1a]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "default",
        },
        {
          bg: "bg-[#f2f8ff]",
          text: "text-brand-900",
          shadow: "shadow-focus-rings-focus-ring-shadow-xs-skeuomorphic",
          state: "focus",
        },
        {
          bg: "bg-[#4d4d4d]",
          text: "text-[#1a1a1a]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "hover",
        },
        {
          bg: "bg-black",
          text: "text-white",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "loading",
          label: "Submitting...",
        },
        {
          bg: "bg-[#333333]",
          text: "text-[#cccccc]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          border: "border-[#666666]",
          state: "disabled",
        },
        {
          bg: "bg-[#4d4d4d]",
          text: "text-[#999999]",
          shadow: "shadow-shadows-shadow-xs",
          state: "disabled-2",
        },
        {
          bg: "bg-[#333333]",
          text: "text-[#999999]",
          shadow: "shadow-shadows-shadow-xs",
          border: "border-[#4d4d4d]",
          state: "disabled-3",
        },
        { bg: "", text: "text-[#b3b3b3]", state: "disabled-4" },
        {
          bg: "bg-[#333333]",
          text: "text-[#b3b3b3]",
          shadow: "shadow-focus-rings-focus-ring",
          state: "disabled-focus",
        },
        { bg: "bg-[#4d4d4d]", text: "text-[#cccccc]", state: "disabled-hover" },
        { bg: "", text: "text-[#999999]", state: "disabled-5" },
        { bg: "", text: "text-[#e6e6e6] underline", state: "link" },
        {
          bg: "",
          text: "text-[#cccccc]",
          state: "loading-2",
          label: "Submitting...",
        },
        { bg: "", text: "text-[#cccccc] underline", state: "link-disabled" },
        {
          bg: "",
          text: "text-[#b3b3b3]",
          state: "loading-3",
          label: "Submitting...",
        },
      ],
    },
    iconOnly: {
      sizes: [
        { size: "p-2", label: "small" },
        { size: "p-2.5", label: "medium" },
        { size: "p-3", label: "large" },
        { size: "p-3.5", label: "xlarge" },
      ],
      variants: [
        {
          bg: "bg-[#f2f8ff]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "default",
        },
        {
          bg: "bg-[#f2f8ff]",
          shadow: "shadow-focus-rings-focus-ring-shadow-xs-skeuomorphic",
          state: "focus",
        },
        {
          bg: "bg-[#808080]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "hover",
        },
        {
          bg: "bg-black",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          state: "loading",
        },
        {
          bg: "bg-[#333333]",
          shadow: "shadow-shadows-shadow-xs-skeuomorphic",
          border: "border-[#666666]",
          state: "disabled",
        },
        {
          bg: "bg-[#4d4d4d]",
          shadow: "shadow-shadows-shadow-xs",
          state: "disabled-2",
        },
        {
          bg: "bg-[#333333]",
          shadow: "shadow-shadows-shadow-xs",
          border: "border-[#4d4d4d]",
          state: "disabled-3",
        },
        { bg: "", state: "disabled-4" },
        {
          bg: "bg-[#333333]",
          shadow: "shadow-focus-rings-focus-ring",
          state: "disabled-focus",
        },
        { bg: "bg-[#4d4d4d]", state: "disabled-hover" },
        { bg: "", state: "disabled-5" },
        { bg: "", state: "link" },
        { bg: "", state: "loading-2" },
        { bg: "", state: "link-disabled" },
        { bg: "", state: "loading-3" },
      ],
    },
  };

  // Custom loader component that matches the design
  const CustomLoader = () => (
    <div className="relative w-5 h-5 bg-[url(https://c.animaapp.com/m9haugzePYfTvJ/img/background.svg)] bg-[100%_100%]">
      <img
        className="absolute w-[11px] h-[11px] top-0 left-[9px]"
        alt="Line"
        src="https://c.animaapp.com/m9haugzePYfTvJ/img/line.svg"
      />
    </div>
  );

  // Placeholder icon
  const PlaceholderIcon = () => (
    <img
      className="relative w-5 h-5"
      alt="Placeholder"
      src="https://c.animaapp.com/m9haugzePYfTvJ/img/placeholder.svg"
    />
  );

  return (
    <div className="relative w-full h-full">
      <div className="fixed w-[1126px] h-[1568px] top-0 left-0 bg-[#333333] rounded-[5px] overflow-hidden border border-dashed border-[#7b61ff]">
        {/* Small Buttons */}
        <div className="flex flex-col gap-8 absolute left-4 top-4">
          {buttonData.small.variants.map((variant, index) => (
            <Button
              key={`small-${variant.state}-${index}`}
              className={`
                ${buttonData.small.sizes.padding} 
                ${variant.bg} 
                ${variant.text} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center gap-1
                font-text-sm-semibold
                ${variant.state.includes("loading") ? "min-h-6" : ""}
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}

              <span
                className={`mt-[-1.00px] whitespace-nowrap ${variant.state.includes("link") ? "underline" : ""}`}
              >
                {variant.label || "Button CTA"}
              </span>

              {!variant.state.includes("loading") && <PlaceholderIcon />}
            </Button>
          ))}
        </div>

        {/* Medium Buttons */}
        <div className="flex flex-col gap-8 absolute left-[202px] top-4">
          {buttonData.small.variants.map((variant, index) => (
            <Button
              key={`medium-${variant.state}-${index}`}
              className={`
                ${buttonData.small.sizes.padding} 
                ${variant.bg} 
                ${variant.text} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center gap-1
                font-text-sm-semibold
                ${variant.state.includes("loading") ? "min-h-6" : ""}
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}

              <span
                className={`mt-[-1.00px] whitespace-nowrap ${variant.state.includes("link") ? "underline" : ""}`}
              >
                {variant.label || "Button CTA"}
              </span>

              {!variant.state.includes("loading") && <PlaceholderIcon />}
            </Button>
          ))}
        </div>

        {/* Medium Buttons (larger text) */}
        <div className="flex flex-col gap-8 absolute left-[392px] top-4">
          {buttonData.medium.variants.map((variant, index) => (
            <Button
              key={`medium-lg-${variant.state}-${index}`}
              className={`
                ${buttonData.medium.sizes.padding} 
                ${variant.bg} 
                ${variant.text} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center gap-1.5
                font-text-md-semibold
                ${variant.state.includes("loading") ? "min-h-6" : ""}
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}

              <span
                className={`mt-[-1.00px] whitespace-nowrap ${variant.state.includes("link") ? "underline" : ""}`}
              >
                {variant.label || "Button CTA"}
              </span>

              {!variant.state.includes("loading") && <PlaceholderIcon />}
            </Button>
          ))}
        </div>

        {/* Large Buttons */}
        <div className="flex flex-col gap-8 absolute left-[601px] top-4">
          {buttonData.large.variants.map((variant, index) => (
            <Button
              key={`large-${variant.state}-${index}`}
              className={`
                ${buttonData.large.sizes.padding} 
                ${variant.bg} 
                ${variant.text} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center gap-1.5
                font-text-md-semibold
                ${variant.state.includes("loading") ? "min-h-12" : ""}
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}

              <span
                className={`mt-[-1.00px] whitespace-nowrap ${variant.state.includes("link") ? "underline" : ""}`}
              >
                {variant.label || "Button CTA"}
              </span>

              {!variant.state.includes("loading") && <PlaceholderIcon />}
            </Button>
          ))}
        </div>

        {/* Icon Only Buttons - Small */}
        <div className="flex flex-col gap-8 absolute left-[846px] top-4">
          {buttonData.iconOnly.variants.map((variant, index) => (
            <Button
              key={`icon-small-${variant.state}-${index}`}
              className={`
                ${buttonData.iconOnly.sizes[0].size} 
                ${variant.bg} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}
            </Button>
          ))}
        </div>

        {/* Icon Only Buttons - Medium */}
        <div className="flex flex-col gap-8 absolute left-[914px] top-4">
          {buttonData.iconOnly.variants.map((variant, index) => (
            <Button
              key={`icon-medium-${variant.state}-${index}`}
              className={`
                ${buttonData.iconOnly.sizes[1].size} 
                ${variant.bg} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}
            </Button>
          ))}
        </div>

        {/* Icon Only Buttons - Large */}
        <div className="flex flex-col gap-8 absolute left-[986px] top-4">
          {buttonData.iconOnly.variants.map((variant, index) => (
            <Button
              key={`icon-large-${variant.state}-${index}`}
              className={`
                ${buttonData.iconOnly.sizes[2].size} 
                ${variant.bg} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}
            </Button>
          ))}
        </div>

        {/* Icon Only Buttons - XLarge */}
        <div className="flex flex-col gap-8 absolute left-[1062px] top-4">
          {buttonData.iconOnly.variants.map((variant, index) => (
            <Button
              key={`icon-xlarge-${variant.state}-${index}`}
              className={`
                ${buttonData.iconOnly.sizes[3].size} 
                ${variant.bg} 
                ${variant.shadow || ""} 
                ${variant.border || ""} 
                rounded-lg overflow-hidden 
                inline-flex items-center justify-center
              `}
              disabled={
                variant.state.includes("disabled") ||
                variant.state.includes("loading")
              }
            >
              {variant.state.includes("loading") ? (
                <CustomLoader />
              ) : (
                <PlaceholderIcon />
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
