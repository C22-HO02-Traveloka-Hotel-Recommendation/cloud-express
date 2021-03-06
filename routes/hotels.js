import express from 'express';

import { index, show, hotelReview, indexReviews } from '../handlers/hotels.js';

const router = express.Router();

router.get('/', index);
router.get('/reviews', indexReviews);
router.get('/:id', show);
router.get('/:id/reviews', hotelReview);

export default router;