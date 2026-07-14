import { z } from "zod";

export const createProductSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(20, "Title must not exceed 20 characters"),

  description: z.string().optional(),

  price: z.coerce.number().min(0, "Price cannot be negative"),

  discount: z.coerce.number().min(0).max(50, "Discount cannot exceed 50%"),

  categoryId: z.coerce.number(),

  inStock: z.boolean(),

  productStatus: z.enum(["draft", "published"]),
});

export type CreateProductFormData = z.infer<typeof createProductSchema>;
