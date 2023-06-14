import React from "react";

import { Modal as ModalHeadless } from "user-interface";
import { ComponentProperties } from "./Drawer.d";

import "./Drawer.scss";

export default function Drawer({ children, onClose }: ComponentProperties) {
  return (
    <ModalHeadless className="drawer" onClickOutside={onClose}>
      <ModalHeadless.Container className="drawer__container">
        <ModalHeadless.CloseButton
          className="drawer__closebtn"
          onClick={onClose}
        >
          X
        </ModalHeadless.CloseButton>
        {children}
      </ModalHeadless.Container>
    </ModalHeadless>
  );
}
