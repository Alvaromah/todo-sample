<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TodoItem from './components/TodoItem.vue';
import TodoInput from './components/TodoInput.vue';
import { todoService } from './services/todoService';
import type { Todo } from './types/todo';

const todos = ref<Todo[]>([]);

const fetchTodos = async () => {
  todos.value = await todoService.getAllTodos();
};

const addTodo = async (text: string) => {
  await todoService.createTodo(text);
  await fetchTodos();
};

const toggleTodo = async (id: number) => {
  await todoService.toggleTodo(id);
  await fetchTodos();
};

const deleteTodo = async (id: number) => {
  await todoService.deleteTodo(id);
  await fetchTodos();
};

onMounted(fetchTodos);
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-2xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
        Todo App
      </h1>
      <div class="bg-white rounded-lg shadow-md">
        <TodoInput @add="addTodo" />
        <div class="divide-y divide-gray-200">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            :onToggle="toggleTodo"
            :onDelete="deleteTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>