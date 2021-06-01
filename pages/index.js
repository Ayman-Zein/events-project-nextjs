import React from 'react';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from './../components/events/EventList';

function HomePage({ featuredEvents }) {
  // if (!featuredEvents) {
  //   return <p>no data found</p>
  // }
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents)
  return {
    props: {
      featuredEvents: featuredEvents
    }
  }
}

export default HomePage;
