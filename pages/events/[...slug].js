import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/ui/error-alert';
import Button from '../../components/ui/Button';

function FilteredEventsPage(props) {
  console.log(props)

  if (props.hasError) {
    return (
      <>
        <ErrorAlert><p className="center">wrong filtered crateria</p></ErrorAlert>
        <div className="center">
          <Button link='/events'>Explore Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(props.date.year, props.date.month);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={props.filteredEvents} />
    </>

  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterValues = params.slug;

  const [yearNum, monthNum] = filterValues;

  if (+yearNum > 2030 || +yearNum < 2020 || +monthNum > 12 || +monthNum < 1) {
    return {
      haeError: true
      // notFound: true,
      // redirect:{
      //   destination:'/error'
      // }
    }
  }
  const filteredEvents = await getFilteredEvents({ year: +yearNum, month: +monthNum });
  return {
    props: {
      filteredEvents: filteredEvents,
      date: { year: +yearNum, month: +monthNum }
    }
  }
}

export default FilteredEventsPage;
