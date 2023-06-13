export interface ComponentProperties {
    name?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }
  