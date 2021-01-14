import React, {Children, Component} from 'react';
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

  getStyle() {
    const style = {};

    if (this.context.gutter) {
      style.paddingLeft = `${this.context.gutter / 2}px`;
      style.paddingRight = style.paddingLeft;
    }

    return style;
  }
  
  let classList = [];

  ['span', 'offset', 'pull', 'push'].forEach(prop => {
    if (this.props[prop] >= 0) {
      classList.push(
        prop !== 'span'
        ? `el-col-${prop}-${this.props[prop]}`
        : `el-col-${this.props[prop]}`
      );
    }
  });

  ['xs', 'sm', 'md', 'lg'].forEach(size => {
    if (typeof this.props[size] === 'object') {
      let props = this.props[size];
      Object.keys(props).forEach(prop => {
        classList.push(
          prop !== 'span'
          ? `el-col-${size}-${prop}-${props[prop]}`
          : `el-col-${size}-${props[prop]}` 
        );
      });
    } else if (this.props[size] >= 0) {
      classList.push(`el-col-${size}-${Number(this.props[size])}`);
    }
  });
  return 
    React.createElement(tag, {
      className: this.className('el-col', classList),
      style: this.style(getStyle())
    }, this.props.children)


}
  
Col.defaultProps = {
  span: 24,
  tag: 'div'
}
export default Col 