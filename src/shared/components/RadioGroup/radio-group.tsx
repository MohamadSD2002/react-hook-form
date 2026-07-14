import type { ComponentProps } from "react";
import "./radio-group.css";

type Option = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  label?: string;
  error?: string;
  options: Option[];
} & ComponentProps<"input">;

export function RadioGroup(props: RadioGroupProps) {
  const { label, error, options, name, ...rest } = props;

  return (
    <div className="radio-group">
      {label && <p className="radio-group__title">{label}</p>}

      {options.map((option) => (
        <label key={option.value} className="radio-group__item">
          <input
            className="radio-group__field"
            {...rest}
            name={name}
            type="radio"
            value={option.value}
          />

          <span>{option.label}</span>
        </label>
      ))}

      {error && <p className="radio-group__error">{error}</p>}
    </div>
  );
}
