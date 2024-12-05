<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'add', text: string): void;
}>();

const newTodo = ref('');

const handleSubmit = () => {
  if (newTodo.value.trim()) {
    emit('add', newTodo.value.trim());
    newTodo.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mb-6">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Add a new todo..."
      class="w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
    />
  </form>
</template>