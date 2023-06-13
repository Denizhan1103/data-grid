// TODO: extends html input element
export interface ComponentProperties {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  startValue?: string | number;
  onChange?: () => void;
}
