import { getHeaderEvents } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const events = await getHeaderEvents();
  res.status(200).json(events);
}
