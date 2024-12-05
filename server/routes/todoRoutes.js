import express from 'express';
import { todoController } from '../controllers/todoController.js';

const router = express.Router();

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);
router.patch('/todos/:id/toggle', todoController.toggleTodo);
router.delete('/todos/:id', todoController.deleteTodo);

export const todoRoutes = router;