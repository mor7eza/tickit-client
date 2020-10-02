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
