import { gql } from '@apollo/client'
import { BLOCKS_FIELD } from '../../components/Block'

export const GET_SINGLE_POST_WITH_BLOCKS = gql`
query GetSinglePostWithBlocks($slug: ID!) {
  post(id: $slug, idType: URI) {
    id
    title
    slug
    featuredImage {
      node {
        sourceUrl
      }
    }
    previousPost {
      node {
        ... on Post {
          id
          title
          uri
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    nextPost {
      node {
        ... on Post {
          id
          title
          uri
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
    ...BlocksField
    }
  }
  ${BLOCKS_FIELD}
`;