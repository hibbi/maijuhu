import { gql } from '@apollo/client'

export const AUTH = `gql
mutation LoginUser {
  login(
    input: {clientMutationId: "uniqueId", 
      username: "samuli__admin",
      password: "Xowl9*MexaSalb"}
  ) {
    authToken
    clientMutationId
    refreshToken
  }
}
`;