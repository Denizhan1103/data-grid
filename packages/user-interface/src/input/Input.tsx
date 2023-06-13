import React from "react";

import { ComponentProperties } from "./Input.d";

export default function Input({
  placeholder,
  className,
  style,
  onChange,
}: ComponentProperties) {
  return (
    <input
      className={className}
      style={style}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
