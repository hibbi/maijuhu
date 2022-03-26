/**
 * @Author: Liha Leena
 * @Date:   2022-02-28 10:32:27
 * @Last Modified by:   Liha Leena
 * @Last Modified time: 2022-03-08 14:03:30
 */
import Head from 'next/head'
import Header from './header'

export default function Layout({ children }) {
  return (
    <>
    <Head>
    <link
            rel="preload"
            href="/fonts/Hammersmith/HammersmithOne-Regular.woff2"
            as="font"
            crossOrigin=""
          />
    </Head>
      <Header />
      <main className="container">{children}</main>
    </>
  );
}