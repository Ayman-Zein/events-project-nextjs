import { useRouter } from 'next/router'
import EventContent from '../../components/events/event-details/event-content';
import EventLogistics from '../../components/events/event-details/event-logistics';
import EventSummary from '../../components/events/event-details/event-summary';
import { getEventById } from '../../dummy-data';

function EventDetailsPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);
  const { image, title, date, location, description } = event;

  if (!event) {
    return <p>event not found</p>
  }



  return (
    <>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent><p>{description}</p></EventContent>
    </>

  );
}

export default EventDetailsPage;
