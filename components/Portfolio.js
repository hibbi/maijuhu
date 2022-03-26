import Link from 'next/link'

export default function Portfolio( { posts }) {

  return (
    <div className="portfolio__grid">
      <ul>
      { allposts.map((post, index) => (
        <li key={post.node.databaseId}>
                <Link href={`/portfolio/${post.node.slug}`}>
          <a>{post.node.title}</a>
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}
export async function getStaticPaths() {
  const { loading, error, data } = await client.query({
    query: GET_ALL_POSTS_FOR_HOMEPAGE });
  const path = data.posts.edges.map((post) => ({
     params: { slug: post.slug },
  }));

  return {
  };
}