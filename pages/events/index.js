import React from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }
  return (
    <>
      <EventsSearch onSearch={onSearchHandler} />
      <EventList events={events} />
    </>

  );
}

export default EventsPage;
