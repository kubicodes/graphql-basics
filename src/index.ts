import { ApolloServer } from "apollo-server";
import { categories, products, ratings } from "./mockData";
import { Category } from "./resolvers/category";
import { Mutation } from "./resolvers/mutation";
import { Product } from "./resolvers/product";
import { Query } from "./resolvers/query";
import { typeDefs } from "./schema";

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      //Resolve Non Scalar Types of a Schema
      Category,
      Product,
    },
    context: {
      categories,
      products,
      ratings,
    },
  });

  const { url } = await server.listen();

  console.log(`Server started at ${url}`);
};

main().catch((error) => console.error(error));
