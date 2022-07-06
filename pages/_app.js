import '../styles/globals.css';
import Navbar from './Navbar';
import '../public/css/styles.css';
import '../public/css/responsive.css';
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Script src="js/jquery-3.6.0.min.js"></Script>
    <Script src="slick/slick.min.js"></Script>
    <Script src="js/main.js"></Script>
  </>
}

export default MyApp
