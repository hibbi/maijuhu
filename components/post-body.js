/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 09:30:15
 */

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="joku"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
