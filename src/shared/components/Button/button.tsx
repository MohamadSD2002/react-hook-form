import "./button.css";

import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
}
