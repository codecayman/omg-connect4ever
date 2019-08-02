import React from 'react';

import * as styles from './Button.module.scss';

const Button = ({
  children,
  onClick,
  style,
  disabled,
  cssClass
}) => {
  return (
    <div
      onClick={onClick}
      className={[
        styles.ButtonNoColor,
        cssClass ? cssClass : styles.Button,
        disabled ? styles.disabled : ''
      ].join(' ')}
      style={style}
    >
      { children }
    </div>
  )
}

export default Button;
