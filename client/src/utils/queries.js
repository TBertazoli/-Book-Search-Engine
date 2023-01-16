import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount      
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookid
        authors
        description
        title
        image
        link        
      }
    }
  `;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email   
    }
  }
`;
