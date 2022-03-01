export const Product = {
  category: (
    parent: Record<string, any>,
    _: unknown,
    context: Record<string, any>
  ) => {
    const { categories } = context;
    return categories.find(
      (category: Record<string, any>) => category.id === parent.categoryId
    );
  },
  ratings: (
    parent: Record<string, any>,
    _: unknown,
    context: Record<string, any>
  ) => {
    const { ratings } = context;

    return ratings.filter(
      (rating: Record<string, any>) => rating.productId === parent.id
    );
  },
};
