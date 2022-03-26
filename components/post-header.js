/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 14:21:48
 */
import Image from 'next/image'
import PostTitle from '../components/post-title'
import CoverImage from '../components/cover-image'

export default function PostHeader({ title, coverImage, image, width, sourceUrl }) {
  console.log(title, coverImage, image )

  console.log( CoverImage )

  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
