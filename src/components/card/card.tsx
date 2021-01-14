import React from 'react';
import classNames from 'classnames';

export interface CardBaseProps {
  header?: string
  bodyStyle?: object
  shadow?: string
  src?: string
  children?:string
}

const Card: React.FunctionComponent<CardBaseProps> = ({
  header,
  bodyStyle,
  shadow,
  children,
  src
} : CardBaseProps) => {
  const classes = classNames(
    'hive-card',
    {
      'is-shadow': shadow,
      'is-header': header,
      'is-body': bodyStyle
    }
  )
  return(
    <div className={classes} style={bodyStyle}>
      {header ? <span>{header}</span> : null}
      {!src ? null : (<img src={src}/>)}
      <span>{children}</span>
    </div>
  )
}

Card.defaultProps ={
  header: '',
  shadow: '',
  bodyStyle: {},
  src: ""
}

export default Card