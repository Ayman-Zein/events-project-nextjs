import React from 'react';
import Head from 'next/head';

import { getFeaturedEvents } from '../helpers/api-util';
import EventList from './../components/events/EventList';

function HomePage({ featuredEvents }) {
  return (
    <>
      <Head>
        <title>next events</title>
        <meta name='description' content='find alot of events' />
      </Head>
      <EventList events={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents)
  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
