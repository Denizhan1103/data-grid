export interface ComponentProperties {
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string;
  startValue?: string | number;
  after?: string;
  type?: "text" | "number";
  onChange?: (arg1: string) => void;
}
