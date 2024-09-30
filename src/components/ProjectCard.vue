<!-- src/components/ProjectCard.vue -->
<template>
  <div
    class="rounded-lg bg-white text-dark border-gray-200 shadow-sm flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
    <a :href="projectHref">
      <img :src="imageSrc" :alt="imageAlt" class="full h-full" />
    </a>
    <div class="flex flex-col space-y-1.5 p-6 px-3">
      <h3 class="font-semibold tracking-tight mt-1 text-base">{{ title }}</h3>
      <time class="font-sans text-xs">{{ period }}</time>
      <p class="prose max-w-full text-pretty font-sans text-xs text-neutral-500 dark:prose-invert">{{ description }}</p>
    </div>
    <div class="p-6 pt-0 mt-auto flex flex-col px-2">
      <div class="mt-2 flex flex-wrap gap-1 gap-y-2">
        <TechnoItem v-for="tech in technologies" :key="tech" :techno="tech" />
      </div>
    </div>
    <div class="flex items-center p-6 pt-0 px-2 pb-2 gap-1">
      <SocialLinkButton v-for="link in socialLinks" :key="link.text" :href="link.href" :text="link.text"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import TechnoItem from './TechnoItem.vue';
import SocialLinkButton from './SocialLinkButton.vue';
import { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    required: true,
  },
  projectHref: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array as PropType<string[]>,
    required: true,
  },
  socialLinks: {
    type: Array as PropType<Array<{ href: string; text: string; }>>,
    required: true,
  },
});
</script>

<style scoped></style>
