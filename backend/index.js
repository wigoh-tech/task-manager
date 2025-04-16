
import express from 'express';
import healthRoute from './router/health.js';
import tasksRoute from './router/task.js';
import cors from 'cors';
import fs from 'fs'


const app = express();
const PORT = 3000;

// Middleware
// CLIENT --> MIDDLEWARE --> SERVER
app.use(express.json());
app.use(cors());

// Routes
app.use('/health', healthRoute);
app.use('/tasks', tasksRoute);


// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});


// Root route
app.get('/', (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log("Example app listening on port http://localhost:" + PORT);
});
