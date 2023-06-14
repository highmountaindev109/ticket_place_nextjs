import { getFamily } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const familes = await getFamily();
  res.status(200).json(familes);
}
