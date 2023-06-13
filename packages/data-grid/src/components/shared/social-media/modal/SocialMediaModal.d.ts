export interface ComponentProperties {
  onClose?: () => void;
}

export interface FormData {
  name: string;
  link: string;
  description: string;
}

export interface KeyAccessor {
  name: string;
  accessor: string;
}
