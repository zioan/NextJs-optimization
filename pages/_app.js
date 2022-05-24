import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* global header for all pages */}
      {/* all headers from pages/components are merged by NextJS */}
      {/* but will overwrite to the last attribute found */}
      {/* eg. from a specific page if the same attribute is found */}
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJs Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
