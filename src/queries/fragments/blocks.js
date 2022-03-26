import { gql } from '@apollo/client'

export const blockFragment = gql`
fragment Blocks on BlockEditorContentNode {
    blocks {
        name
      __typename
      ... on CoreGalleryBlock {
          name
        attributes {
    ... on CoreGalleryBlockAttributes {
      ids
      images {
        id
        caption
        alt
        url
      }

    }
  }
      }
      ... on CoreParagraphBlock {
      attributes {
        ... on CoreParagraphBlockAttributes {
          content
        }
      }
    }
  }
}
`;

export default blockFragment;