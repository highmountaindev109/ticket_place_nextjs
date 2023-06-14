import { getAmericanExpress } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const americanExpresses = await getAmericanExpress();
  res.status(200).json(americanExpresses);
}
