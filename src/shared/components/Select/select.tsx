import type { ComponentProps } from "react";
import "./select.css";

type SelectProps = ComponentProps<"select"> & {
  label?: string;
  error?: string;
  children?: React.ReactNode;
};

export function Select({ label, error, children, ...rest }: SelectProps) {
  return (
    <div className="select">
      {label && <label className="select__label">{label}</label>}

      <select className="select__field" {...rest}>
        {children}
      </select>

      {error && <p className="select__error">{error}</p>}
    </div>
  );
}
