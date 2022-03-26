/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-09 09:34:46
 */
import cn from 'classnames'
import Image from 'next/image'

export default function CoverImage({ title, coverImage }) {
  const image = (
    <Image
      layout={'responsive'}
      alt={`Cover Image for ${title}`}
      width={coverImage?.mediaDetails?.sizes[1].width}
      height={coverImage?.mediaDetails?.sizes[1].height}
      src={coverImage?.sourceUrl}
    />
  )
  console.log( image );
  return (
    <figure>
      { image }
    </figure>
  )
}
