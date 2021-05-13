import { Request, Response } from 'express';
import { Ad, IAd, isAd, validateAds } from '../models/ads';

export const getAd = async (req: Request, res: Response) => {
  const id: number | null = parseInt((req.params.id as string), 10) || null;
  if (!id) return res.status(400).send({ error: 'Invalid ID' });
  const doc = await Ad.getOne(id);
  if (!id || !doc) return res.status(400).send({ error: 'Doc with such ID is not found.' });
  return res.send(doc);
};

export const getAdList = async (req: Request, res: Response) => {
  const page: number = parseInt((req.query.page as string), 10) || 0;
  const limit: number = parseInt((req.query.limit as string), 10) || 10;
  const ads = await Ad.getList(page, limit);
  return res.send(ads);
};

export const createAd = async (req: Request, res: Response) => {
    const doc: IAd | any = req.body.ad;
    const error = validateAds(doc).error;
    if (error) return res.status(400).send({ error });
    if (!isAd(doc)) return res.status(400).send('Invalid ad passed.');
    const created = await Ad.createOne(doc);
    return res.send(created ? 'success' : 'error');
};
