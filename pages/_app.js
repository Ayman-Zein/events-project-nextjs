import { useState, useEffect } from 'react';
import Router from 'next/router';

import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
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
        <h1 className='center'>Loading...</h1>
      ) : (
        <Layout><Component {...pageProps} /></Layout>
      )}
    </>
  )
}

export default MyApp
