export type ProductStatus = "draft" | "published";

export interface CreateProductFormData {
  title: string;
  description: string;
  price: number;
  discount: number;
  categoryId: number;
  inStock: boolean;
  productStatus: ProductStatus;
}
