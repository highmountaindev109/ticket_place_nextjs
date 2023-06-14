import { getEvent, getEventDate, getArtist } from '../../../../../data';
import classes from './index.module.css';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import EventBar from '../../../../../components/events/tickets/EventBar';
import TicketSelector from '../../../../../components/events/tickets/TicketSelector';

export default function EventPage(props) {
  const { event, eventDate, artist } = props;
  return (
    <div className={classes.main}>
      <EventBar event={event} eventDate={eventDate} artist={artist} />
      <div className={classes.body}>
        <TicketSelector eventid={event.id} />
        <InnerImageZoom
          className={classes.zimg}
          src='/images/venues/PLAZA DE TOROS LAY OUT AF 2020-1.png'
          width={"66%"}
        />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { artistId, eventId, date } = ctx.query;
  const event = await getEvent(artistId, eventId);
  const eventDate = await getEventDate(artistId, eventId, date);
  const artist = await getArtist(artistId);
  return {
    props: { event, eventDate, artist },
  };
}
