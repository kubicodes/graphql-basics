import { ApolloServer, gql } from "apollo-server";
import { products } from "./mockData";

const typeDefs = gql`
  type hello {
    message: String
  }

  type Friend {
    name: String!
    age: Int
  }

  type Product {
    id: String!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String
    onSale: Boolean!
  }

  type Query {
    helloWorld: hello
    friends: [Friend!]
    products: [Product!]!
    product(id: String!): Product
  }
`;

const resolvers = {
  Query: {
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
    products: () => {
      return products;
    },
    product: (_: unknown, args: Record<string, unknown>) => {
      return products.find((product) => product.id === args.id);
    },
  },
};

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await server.listen();

  console.log(`Server started at ${url}`);
};

main().catch((error) => console.error(error));
