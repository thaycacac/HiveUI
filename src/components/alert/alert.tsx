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
  effect?: 'dark' | 'light',
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
    'hive-alert',
    {
      'is-title': title,
      [`hive-alert--${type}`]: type,
      'is-closeText': closeText,
      'is-showIcon': showIcon,
      'is-closable': closable,
      'is-center': center,
      'is-description': description
    }
  );
  return (
    <div >
      <span className={classes}>
        <div>
          {title && <p>{title}</p>}
          {description ? (
            <span>{description}</span>) : null
          }
        </div>
        {closable &&
          <button>
            {children}
          </button>
        }
      </span>
    </div>
  )
}
Alert.defaultProps = {
  type: 'info',
  effect: 'light',
  closable: true,
  center: false,
  showIcon: false,
  description: '',
  closeText: '',
  title: '',
}
console.log(Alert.defaultProps)

export default Alert