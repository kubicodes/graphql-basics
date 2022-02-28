import { products } from "../mockData";

export const Category = {
  products: (parent: Record<string, unknown>) => {
    return products.filter((product) => product.categoryId === parent.id);
  },
};
