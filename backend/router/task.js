import { Router } from 'express';
import fs from 'fs';

const router = Router();

router.get('/', (req, res) => {
  fs.readFile('./task.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read tasks' });
    }
    const tasks = JSON.parse(data);
    res.json(tasks);
  });
});

export default router;

