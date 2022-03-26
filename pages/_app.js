/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 09:30:35
 */
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../src/apollo/'
import 'react-image-lightbox/style.css';
import '../styles/sass/global.scss'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={ apolloClient }>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}