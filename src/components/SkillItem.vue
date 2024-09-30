<script setup lang="ts">

defineProps({
  skill: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div
    class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-950 text-white hover:bg-slate-950/80">
    <span>{{ skill }}</span>
  </div>
</template>

<style scoped>
/* Add any specific styles for ExperienceItem here */
</style>
