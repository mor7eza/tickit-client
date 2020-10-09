import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      code
      success
      message
      users {
        id
        firstName
        lastName
        email
        role
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser($id: ID) {
    getUser(userId: $id) {
      code
      success
      message
      user {
        firstName
        lastName
        role
        email
        password
      }
    }
  }
`;
