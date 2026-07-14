import type { ComponentProps } from "react";
import "./textarea.css";

type TextareaProps = ComponentProps<"textarea"> & {
  label?: string;
  error?: string;
};

export function Textarea({ label, error, ...rest }: TextareaProps) {
  return (
    <div className="textarea">
      {label && <label className="textarea__label">{label}</label>}

      <textarea className="textarea__field" {...rest} />

      {error && <p className="textarea__error">{error}</p>}
    </div>
  );
}
