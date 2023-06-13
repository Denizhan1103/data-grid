export interface ModalBase {
    children?:React.ReactNode | React.ReactElement
    className?: string;
  }
  
 export interface ModalProperties extends ModalBase {
    onClickOutside?: () => void
  }
  
 export interface ModalContainerProperties extends ModalBase {}
  
  export interface ModalCloseButtonProperties extends ModalBase {
    onClick?: () => void
  }