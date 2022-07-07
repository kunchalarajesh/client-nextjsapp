import '../styles/globals.css';
import Navbar from './Navbar';
import '../public/css/styles.css';
import '../public/css/responsive.css';
import Script from 'next/script';
import Head from 'next/head';
 

function MyApp({ Component, pageProps }) {
  return <>
  <Head>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
  </Head>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp
