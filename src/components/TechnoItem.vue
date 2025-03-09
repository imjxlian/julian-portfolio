<script setup lang="ts">

defineProps({
  techno: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-neutral-100 text-black hover:bg-neutral-100/80 px-1 py-0 text-xs">
    <span>{{ techno }}</span>
  </div>
</template>
