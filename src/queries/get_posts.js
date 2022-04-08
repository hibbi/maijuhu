import { gql } from '@apollo/client'
export const GET_ALL_POSTS = gql`
  query AllPostsQuery {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        uri
        slug
        title
        featuredImage {
          node {
            mediaDetails {
              height
              width
            }
            id
            title
            sourceUrl
            altText
          }
        }
      }
    }
  }
`