<script setup>
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();
</script>
<template>
    <div
        class="hidden lg:flex items-center justify-between px-10 py-2 h-16 sticky top-0 bg-background z-50 transition-colors duration-300"
        :class="{ 'bg-secondary/95 backdrop-blur-sm': y >= 55 }"
    >
        <div class="flex items-center gap-x-3">
            <img src="/images/logo.png" class="w-10 h-10" />
            <h1 class="font-head text-lg font-extrabold">Rido Ananda</h1>
        </div>
        <div class="flex items-center gap-x-20 font-head">
            <a class="font-bold">Project</a>
            <a class="font-bold">Blog</a>
            <a class="font-bold">Contact</a>
        </div>
        <a
            href="mailto:ridoananda123@gmail.com"
            class="font-bold bg-primary rounded-xl py-1.5 px-4 flex items-center gap-x-2"
        >
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.6665 16.3333L24.4998 3.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M24.4998 3.5L16.9165 24.5C16.8653 24.6117 16.7831 24.7064 16.6797 24.7727C16.5763 24.8391 16.456 24.8743 16.3332 24.8743C16.2103 24.8743 16.09 24.8391 15.9866 24.7727C15.8832 24.7064 15.801 24.6117 15.7498 24.5L11.6665 16.3333L3.49984 12.25C3.38814 12.1988 3.29349 12.1166 3.22713 12.0132C3.16076 11.9098 3.12549 11.7895 3.12549 11.6667C3.12549 11.5438 3.16076 11.4235 3.22713 11.3201C3.29349 11.2167 3.38814 11.1345 3.49984 11.0833L24.4998 3.5Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <span>Hire Me</span>
        </a>
    </div>
</template>
