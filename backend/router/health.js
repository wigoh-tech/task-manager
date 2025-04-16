import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Server is healthy' });
});

export default router;
