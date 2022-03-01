import { gql } from "apollo-server";

//Generally in one file
export const typeDefs = gql`
  type hello {
    message: String
  }

  type Friend {
    name: String!
    age: Int
  }

  type Rating {
    id: String!
    rating: String!
    productId: String!
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
    ratings: [Rating]
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
