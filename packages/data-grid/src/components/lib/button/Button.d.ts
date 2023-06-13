export interface ComponentProperties {
  name?: string;
  icon?: string;
  type?: ButtonType;
  className?: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export type ButtonType = "primary" | "secondary";
