import { getArtsTheater } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const artsTheaters = await getArtsTheater();
  res.status(200).json(artsTheaters);
}
