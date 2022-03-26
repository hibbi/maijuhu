/**
 * @Author: Liha Leena
 * @Date:   2022-03-08 10:25:19
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 11:03:33
 */
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  slug,
}) {
  return (
    <div className="grid__item">
      <Link href={`/posts/${slug}`}>
      <a className="grid__item_link">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </a>
        </Link>
    </div>
  )
}
