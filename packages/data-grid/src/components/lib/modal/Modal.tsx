import * as React from "react";

import { Modal as ModalHeadless } from "user-interface";
import { ComponentProperties } from "./Modal.d";

import "./Modal.scss";

export default function Modal({ children, onClose }: ComponentProperties) {
  return (
    <ModalHeadless className="modal" onClickOutside={onClose}>
      <ModalHeadless.Container className="modal__container">
        <ModalHeadless.CloseButton
          className="modal__closebtn"
          onClick={onClose}
        >
          X
        </ModalHeadless.CloseButton>
        {children}
      </ModalHeadless.Container>
    </ModalHeadless>
  );
}
