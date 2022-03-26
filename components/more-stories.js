/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 14:04:35
 */
import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <div className="portfolio grid">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            date={node.date}
            author={node.author?.node}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
    </div>
  )
}
