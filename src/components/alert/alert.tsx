import React from 'react';
import classNames from 'classnames';

export interface AlertBaseProps {
  title?: string,
  type?: string,
  description?: string,
  closable?: boolean,
  center?: boolean,
  closeText?: string,
  showIcon?: boolean,
  effect?: 'Dark' | 'Light',
  children?: string;
}
const Alert: React.FunctionComponent<AlertBaseProps> = ({
  title,
  type,
  description,
  closable,
  center,
  closeText,
  showIcon,
  effect,
  children
}: AlertBaseProps) => {
  const classes = classNames(
    'hive--alert',
    {
      [`hive-alert--${title}`]: title,
      [`hive-alert--${type}`]: type,
      'is-closeText': closeText,
      'is-showIcon': showIcon,
      'is-closable': closable,
      'is-center': center,
      'is-description': description
    }
  );
  return (
    <div
      className={classes}
    >
      <span >
        <div>
          {title &&
            <h3>{title}</h3>
          }
          <br/>
          {description ? (
            <span>{description}</span>) : null
          }
        </div>
        {closable ? (
          <button
            type={"button"}
          >X
          </button>
        ) : null}
      </span>
      <span>{children}</span>
    </div>
  )
}
Alert.defaultProps = {
  type: 'info',
  effect: 'Dark',
  closable: true,
  center: false,
  showIcon: false,
  description: '',
  closeText: '',
  title: '',
}
console.log(Alert.defaultProps)

export default Alert