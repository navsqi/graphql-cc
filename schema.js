const { gql } = require("apollo-server");

// ! -> required
// union -> untuk menggabungkan 2 data type
// input -> untuk input pada argunment

const typeDefs = gql`
  type Rating {
    _id: ID!
    rating: Int!
    comment: String
  }

  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String
    release_year: Int!
    genre: String!
    reviews: [Rating]!
  }

  type Query {
    GetAllBooks: [Book]!
    GetBookByID(_id: String): Book!
  }

  input ReviewsInput {
    rating: Int!
    comment: String
  }

  union Media = Book | Rating

  type Mutation {
    CreateBook(
      title: String!
      author: String!
      description: String
      release_year: Int!
      genre: String!
    ): Book!

    UpdateBook(
      _id: String!
      title: String
      author: String
      description: String
      release_year: Int
      genre: String
      reviews: [ReviewsInput]
    ): Book!

    DeleteBook(_id: String!): Boolean!
  }
`;

module.exports = typeDefs;
