import React from "react";

export interface BaseColProps {
  span?: number;
  tag?: string;
  offset?: number;
  pull?: number;
  push?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children: any;
}

const Col: React.FunctionComponent<BaseColProps> = (props1: any) => {
  const {
    span,
    tag,
    offset,
    pull,
    push,
    xs,
    sm,
    md,
    lg,
    xl,
    children,
  } = props1;

  let classList = ["el-col"];

  [span, offset, pull, push].forEach((prop: number = 0) => {
    if (prop >= 0) {
      classList.push(
        prop !== span
          ? `el-col-${Object.keys({ prop })[0]}-${prop}`
          : `el-col-${prop}`
      );
    }
  });

  ["xs", "sm", "md", "lg", "xl"].forEach(
    (size: number | object | string = 0) => {
      if (typeof size === "object") {
        let props: any = size;
        Object.keys(props).forEach((prop: any) => {
          classList.push(
            prop !== "span"
              ? `el-col-${Object.keys(size)[0]}-${prop}-${props[prop]}`
              : `el-col-${Object.keys(size)[0]}-${props[prop]}`
          );
        });
      } else {
        classList.push(`el-col-${size}-${props1[size]}`);
      }
    }
  );

  return <div className={classList.join(" ")}></div>;
};

Col.defaultProps = {
  span: 24,
  tag: "div",
};
export default Col;
