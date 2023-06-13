import React from 'react';

import { ComponentProperties } from './Button.d';

export default function Button({
  name,
  children,
  className,
  style,
  onClick = () => {},
}: ComponentProperties) {
  useButtonPropertiesRight({ name, children, className, onClick });

  return (
    <div className={className} style={style} onClick={onClick}>
      {name} {children}
    </div>
  );
}

const useButtonPropertiesRight = ({
  name,
  children,
  onClick,
}: ComponentProperties) => {
  if (typeof onClick !== 'function')
    throw new Error(
      'Unexpected type for onClick properties. Callback types must be function.'
    );

  if (name && children) {
    throw new Error(
      'name and children property is not usable together. Please use just one.'
    );
  }

  return true;
};
