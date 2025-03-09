<script setup lang="ts">
defineProps({
    href: {
        type: String,
        required: true,
    },
    logoSrc: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false,
        default: "",
    },
});
</script>

<template>
    <a class="block cursor-pointer" :href="href">
        <div
            class="rounded-lg bg-card text-card-foreground border border-card-border shadow-sm flex py-2 bg-white"
        >
            <div class="flex p-2 pl-6">
                <span
                    class="relative flex shrink-0 overflow-hidden rounded-full size-12 border m-auto bg-muted-background dark:bg-foreground"
                >
                    <img
                        :class="[
                            'aspect-square h-full w-full p-3',
                            { 'rounded-full': !role },
                        ]"
                        :alt="companyName"
                        :src="logoSrc"
                    />
                </span>
            </div>
            <div class="flex-grow items-center flex-col group">
                <div class="flex flex-col space-y-1.5 p-6">
                    <div
                        class="flex items-center justify-between gap-x-2 text-base"
                    >
                        <h3
                            class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm relative"
                        >
                            {{ companyName }}
                        </h3>
                        <div
                            class="text-xs sm:text-sm tabular-nums text-neutral-500 text-right"
                        >
                            {{ period }}
                        </div>
                    </div>
                    <div v-if="role" class="font-sans text-xs">{{ role }}</div>
                </div>
            </div>
        </div>
    </a>
</template>
