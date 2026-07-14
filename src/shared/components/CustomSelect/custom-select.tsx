import "./custom-select.css";

type Option = {
  label: string;
  value: number;
};

type CustomSelectProps = {
  label?: string;
  error?: string;

  value?: number;
  onChange: (value: number) => void;
  options: Option[];
};

export function CustomSelect({
  label,
  error,
  value,
  onChange,
  options,
}: CustomSelectProps) {
  return (
    <div className="select">
      {label && <label className="select__label">{label}</label>}

      <select
        className="select__field"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="select__error">{error}</p>}
    </div>
  );
}
