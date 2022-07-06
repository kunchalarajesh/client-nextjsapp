import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React from 'react';
import Navbar from './Navbar';
import Section from './Section';
import Script from 'next/script';
import About from './About';
import Expertise from './Expertise';
import Works from './Works';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no" />
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <link rel="stylesheet" href="slick/slick.css" />
        <link rel="stylesheet" href="slick/slick-theme.css" />
        <link rel="stylesheet" href="css/styles.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <title>Creative Agency</title>
      </Head>
      <Navbar />
      <Section />
      <About />
      <Expertise />
      <Works />
      <Testimonials />
      <Contact />
      <Footer /> 
    <Script src="js/jquery-3.6.0.min.js"></Script>
    <Script src="slick/slick.min.js"></Script>
    <Script src="js/main.js"></Script>
    </div>
  )
}
 
export default Home;