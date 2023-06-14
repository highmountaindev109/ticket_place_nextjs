import { getTopSelling } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const topSellings = await getTopSelling();
  res.status(200).json(topSellings);
}
