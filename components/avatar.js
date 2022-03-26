/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-02-28 12:20:27
 */
import Image from 'next/image'

export default function Avatar({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
