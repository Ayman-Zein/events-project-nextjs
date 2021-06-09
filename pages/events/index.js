import React from 'react';
import Head from 'next/head'
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../helpers/api-util';
import { useRouter } from 'next/router';

function EventsPage({ events }) {
  const router = useRouter();
  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return (
    <>
      <Head>
        <title>all events</title>
        <meta name='description' content='find alot of events' />
      </Head>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList events={events} />
    </>

  );
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events
    },
    revalidate: 60
  }

}
export default EventsPage;
