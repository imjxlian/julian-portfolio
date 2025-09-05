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

const emojiList = "😄😋🥳🤩🤖👾👀🔥🌍☘️🥇🎯🎉🚀💻🎓📚🎈";
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
    opacity: 1;
    transform: translateX(-50%) translateY(100vh);
    animation: fiesta ease-in-out;
    animation-fill-mode: forwards;
    will-change: transform, opacity;
}

@keyframes fiesta {
    0% {
        transform: translateY(100vh) translateX(0%);
        opacity: 1;
    }
    10% {
        transform: translateY(90vh) translateX(-10%);
    }
    20% {
        transform: translateY(80vh) translateX(10%);
    }
    30% {
        transform: translateY(70vh) translateX(-10%);
    }
    40% {
        transform: translateY(60vh) translateX(10%);
    }
    50% {
        transform: translateY(50vh) translateX(-10%);
    }
    60% {
        transform: translateY(40vh) translateX(10%);
    }
    70% {
        transform: translateY(30vh) translateX(-10%);
    }
    80% {
        transform: translateY(20vh) translateX(10%);
        opacity: 0.5;
    }
    90% {
        transform: translateY(10vh) translateX(-10%);
        opacity: 0;
    }
    100% {
        transform: translateY(0vh) translateX(0%);
        opacity: 0;
    }
}

</style>
