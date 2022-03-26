/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 10:23:54
 */
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import App from '../components/App'
import Layout from '../components/layout'
import Pf from '../components/Portfolio'
import { GET_ALL_POSTS } from '../src/queries/get_posts'
import { client } from '../src/apollo/client'
import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Homepage( { posts }) {
  return (
    <Layout>
        <Head>
        <title>Visual Artist {CMS_NAME} </title>
        <meta name="description" content=""/>
        <meta name="robots" content="all" />
        <meta property="og:title" content={`Visual Artist ${CMS_NAME}`}/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CMS_URL} />
        <meta property="og:image" content="../public/images/Maiju_Hukkanen_Metsastyspaikka.webp" />
      </Head>
      <div className="portfolio__grid">
      { posts.map((post, index) => (
        <div key={post.id} className="grid__item">
          <Link href={`/portfolio/${post.slug}`}>
            <a>
              <figure className="portfolio__figure">
                <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText }
            width={post.featuredImage.node.mediaDetails.width}
            height={post.featuredImage.node.mediaDetails.height}
            layout="intrinsic"
            objectFit='cover'
                />
              </figure>
              <span className="grid__item_title">{post.title}</span>
            </a>
          </Link>

          </div>
      ))}
      </div>
    </Layout>
  )
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_POSTS,
  })
  return {
    props: {
      posts: data.posts.nodes
    },
    revalidate: 1,
  };
}