import { getEventDates } from '../../../../../data';

export default async function handler(req, res) {
  const { artistId, eventId } = req.query;
  // TODO: Validate inputs

  const dates = await getEventDates(artistId, eventId);
  res.status(200).json(dates);
}
