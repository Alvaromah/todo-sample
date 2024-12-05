import { TodoModel } from '../models/todo.js';

export const todoController = {
  async getAllTodos(req, res) {
    try {
      const todos = await TodoModel.getAll();
      res.json(todos);
    } catch (error) {
      next(error);
    }
  },

  async createTodo(req, res, next) {
    try {
      const { text } = req.body;
      
      if (!text || typeof text !== 'string' || text.trim().length === 0) {
        return res.status(400).json({ 
          error: 'Validation Error',
          message: 'Todo text is required and must be a non-empty string' 
        });
      }

      const newTodo = await TodoModel.create(text.trim());
      res.status(201).json(newTodo);
    } catch (error) {
      next(error);
    }
  },

  async toggleTodo(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ 
          error: 'Validation Error',
          message: 'Invalid todo ID' 
        });
      }

      const todo = await TodoModel.toggle(id);
      if (!todo) {
        return res.status(404).json({ 
          error: 'Not Found',
          message: 'Todo not found' 
        });
      }

      res.json(todo);
    } catch (error) {
      next(error);
    }
  },

  async deleteTodo(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ 
          error: 'Validation Error',
          message: 'Invalid todo ID' 
        });
      }

      const deleted = await TodoModel.delete(id);
      if (!deleted) {
        return res.status(404).json({ 
          error: 'Not Found',
          message: 'Todo not found' 
        });
      }

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
};