import { gql } from '@apollo/client'

export const GET_ALL_POSTS_FOR_HOMEPAGE = gql`
query GetAllPostsWithFeaturedImage {
	posts {
		nodes {
          slug
					id
          title
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  name
                  height
                  width
                }
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
`;