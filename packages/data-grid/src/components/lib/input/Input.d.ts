export interface ComponentProperties {
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string;
  startValue?: string | number;
  type?: HTMLInputTypeAttribute;
  onChange?: () => void;
}
