import type { ComponentProps } from "react";
import "./checkbox.css";

type CheckboxProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

export function Checkbox({ label, error, ...rest }: CheckboxProps) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__field" type="checkbox" {...rest} />

        <span>{label}</span>
      </label>

      {error && <p className="checkbox__error">{error}</p>}
    </div>
  );
}
