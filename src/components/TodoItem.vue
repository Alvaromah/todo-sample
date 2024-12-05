<script setup lang="ts">
import { TrashIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';
import type { Todo } from '../types/todo';

defineProps<{
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}>();
</script>

<template>
  <div class="flex items-center justify-between p-4 border-b">
    <div class="flex items-center gap-3">
      <button @click="onToggle(todo.id)" class="focus:outline-none">
        <CheckCircleIcon
          class="w-6 h-6"
          :class="todo.completed ? 'text-green-500' : 'text-gray-400'"
        />
      </button>
      <span :class="{ 'line-through text-gray-500': todo.completed }">
        {{ todo.text }}
      </span>
    </div>
    <button
      @click="onDelete(todo.id)"
      class="text-red-500 hover:text-red-700 focus:outline-none"
    >
      <TrashIcon class="w-5 h-5" />
    </button>
  </div>
</template>