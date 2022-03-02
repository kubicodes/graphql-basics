export const Mutation = {
  addCategory: (parent: any, args: any, context: any) => {
    const newCategory = {
      id: "4958945-94584-945-dfkj-4958",
      name: args.input.name,
    };
    context.categories.push(newCategory);
    return newCategory;
  },
};
