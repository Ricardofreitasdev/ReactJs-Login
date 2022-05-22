import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($token: String!) {
    user(token: $token) {
      name
      id
      token
    }
  }
`;
