import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type hello {
    message: String
  }

  type Friend {
    name: String!
    age: Int
  }

  type Query {
    helloWorld: hello
    friends: [Friend!]
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
  },
};

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await server.listen();

  console.log(`Server started at ${url}`);
};

main().catch((error) => console.error(error));
