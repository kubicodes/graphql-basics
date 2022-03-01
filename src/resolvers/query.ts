import { products, categories } from "../mockData";

export const Query = {
  helloWorld: () => {
    return {
      message: "hello world",
    };
  },
  friends: () => {
    return [
      {
        name: "Bob",
        age: 24,
      },
      {
        name: "Mike",
      },
    ];
  },
  products: (_: any, args: Record<string, any>) => {
    let filteredProducts;

    if (args.filter.onSale) {
      filteredProducts = products.filter(
        (product: Record<string, any>) => product.onSale === true
      );
    }

    return filteredProducts ?? products;
  },
  product: (_: unknown, args: Record<string, unknown>) => {
    return products.find((product) => product.id === args.id);
  },
  category: (_: unknown, args: Record<string, unknown>) => {
    return categories.find((category) => category.id === args.id);
  },
};
