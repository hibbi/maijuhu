import { gql } from '@apollo/client'

export const GET_ALL_PAGES = gql`
  query AllPagesQuery {
    pages {
      nodes {
        id
        title
        slug
      }
  }
}
`;