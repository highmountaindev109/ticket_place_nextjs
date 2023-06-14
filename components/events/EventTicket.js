import classes from './EventTicket.module.css';

export default function EventTicket(props) {
  const { ticket } = props;

  return (
    <div className={classes.cont}>
      <div>
        Zone: {ticket.zone.name}, Row: {ticket.row}
      </div>
      <div>
        {ticket.price.value.toLocaleString('en-US', {
          style: 'currency',
          currency: ticket.price.currency,
        })}{' '}
        ea
      </div>
    </div>
  );
}
