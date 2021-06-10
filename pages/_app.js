import { useState, useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Lottie from 'react-lottie';
import * as animationData from '../components/icons/loading-icon.json'

import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ backgroundColor: 'black', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='center'>
            <Lottie options={defaultOptions}
              height={400}
              width={400} />
          </div>
        </div>
      ) : (
        <Layout>
          <Head>
            <title>Next events</title>
            <meta name='description' content='Events' />
          </Head>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
