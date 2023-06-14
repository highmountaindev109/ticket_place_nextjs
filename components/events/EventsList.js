import classes from './EventsList.module.css';
import Link from 'next/link';

function EventDate(props) {
  const { eventDate } = props;

  return (
    <div className={classes.row}>
      <span>{eventDate.date}</span>
      <div>
        <h2>{eventDate.venue}</h2>
        <h3>{eventDate.city}</h3>
      </div>
      <Link
        href={`/events/${eventDate.artistId}/${
          eventDate.eventId
        }/${eventDate.date.replace(' ', '_').toLowerCase()}`}
        className={classes.button}
      >
        See Tickets
      </Link>
    </div>
  );
}

export default function EventsList(props) {
  const { eventDates } = props;

  const noEvents = !eventDates || eventDates.length == 0;

  return (
    <div className={classes.cont}>
      {noEvents ? (
        <h2>No events found</h2>
      ) : (
        <>
          <div>
            <h2>Here be filters...</h2>
          </div>
          <div className={classes.list}>
            {eventDates.map((obj, i) => (
              <EventDate key={i} eventDate={obj} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
