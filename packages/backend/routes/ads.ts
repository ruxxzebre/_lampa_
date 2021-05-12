import express from 'express';
import { getAdList, getAd, createAd } from '../controllers/adController';

const router = express.Router();

router.get('/ad', getAdList);
router.get('/ad/:id', getAd);
router.post('/ad', createAd);

export default router;
