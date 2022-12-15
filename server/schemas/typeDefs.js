const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    # CLIPBOARD(S) DEFINED HERE comes from export from Clipboard.js
    clipboards: [Clipboard]
  }

  type Clipboard {
    _id: ID
    topic: String
    code: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    clipboards(username: String): [Clipboard]
    clipboard(clipboardId: ID!): Clipboard
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addClipboard(code: String!, topic: String!): Clipboard
    removeClipboard(clipboardId: ID!): Clipboard
  }
`;

module.exports = typeDefs;
