import type { ComponentProps } from "react";
import "./input.css";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, ...rest }: InputProps) {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}

      <input className="input__field" {...rest} />

      {error && <p className="input__error">{error}</p>}
    </div>
  );
}
