import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      code
      success
      token
    }
  }
`;

export const REGISTER = gql`
  mutation register($firstName: String, $lastName: String, $email: String, $password: String) {
    register(userInput: { firstName: $firstName, lastName: $lastName, email: $email, password: $password }) {
      code
      success
      message
      errors {
        field
        error
      }
      token
    }
  }
`;
