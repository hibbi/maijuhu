import React, { useState } from "react"
import { gql } from "@apollo/client";
import Image from 'next/image'
import Lightbox from 'react-image-lightbox';

export const GALLERY_BLOCK_ATTRIBUTES = gql`
  fragment GalleryBlockAttributes on CoreGalleryBlockAttributes {
    ids
    align
    anchor
    columns
    images {
      id
      caption
      alt
      url
    }
  }
  fragment GalleryImageDetails on CoreGalleryBlockToMediaItemConnection {
    nodes {
      altText
      caption
      description
      mediaItemId
      mediaItemUrl
      mediaDetails {
        height
        width
      }
    }
  }
`;

const GalleryBlock = ({
  ids,
  caption,
  images,
  columns,
  linkTarget,
  linkTo,
  nodes
}) => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="gallery__grid">
          {nodes.map((img, index) => {
            // setup onclick function to handle state change
            function updateOnClick() {
              setPhotoIndex(index)
              setIsOpen(true)
            }
            return (
              <figure
                key={index}
                onClick={updateOnClick}
                className={ img.mediaDetails.width > img.mediaDetails.height ? "item__landscape" : "item__portrait" }
              >
                  <Image
                  src={img.mediaItemUrl}
                  alt={img.altText}
                  width={img.mediaDetails.width}
                  height={img.mediaDetails.height}
                  />
                  <div className="work__details">
                    { img.caption != null ? img.caption.split(',').map((addr, idx) => ( <span key={idx}>{addr.replace(/(<([^>]+)>)/gi, "")}</span> )) : null }
                  </div>
              </figure>
            )
          })}
        {isOpen && (
        <Lightbox
          mainSrc={nodes[photoIndex].mediaItemUrl}
          nextSrc={
            nodes[(photoIndex + 1) % nodes.length]
              .mediaItemUrl
          }
          prevSrc={
            nodes[
              (photoIndex + nodes.length - 1) %
                nodes.length
            ].mediaItemUrl
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + nodes.length - 1) %
                nodes.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % nodes.length)
          }
          enableZoom={false}
          imageTitle={ nodes[photoIndex].caption != null ? nodes[photoIndex].caption.split(',').map((addr, idx) => ( <span key={idx}>{addr.replace(/(<([^>]+)>)/gi, "")}</span> )) : null }
        />
      )}
      </div>
    )
}
export default GalleryBlock