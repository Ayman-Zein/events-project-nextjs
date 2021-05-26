import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/Button';

function FilteredEventsPage() {
  const roter = useRouter();
  const filterValues = roter.query.slug;
  if (!filterValues) {
    return <p className="center">loading...</p>
  }
  const [yearNum, monthNum] = filterValues;

  if (+yearNum > 2030 || +yearNum < 2020 || +monthNum > 12 || +monthNum < 1) {
    return (
      <>
        <ErrorAlert><p className="center">wrong filtered crateria</p></ErrorAlert>
        <div className="center">
          <Button link='/events'>Explore Events</Button>
        </div>
      </>
    )
  }
  const filteredEvents = getFilteredEvents({ year: +yearNum, month: +monthNum });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No data found</ErrorAlert>
        <div className="center">
          <Button link='/events'>Explore Events</Button>
        </div>
      </>
    )

  }

  const date = new Date(yearNum, monthNum)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>

  );
}

export default FilteredEventsPage;
