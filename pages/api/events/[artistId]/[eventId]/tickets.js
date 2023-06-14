import { getTickets } from '../../../../../data';

export default async function handler(req, res) {
  const { artistId, eventId, numberOfTickets, zone, priceRange } = req.query;
  // TODO: Validate inputs

  const tickets = await getTickets(
    artistId,
    eventId,
    numberOfTickets,
    zone,
    priceRange && JSON.parse(priceRange)
  );
  res.status(200).json(tickets);
}
