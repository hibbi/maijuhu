import React from "react";
import { gql } from "@apollo/client";

export const IMAGE_BLOCK_ATTRIBUTES = gql`
  fragment ImageBlockAttributes on CoreImageBlockAttributes {
    url
    alt
    caption
    id
    width
    height
    sizeSlug
  }
`;
export default function ImageBlock({
  caption,
  url,
  id,
  width,
  height,
  sizeSlug
}) {
  const nodes = [{img_src: url, img_id: id, img_width: width, img_height: height, img_caption: caption, slug: sizeSlug}];
  console.log(nodes);
  return (
    <figure
    key={id}>
      <img src={url} />
    </figure>
  )
}