import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/shared/components/Button";
import { Checkbox } from "@/shared/components/Checkbox";
import { CustomSelect } from "@/shared/components/CustomSelect";
import { Input } from "@/shared/components/Input";
import { RadioGroup } from "@/shared/components/RadioGroup";
import { Textarea } from "@/shared/components/Textarea";

import {
  createProductSchema,
  type CreateProductFormData,
} from "../schemas/create-product-schema";

import { CATEGORY_OPTIONS } from "../constants/category-options";
import { DEFAULT_CREATE_PRODUCT_FORM_VALUES } from "../constants/default-form-values";
import { STATUS_OPTIONS } from "../constants/status-options";

import "../styles/create-product-form.css";

function CreateProductForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: DEFAULT_CREATE_PRODUCT_FORM_VALUES,
  });

  const discount = watch("discount");

  const onSubmit = (data: CreateProductFormData) => {
    console.log(data);

    // Reset form after successful submit.
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Create Product</h1>

      <p className="form__subtitle">Add a new product to your catalog.</p>

      <Input
        {...register("title")}
        label="Title"
        placeholder="MacBook Pro"
        error={errors.title?.message}
      />

      <Textarea
        {...register("description")}
        label="Description"
        placeholder="Write product description..."
        error={errors.description?.message}
      />

      <div className="form__row">
        <Input
          {...register("price")}
          type="number"
          label="Price"
          placeholder="999"
          error={errors.price?.message}
        />

        <div>
          <Input
            {...register("discount")}
            type="number"
            label="Discount"
            placeholder="10"
            error={errors.discount?.message}
          />

          <p>Current Discount: {discount}%</p>
        </div>
      </div>

      {/* Controller is used for controlled components like CustomSelect. */}
      <Controller
        control={control}
        name="categoryId"
        render={({ field }) => (
          <CustomSelect
            label="Category"
            error={errors.categoryId?.message}
            value={field.value}
            onChange={field.onChange}
            options={CATEGORY_OPTIONS}
          />
        )}
      />

      <Checkbox
        {...register("inStock")}
        label="In Stock"
        error={errors.inStock?.message}
      />

      <RadioGroup
        {...register("productStatus")}
        label="Status"
        error={errors.productStatus?.message}
        options={STATUS_OPTIONS}
      />

      <Button type="submit">Create Product</Button>
    </form>
  );
}

export default CreateProductForm;
