export interface ComponentProperties {
  name: string;
  icon?: string;
  type?: ButtonType;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export type ButtonType = "primary" | "secondary";
