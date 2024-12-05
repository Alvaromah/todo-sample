import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { todoRoutes } from './routes/todoRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors(config.cors));
app.use(express.json());

// Routes
app.use('/api', todoRoutes);

// Error handling
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: 'The requested resource was not found'
  });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});