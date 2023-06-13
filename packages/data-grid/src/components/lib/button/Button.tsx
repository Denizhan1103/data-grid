import React from "react";

import { Button as ButtonHeadless } from "user-interface";

import { ComponentProperties } from "./Button.d";
import "./Button.scss";

export default function Button({
  name,
  icon,
  type = "primary",
  height,
  className,
  width,
  onClick = () => {},
}: ComponentProperties) {
  return (
    <ButtonHeadless
      onClick={onClick}
      className={`button button--${type} ${className}`}
      style={{ height, width }}
    >
      <div className="button__icon"></div>
      <p className="button__text">{name}</p>
    </ButtonHeadless>
  );
}
