import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      name
      id
      token
    }
  }
`;

export const VALID_USER_MUTATION = gql`
  mutation valid($email: String!, $password: String!) {
    valid(email: $email, password: $password) {
      name
      id
      token
    }
  }
`;
