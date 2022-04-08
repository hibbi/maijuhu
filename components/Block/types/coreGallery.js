import React, { useState } from "react"
import { gql } from "@apollo/client";
import Image from 'next/image'
import Lightbox from 'react-image-lightbox';

export const GALLERY_BLOCK_ATTRIBUTES = gql`
fragment MediaImage on MediaItem {
  sourceUrl(size: LARGE)
  sizes(size: LARGE)
  srcSet(size: LARGE)
  src: sourceUrl(size: LARGE)
  id
  databaseId
  title
  altText
  caption
  mediaDetails {
    height
    width
  }
}
`;

const GalleryBlock = ({
  innerBlocks
}) => {
  const imageBlocks = innerBlocks;
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="gallery__grid">
        {imageBlocks.map((img, index) => {
          // setup onclick function to handle state change
          function updateOnClick() {
            setPhotoIndex(index)
            setIsOpen(true)
          }
          return (
            <figure
              key={index}
              onClick={updateOnClick}
              className={ img.mediaItem.nodes[0].mediaDetails.width > img.mediaItem.nodes[0].mediaDetails.height ? "item__landscape" : "item__portrait" }
            >
                <Image
                src={img.mediaItem.nodes[0].sourceUrl}
                alt={img.mediaItem.nodes[0].altText}
                width={img.mediaItem.nodes[0].mediaDetails.width}
                height={img.mediaItem.nodes[0].mediaDetails.height}
                />
                <div className="work__details">
                  { img.mediaItem.nodes[0].caption != null ? img.mediaItem.nodes[0].caption.split('|').map((addr, idx) => ( <span key={idx}>{addr.replace(/(<([^>]+)>)/gi, "")}</span> )) : null }
                </div>
            </figure>
          )
        })}
      {isOpen && (
      <Lightbox
        mainSrc={imageBlocks[photoIndex].mediaItem.nodes[0].sourceUrl}
        nextSrc={
          imageBlocks[(photoIndex + 1) % imageBlocks.length]
            .mediaItem.nodes[0].sourceUrl
        }
        prevSrc={
          imageBlocks[
            (photoIndex + imageBlocks.length - 1) %
            imageBlocks.length
          ].mediaItem.nodes[0].sourceUrl
        }
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() =>
          setPhotoIndex(
            (photoIndex + imageBlocks.length - 1) %
            imageBlocks.length
          )
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % imageBlocks.length)
        }
        enableZoom={false}
        imageTitle={ imageBlocks[photoIndex].mediaItem.nodes[0].caption != null ? imageBlocks[photoIndex].mediaItem.nodes[0].caption.split('|').map((addr, idx) => ( <span key={idx}>{addr.replace(/(<([^>]+)>)/gi, "")}</span> )) : null }
      />
    )}
    </div>
  )

}
export default GalleryBlock