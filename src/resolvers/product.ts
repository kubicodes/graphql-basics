import { categories } from "../mockData";

export const Product = {
  category: (parent: Record<string, unknown>) => {
    return categories.find((category) => category.id === parent.categoryId);
  },
};
