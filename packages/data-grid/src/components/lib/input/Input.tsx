import React from "react";

import { Input as InputHeadless } from "user-interface";
import { ComponentProperties } from "./Input.d";

import "./Input.scss";

export default function Input({
  placeholder,
  style,
  className = "",
  startValue = "",
  type = "text",
  onChange,
}: ComponentProperties) {
  return (
    <InputHeadless
      className={`input ${className}`}
      startValue={startValue}
      placeholder={placeholder}
      type={type}
      style={style}
      onChange={onChange}
    />
  );
}
