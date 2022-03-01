export const Category = {
  products: (
    parent: Record<string, unknown>,
    _: any,
    context: Record<string, any>
  ) => {
    const { products } = context;
    return products.filter(
      (product: Record<string, any>) => product.categoryId === parent.id
    );
  },
};
