<template>
    <div
      class="rounded-lg bg-white text-dark shadow-sm flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 ease-out h-full border-gray-200 border">
      <div class="flex flex-col space-y-1.5 p-6 px-3">
        <p class="prose max-w-full text-pretty font-sans text-sm text-neutral-500 dark:prose-invert">
          "{{ testimony }}"
        </p>
      </div>
      <div class="flex flex-col p-3 pt-0 gap-y-1">
        <StarIcon :count="starCount" />
        <h3 class="font-sans text-md text-neutral-600 font-medium">{{ author }}</h3>
        <span class="text-neutral-400 text-xs">{{ role }}</span>
      </div>
    </div>
</template>

<script setup lang="ts">
import StarIcon from './StarIcon.vue';

defineProps({
  testimony: {
    type: String,
    required: true
  },
  starCount: {
    type: Number,
    required: true,
    default: 1
  },
  author: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});
</script>

<style scoped></style>
