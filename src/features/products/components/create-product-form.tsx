import { Input } from "@/shared/components/Input";
import { useForm } from "react-hook-form";
import type { CreateProductFormData } from "../types/create-product-form-data";

function CreateProductForm() {
  const { register } = useForm<CreateProductFormData>();

  return (
    <>
      <Input
        {...register("title")}
        label="Product Title"
        error="Title is required"
        placeholder="MacBook Pro"
      />
    </>
  );
}

export default CreateProductForm;
