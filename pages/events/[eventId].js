import Head from 'next/head';

import EventContent from '../../components/events/event-details/event-content';
import EventLogistics from '../../components/events/event-details/event-logistics';
import EventSummary from '../../components/events/event-details/event-summary';
import { getEventById, getAllEvents } from '../../helpers/api-util';

function EventDetailsPage({ event }) {

  if (!event) {
    return (<div className='center'>
      <p>Loading ......</p>
    </div>)
  }

  const { image, title, date, location, description } = event;


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent><p>{description}</p></EventContent>
    </>

  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId)
  return {
    props: {
      event: event
    },
    revalidate: 30
  }

}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map(event => ({ params: { eventId: event.id } }))
  return {
    paths: paths,
    fallback: true
  }

}
export default EventDetailsPage;
