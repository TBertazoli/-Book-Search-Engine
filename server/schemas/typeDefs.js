const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]    
  }

  type Book {
    bookId: String
    authors: [Author]    
    description: String   
    title: String  
    image: String
    link: String       
  } 

  type Author{
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(title: String): [Book]
    book(bookId: String ): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: String!, description: String!, title: String!, image: String!, link: String! ): Book
  }
`;

module.exports = typeDefs;
