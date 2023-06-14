import { getBrowseCategory } from '../../../data';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  const browseCategories = await getBrowseCategory();
  res.status(200).json(browseCategories);
}
