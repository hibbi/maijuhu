import Head from 'next/head'
import Layout from '../../components/layout'
import { client } from '../../src/apollo/client'
import { GET_ALL_POSTS } from '../../src/queries/get_posts'
import { GET_SINGLE_POST_WITH_BLOCKS } from '../../src/queries/single-post'
import Block, { BLOCKS_FIELD } from "../../components/Block";
import Link from 'next/link'
import Image from 'next/image'
import _ from 'lodash';
import {CMS_NAME, CMS_URL} from '../../lib/constants'

export default function PortfolioPost( { posts, post } ) {
  const { title, blocks } = post;
  const nextPost = post.nextPost
  const prevPost = post.previousPost
  return (
    <Layout>
        <Head>
        <title>{title} – {CMS_NAME}</title>
        <meta name="description" content=""/>
        <meta name="robots" content="all" />
        <meta property="og:title" content={title}/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CMS_URL + "/portfolio/" + post.slug} />
        <meta property="og:image" content={post.featuredImage.node.sourceUrl} />
      </Head>
      <div className="single__project">
        <h1 className="project__title">{title}</h1>
        <div className="project__content">
          {blocks
            ? blocks.map((block, index) =>
           <Block block={block} key={index} /> )
            : null}
        </div>
      </div>
      <div className="single__project_footer">
      { nextPost ?
        <div className="previous">

                    <Link href={`/portfolio/${nextPost.node.slug}` }>
                    <a><span>Previous</span><span>project</span></a>
                    </Link>
        </div>
        :
        <div className="previous not-found">
          <span>Previous</span><span>project</span>
          </div>
}
        <div className="frontpage">
          <Link href="/">
            <a style={{textAlign: "center"}}><span>Front</span><span>page</span></a>
          </Link>
        </div>
        { prevPost ?
        <div className="next">
                    <Link href={`/portfolio/${prevPost.node.slug}` }>
            <a style={{textAlign: "right"}}><span>Next</span><span>project</span></a>
          </Link>
        </div>
        : <div className="next not-found">
          <span>Next</span><span>project</span>
          </div>
        }
      </div>
      <div className="single__project_navigation">
        { posts.nodes.map((single) => (
          <Link href={`/portfolio/${single.slug}`} key={single.id}>
          <a className="navigation__item">
            <span className="navigation__title">{single.title}</span>
          <figure>
            <img
            src={single.featuredImage.node.sourceUrl}
            alt={single.featuredImage.node.altText }
            width={single.featuredImage.node.mediaDetails.width}
            height={single.featuredImage.node.mediaDetails.height}
            />
          </figure></a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_POSTS
  })
  const paths = data.posts.nodes.map((post) => {
    return {
      params: {
        slug: post.slug
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { data } = await client.query({
     query: GET_SINGLE_POST_WITH_BLOCKS,
     variables: { slug: params.slug  },
  });

  const { data: postsData } = await client.query({
    query: GET_ALL_POSTS,
});
  return {
     props: {
        post: data.post,
        posts: postsData.posts
     },
     revalidate: 300
  };
}