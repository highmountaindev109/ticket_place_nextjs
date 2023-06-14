import { getDiscoverMoreEvent } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const discoverMoreEvents = await getDiscoverMoreEvent();
  res.status(200).json(discoverMoreEvents);
}
