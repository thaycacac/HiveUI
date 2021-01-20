import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export interface BaseTooltipProps {
  style?: any;
  content?: string;
  direction?: string;
  children?: any;
  mouseEnterDelay?: number;
  trigger?: string;
  color?: string;
}

const Tooltip: React.FunctionComponent<BaseTooltipProps> = ({
  style,
  content,
  direction,
  children,
  mouseEnterDelay,
  trigger,
  color,
}: BaseTooltipProps) => {
  const [active, setActive] = useState(false);
  useEffect(() => {});
  let timeout: any;

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, mouseEnterDelay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const renderTooltipTriangle = () => {
    //top default
    let trianglePosition: object = {
      width: 0,
      height: 0,
      borderTop: `6px solid ${color}`,
      borderRight: "6px solid transparent",
      borderLeft: "6px solid transparent",
      position: "absolute",
      top: "100%",
      left: "45%",
    };
    if (direction === "bottom") {
      trianglePosition = {
        width: 0,
        height: 0,
        borderBottom: `6px solid ${color}`,
        borderRight: "6px solid transparent",
        borderLeft: "6px solid transparent",
        position: "absolute",
        bottom: "100%",
        left: "45%",
      };
    } else if (direction === "right") {
      trianglePosition = {
        width: 0,
        height: 0,
        borderTop: "7px solid transparent",
        borderBottom: "8px solid transparent",
        borderRight: `8px solid ${color}`,
        position: "absolute",
        right: "100%",
      };
    } else if (direction === "left") {
      trianglePosition = {
        width: 0,
        height: 0,
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
        borderLeft: `6px solid ${color}`,
        position: "absolute",
        left: "100%",
      };
    }
    return trianglePosition;
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          className={`tooltip-tip ${direction}`}
          style={{ background: `${color}` }}
        >
          <span style={renderTooltipTriangle()}></span>
          {content}
        </div>
      )}
    </div>
  );
};

Tooltip.defaultProps = {
  content: "tooltip",
  direction: "top",
  mouseEnterDelay: 300,
  trigger: "hover",
  color: "rgb(46, 42, 42)",
};
export default Tooltip;
