import React from "react";

import { ComponentProperties } from "./Input.d";

export default function Input({
  placeholder,
  className,
  style,
  startValue,
  type,
  onChange,
}: ComponentProperties) {
  return (
    <input
      value={startValue}
      className={className}
      style={style}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
