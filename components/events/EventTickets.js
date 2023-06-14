import { useState } from 'react';
import { useQuery } from 'react-query';
import Select from 'react-select';
import { getTickets } from '../../utils/db';
import EventTicket from './EventTicket';

const numberOfTickets = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
];
const zones = [
  { value: 'BRRR', label: 'BARRERA SOMBRA' },
  { value: 'TND1', label: '1ER TENDIDO SOMBRA' },
  { value: 'TND2', label: '2DO TENDIDO SOMBRA' },
  { value: 'GNRL', label: 'GENERAL SOMBRA' },
  { value: 'TNDA', label: 'T. ALTO' },
];

export default function EventTickets(props) {
  const { event } = props;
  const [ticketsCnt, setTicketsCnt] = useState(2);
  const [zone, setZone] = useState();
  const [priceRange] = useState(event.priceRange);

  const { data, isLoading, isError } = useQuery(['tickets', zone], () => {
    return getTickets(event, ticketsCnt, zone, priceRange);
  });

  if (isLoading) return <div>React Skelleton should be here</div>;
  if (isError) return <div>Error component should be here</div>;

  return (
    <div>
      <h2>Event Tickets</h2>
      <Select
        options={numberOfTickets}
        value={numberOfTickets[ticketsCnt - 1]}
        onChange={(newVal) => setTicketsCnt(newVal.value)}
      />
      <Select options={zones} onChange={(newVal) => setZone(newVal.value)} />
      <div>
        {data &&
          data.map((ticket, idx) => <EventTicket key={idx} ticket={ticket} />)}
      </div>
    </div>
  );
}
