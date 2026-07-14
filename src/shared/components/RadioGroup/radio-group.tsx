import type { ComponentProps } from "react";

import "./radio-group.css";

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
  options: readonly Option[];
};

export function RadioGroup({
  label,
  error,
  options,
  ...rest
}: RadioGroupProps) {
  return (
    <div className="radio-group">
      {label && <p className="radio-group__label">{label}</p>}

      <div className="radio-group__options">
        {options.map((option) => (
          <label key={option.value} className="radio-group__option">
            <input type="radio" value={option.value} {...rest} />

            {option.label}
          </label>
        ))}
      </div>

      {error && <p className="radio-group__error">{error}</p>}
    </div>
  );
}
