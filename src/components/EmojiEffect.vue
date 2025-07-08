<script setup lang="ts">
import { ref, watch } from "vue";

interface EmojiItem {
    emoji: string;
    left: string;
    startY: string;
    fontSize: string;
    animationDuration: string;
}


const props = defineProps<{ isActive: boolean }>();

const emojiList = "😄😋🥳🤩🤖👾👀🔥🌍☘️🌦️🥇🎯🎉🚀💻🎓📚🎈";
const emojiNumber = window.innerWidth > 768 ? 50 : 12;
const emojis = ref<EmojiItem[]>([]);
const isPlaying = ref(false);

function generateEmojis() {
    if (isPlaying.value) return;

    isPlaying.value = true;

    const newEmojis: EmojiItem[] = [];
    const emojiArray = Array.from(emojiList);
    const screenHeight = window.innerHeight;

    for (let i = 0; i < emojiNumber; i++) {
        const fontSize = Math.floor(Math.random() * 6) + 1; // de 1 à 6 em
        const animationDuration = (Math.random() * 4 + 2).toFixed(2); // de 2 à 6s

        newEmojis.push({
            emoji: emojiArray[Math.floor(Math.random() * emojiArray.length)],
            left: `${Math.random() * 100}%`,
            startY: `${screenHeight}px`,
            fontSize: `${fontSize}em`,
            animationDuration: `${animationDuration}s`,
        });
    }

    emojis.value = newEmojis;

    setTimeout(() => {
        emojis.value = [];
        isPlaying.value = false;
    }, 6000);
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
                fontSize: item.fontSize,
                animationDuration: item.animationDuration,
                left: `${parseFloat(item.left) - (parseFloat(item.fontSize) / 2)}%`,
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
