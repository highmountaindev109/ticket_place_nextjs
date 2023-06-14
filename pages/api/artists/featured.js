import { getFeaturedArtists } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const artists = await getFeaturedArtists();
  res.status(200).json(artists);
}
