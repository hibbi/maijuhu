import { gql } from '@apollo/client'

export const AUTH = `gql
mutation LoginUser {
  login(
    input: {clientMutationId: "uniqueId", 
      username: "",
      password: ""}
  ) {
    authToken
    clientMutationId
    refreshToken
  }
}
`;
