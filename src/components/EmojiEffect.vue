<script setup lang="ts">
import { ref, watch } from "vue";

interface EmojiItem {
    emoji: string;
    left: string;
    startY: string;
}

const props = defineProps<{ isActive: boolean }>();

const emojiList = "😄😋🥳👋🏻🤩🤖👾👀🔥🌍☘️🌦️🥇🎯🎉🚀💻🎓📚🎈";
const emojiNumber = 200;
const emojis = ref<EmojiItem[]>([]);
const isPlaying = ref(false);

function generateEmojis() {
    if (isPlaying.value) return;

    isPlaying.value = true;

    const newEmojis: EmojiItem[] = [];
    const emojiArray = Array.from(emojiList);
    const screenHeight = window.innerHeight;

    for (let i = 0; i < emojiNumber; i++) {
        newEmojis.push({
            emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
            left: `${Math.random() * 100}%`,
            startY: `${screenHeight}px`,
        });
    }

    emojis.value = newEmojis;

    // Réinitialiser l’animation après 6s
    setTimeout(() => {
        emojis.value = [];
        isPlaying.value = false;
    }, 6000);
}

function getFontSize() {
    return `${Math.floor(Math.random() * 6) + 1}em`;
}

function getAnimationDuration() {
    return `${(Math.random() * 4 + 2).toFixed(2)}s`;
}

watch(
    () => props.isActive,
    (newVal) => {
        if (newVal) generateEmojis();
    }
);
</script>

<template>
    <div v-if="isPlaying" class="emoji-wrapper">
        <div
            v-for="(item, index) in emojis"
            :key="index"
            class="emoji-container"
            :style="{
                fontSize: getFontSize(),
                animationDuration: getAnimationDuration(),
                left: item.left,
                transform: `translateY(${item.startY})`,
            }"
        >
            {{ item.emoji }}
        </div>
    </div>
</template>

<style scoped>
.emoji-wrapper {
    position: fixed;
    height: 100vh;
    width: 100%;
    pointer-events: none;
    overflow: hidden;
}

.emoji-container {
    position: absolute;
    top: 100vh;
    opacity: 1;
    transform: translateX(-50%);
    animation: fiesta ease-in-out;
    animation-fill-mode: forwards;
}

@keyframes fiesta {
    0% {
        top: 100vh;
        opacity: 1;
    }

    80% {
        opacity: 0.5;
    }

    90% {
        opacity: 0;
    }

    100% {
        top: 0;
        opacity: 0;
    }

    /* Mouvement latéral en zigzag */
    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translateX(-10%);
    }

    20%,
    40%,
    60%,
    80% {
        transform: translateX(10%);
    }
}
</style>
