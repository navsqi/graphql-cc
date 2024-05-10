const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

mongoose.connect(
  "mongodb+srv://nauvalsh:KHUExEnXFv3pRh5E@cluster0.vrytkfu.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);

const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

// membuat apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // menambahkan GraphQL Playground
});

// start apollo server
server.listen().then(({ url }) => {
  console.log(`server ready on port ${url}`);
});
