import React, {useMemo} from 'react';
import classNames from 'classnames';

export interface AlertBaseProps {
  title?: string,
  description?: string,
  type?: 'success' | 'warning' | 'info' |'error',
  closable?: boolean,
  closeText?: string,
  showIcon?: boolean,
  center?: boolean,
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
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-success',
    'warning': 'el-icon-warning',
    'error': 'el-icon-error'
  };

  const typeClass = useMemo(() => `hive-alert--${type}`, [type])
  const iconClass = useMemo(() => TYPE_CLASSES_MAP[type] || 'el-icon-info', [type])

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
  title: '',
  description: '',
  type: 'info',
  closable: true,
  closeText: '',
  effect: 'light',
}

export default Alert