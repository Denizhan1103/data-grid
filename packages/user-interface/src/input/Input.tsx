import React from "react";

import { ComponentProperties } from "./Input.d";

export default function Input({
  placeholder,
  className,
  style,
  startValue,
  onChange,
}: ComponentProperties) {
  return (
    <input
      value={startValue}
      className={className}
      style={style}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
