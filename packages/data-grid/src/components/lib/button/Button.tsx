import React, { useCallback } from "react";

import { Button as ButtonHeadless } from "user-interface";

import { ComponentProperties } from "./Button.d";
import "./Button.scss";

export default function Button({
  name,
  icon,
  type = "primary",
  height,
  className = "",
  width,
  onClick = () => {},
}: ComponentProperties) {
  const ButtonIcon = useCallback(() => {
    return <>{icon ? <img src={icon} className="button__icon" /> : null}</>;
  }, [icon]);

  return (
    <ButtonHeadless
      onClick={onClick}
      className={`button button--${type} ${className}`}
      style={{ height, width }}
    >
      <ButtonIcon />
      <p className="button__text">{name}</p>
    </ButtonHeadless>
  );
}
