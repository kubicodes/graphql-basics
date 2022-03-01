import { ApolloServer } from "apollo-server";
import { categories, products } from "./mockData";
import { Category } from "./resolvers/category";
import { Product } from "./resolvers/product";
import { Query } from "./resolvers/query";
import { typeDefs } from "./schema";

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      //Resolve Non Scalar Types of a Schema
      Category,
      Product,
    },
    context: {
      categories,
      products,
    },
  });

  const { url } = await server.listen();

  console.log(`Server started at ${url}`);
};

main().catch((error) => console.error(error));
