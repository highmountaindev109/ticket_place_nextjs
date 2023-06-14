import { getSport } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const sports = await getSport();
  res.status(200).json(sports);
}
