import * as React from 'react';
import classNames from 'classnames';

export interface BaseButtonProps {
  type?: String;
  size?: String;
  icon?: string;
  nativeType?: 'button' | 'submit' | 'reset'; 
  loading?: boolean,
  disabled?: boolean,
  plain?: boolean,
  autofocus?: boolean,
  round?: boolean,
  circle?: boolean
  children?: string | React.ReactNode
}

const Button: React.FunctionComponent<BaseButtonProps> = ({
  type,
  size,
  icon,
  nativeType,
  loading,
  disabled,
  plain,
  autofocus,
  round,
  circle,
  children
}: BaseButtonProps) => {
  const classes = classNames(
    'hive-button',
    {
      [`hive-button--${type}`]: type,
      [`hive-button--${size}`]: size,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle
    },
  );
  return (
    <button
      className={classes}
      disabled={disabled || loading }
      autoFocus={autofocus}
      type={nativeType}
    >
      {
        loading && <i className="hive-icon-loading"/>
      }
      {
        icon && !loading && <i className={icon}></i>
      }
      <span>
        {
          children
        }
      </span>
    </button>
  )
};

Button.defaultProps = {
  type: 'default',
  icon: '',
  nativeType: 'button',
  size: 'medium',
  loading: false,
  disabled: false,
  plain: false,
  autofocus: false,
  round: false,
  circle: false
}

export default Button;