import axios from 'axios';
import type { Todo } from '../types/todo';

const API_URL = 'http://localhost:3000/api';

export const todoService = {
  async getAllTodos(): Promise<Todo[]> {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  },

  async createTodo(text: string): Promise<Todo> {
    const response = await axios.post(`${API_URL}/todos`, { text });
    return response.data;
  },

  async toggleTodo(id: number): Promise<Todo> {
    const response = await axios.patch(`${API_URL}/todos/${id}/toggle`);
    return response.data;
  },

  async deleteTodo(id: number): Promise<void> {
    await axios.delete(`${API_URL}/todos/${id}`);
  }
};