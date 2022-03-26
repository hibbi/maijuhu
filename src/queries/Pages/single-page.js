import { gql } from '@apollo/client'
import { PAGE_BLOCKS } from '../../../components/Block'

export const GET_SINGLE_PAGE_WITH_BLOCKS = gql`
query GetSinglePageWithBlocks($slug: ID!) {
  page(id: $slug, idType: URI) {
    id
    title
    slug
    uri
    ...PageBlocks
    }
  }
  ${PAGE_BLOCKS}
`;