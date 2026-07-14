import type { CreateProductFormData } from "../schemas/create-product-schema";

export const DEFAULT_CREATE_PRODUCT_FORM_VALUES = {
  title: "MacBook Pro",
  description: "Apple Laptop",
  price: 2200,
  discount: 10,
  categoryId: 1,
  inStock: true,
  productStatus: "published",
} satisfies CreateProductFormData;
