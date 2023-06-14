import React, { useState } from "react";

import { Input as InputHeadless } from "user-interface";
import { ComponentProperties } from "./Input.d";

import "./Input.scss";

export default function Input({
  placeholder,
  style,
  className = "",
  startValue = "",
  type = "text",
  after = "",
  onChange,
}: ComponentProperties) {
  const [currentValue, setCurrentValue] = useState(
    startValue + (after ? ` ${after}` : "")
  );

  const handleChange = (value: string | number) => {
    if (type === "number") {
      const isNumberRegex = new RegExp("/^d+$/");
      if (!isNumberRegex.test(String(value))) return;
    }
  };

  const handleFocus = () => {
    if (!after) return;
    setCurrentValue(currentValue.slice(0, -after.length - 1));
  };

  const handleBlur = () => {
    if (!after) return;
    setCurrentValue(startValue + (after ? ` ${after}` : ""));
  };

  return (
    <InputHeadless
      className={`input ${className}`}
      startValue={currentValue}
      placeholder={placeholder}
      style={style}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={({ target }) => handleChange(target.value)}
    />
  );
}
