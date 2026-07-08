import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  error?: string;
};

export function Input(props: InputProps) {
  const { label, error, ...rest } = props;

  return (
    <>
      {label && <label>{label}</label>}
      <input {...rest} />
      {error && <p>{error}</p>}
    </>
  );
}
