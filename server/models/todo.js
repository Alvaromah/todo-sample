import { fileStorage } from '../utils/fileStorage.js';

export const TodoModel = {
  async getAll() {
    const data = await fileStorage.readData();
    return data.todos;
  },

  async create(text) {
    const data = await fileStorage.readData();
    const newTodo = {
      id: data.nextId++,
      text,
      completed: false
    };
    data.todos.push(newTodo);
    await fileStorage.writeData(data);
    return newTodo;
  },

  async findById(id) {
    const data = await fileStorage.readData();
    return data.todos.find(todo => todo.id === id);
  },

  async toggle(id) {
    const data = await fileStorage.readData();
    const todo = data.todos.find(todo => todo.id === id);
    if (!todo) return null;
    todo.completed = !todo.completed;
    await fileStorage.writeData(data);
    return todo;
  },

  async delete(id) {
    const data = await fileStorage.readData();
    const index = data.todos.findIndex(todo => todo.id === id);
    if (index === -1) return false;
    data.todos.splice(index, 1);
    await fileStorage.writeData(data);
    return true;
  }
};