import React, {Children, Component} from 'react';
import classnames from 'classnames'
import   PropTypes from 'prop-types';

export interface BaseColProps {
  span?: number;
  tag?: string;
  offset?: number;
  pull?:number;
  push?: number;
  xs?: [number, object];
  sm?: [number, object];
  md?: [number, object];
  lg?: [number, object];
  xl?: [number, object];
  children: any;
}

const Col: React.FunctionComponent<BaseColProps> = ({
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
}: BaseColProps ) => {

  // getStyle() {
  //   const style = {};

  //   if (this.context.gutter) {
  //     style.paddingLeft = `${this.context.gutter / 2}px`;
  //     style.paddingRight = style.paddingLeft;
  //   }

  //   return style;
  // }
  
  let classList = ['el-col'];

  [span, offset, pull, push].forEach((prop: number = 0) => {
    if (prop >= 0) {
      classList.push(
        prop !== span
        ? `el-col-${Object.keys({prop})[0]}-${prop}`
        : `el-col-${prop}`
      );
    }
  });

  [xs, sm, md, lg].forEach((size: number | object = 0) => {
    if (typeof size === 'object') {
      let props: any = size;
      Object.keys(props).forEach((prop: any) => {
        classList.push(
          prop !== 'span'
          ? `el-col-${Object.keys(size)[0]}-${prop}-${props[prop]}`
          : `el-col-${Object.keys(size)[0]}-${props[prop]}` 
        );
      });
    } else if (size >= 0) {
      classList.push(`el-col-${Object.keys(size)[0]}-${size}`);
    }
  });
  return (
    <div className={classList.join(' ')}>
      {children}
    </div>
  )
}
  
Col.defaultProps = {
  span: 24,
  tag: 'div'
}
export default Col