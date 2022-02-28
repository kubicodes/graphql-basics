import { ApolloServer, gql } from "apollo-server";
import { categories, products } from "./mockData";

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
    category: Category
  }

  type Query {
    helloWorld: hello
    friends: [Friend!]
    products: [Product!]!
    product(id: String!): Product
    category(id: String!): Category
  }

  type Category {
    id: String!
    name: String!
    products: [Product!]!
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
    category: (_: unknown, args: Record<string, unknown>) => {
      return categories.find((category) => category.id === args.id);
    },
  },
  //Resolve Non Scalar Types of a Schema
  Category: {
    products: (parent: Record<string, unknown>) => {
      return products.filter((product) => product.categoryId === parent.id);
    },
  },
  Product: {
    category: (parent: Record<string, unknown>) => {
      return categories.find((category) => category.id === parent.categoryId);
    },
  },
};

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await server.listen();

  console.log(`Server started at ${url}`);
};

main().catch((error) => console.error(error));
