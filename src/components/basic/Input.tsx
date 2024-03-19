import { forwardRef, type InputHTMLAttributes } from "react";
import "src/components/basic/input.css";

export type Props = {
  onEnter?: () => void;
  blurOnEnter?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ onEnter, className = "", blurOnEnter, ...rest }: Props, ref) => (
    <input
      className={`flex input ${className}`}
      {...rest}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          onEnter?.();
          if (blurOnEnter) {
            e.currentTarget.blur();
          }
        } else if (e.key === "Escape") {
          e.currentTarget.blur();
        }
      }}
      ref={ref}
    />
  )
);

export default Input;
