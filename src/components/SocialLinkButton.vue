<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <div
      class="items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-950 text-white hover:bg-slate-950/80 flex gap-2 px-2 py-1 text-[10px]">
      {{ text }}
    </div>
  </a>
</template>

<script setup lang="ts">

defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
});
</script>
