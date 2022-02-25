import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type hello {
    message: String
  }

  type Query {
    helloWorld: hello
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return {
        message: "hello world",
      };
    },
  },
};

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await server.listen();

  console.log(`Server started at ${url}`);
};

main().catch((error) => console.error(error));
