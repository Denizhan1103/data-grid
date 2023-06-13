import React, { useRef, createContext } from "react";

// import useClickOutside from './UseClickOutside';

import {
  ModalProperties,
  ModalContainerProperties,
  ModalCloseButtonProperties,
} from "./Modal.d";

const ModalContext = createContext(null);

function Modal({
  children,
  className,
  onClickOutside = () => {},
}: ModalProperties) {
  const modalRef = useRef();

  // React.useEffect(() => {
  //   useClickOutside(modalRef, onClose);
  // }, []);

  return (
    <ModalContext.Provider value={{ closeFunction: onClickOutside }}>
      <div className={className} ref={modalRef}>
        {children}
      </div>
    </ModalContext.Provider>
  );
}

function ModalContainer({ children, className }: ModalContainerProperties) {
  checkModalValidity();

  return <div className={className}>{children}</div>;
}

// TODO: fix typo
function ModalCloseButton({
  children,
  className,
  onClick,
}: ModalCloseButtonProperties) {
  checkModalValidity();

  return (
    <p className={className} onClick={onClick}>
      {children}
    </p>
  );
}

const checkModalValidity = () => {
  const modalData = React.useContext(ModalContext);

  if (modalData === null)
    throw new Error(
      "Unexpected component usage. <Modal.CloseButton /> must be has <Modal /> as parent component."
    );

  return true;
};

export default Object.assign(Modal, {
  Container: ModalContainer,
  CloseButton: ModalCloseButton,
});
