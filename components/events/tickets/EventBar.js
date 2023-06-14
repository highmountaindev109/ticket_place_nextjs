import Image from 'next/image';
import Button from '../ui/Button3';
import classes from './EventBar.module.css';
export default function EventBar(props) {
  const { event, eventDate, artist } = props;
  if (!event) return null;
  return (
    <div className={classes.bar}>
      <Image
        className={classes.img}
        src={`/images/artists/${artist.id}/${artist.smallImage}`}
        width='250px'
        height='150px'
      />
      <div className={classes.det}>
        <div className={classes.hdr}>
          <span className={classes.tit}>{event.artist.name}</span> 
          <Button link={`../${event.id}`}>More Info</Button>
        </div>
        <span className={classes.txt}>{eventDate.date}</span>
        <span className={classes.txt}>
          {eventDate.venue}, {eventDate.venue}
        </span>
      </div>
    </div>
  );
}
