import * as React from "react";

import { Input as InputHeadless } from "user-interface";
import { ComponentProperties } from "./Input.d";

import "./Input.scss";

export default function Input({
  placeholder,
  style,
  className = "",
  onChange,
}: ComponentProperties) {
  return (
    <InputHeadless
      className={`input ${className}`}
      placeholder={placeholder}
      style={style}
      onChange={onChange}
    />
  );
}
