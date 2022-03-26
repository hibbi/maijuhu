import { gql } from '@apollo/client'

export const GET_ALL_PAGES = gql`
  pages {
    nodes {
      id
      title
      slug
    }
  }
`;