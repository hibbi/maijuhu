import Head from 'next/head'
import Layout from '../components/layout'
import { client } from '../src/apollo/client'
import {GET_ALL_PAGES } from '../src/queries/Pages/get-pages'
import { GET_SINGLE_PAGE_WITH_BLOCKS } from '../src/queries/Pages/single-page'
import Block from "../components/Block";
import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Page ( { page }) {
  const {title, blocks} = page
  return (
    <Layout>
      <Head>
        <title>{title} - {CMS_NAME}</title>
        <meta name="description" content={ page.slug == 'cv' ? "Here you can explore Maiju Hukkanen's Curriculum vitae" : "If you have any questions, please take a contact via email. Also feel free to follow my Instagram." }/>
        <meta name="robots" content="all" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CMS_URL + page.uri} />
        <meta property="og:image" content="../public/images/Maiju_Hukkanen_Metsastyspaikka.webp" />
      </Head>
      <div className="single__page">
        <h1 className="page__title">{title}</h1>
        <div className="page__content">
        {blocks
            ? blocks.map((block, index) => <Block block={block} key={index} />)
            : null}
        </div>
      </div>
    </Layout>
  )
}
export async function getStaticPaths() {
  const { data, error } = await client.query({
    query: GET_ALL_PAGES
  })
  const paths = data.pages.nodes.map((page) => {
    return {
      params: {
        slug: page.slug
      }
    }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}
export async function getStaticProps({params}) {
  const { data } = await client.query({
     query: GET_SINGLE_PAGE_WITH_BLOCKS,
     variables: { slug: params.slug  },
  });

  return {
     props: {
        page: data.page,
     },
     revalidate: 300
  };
}