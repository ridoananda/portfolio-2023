<script setup>
import ButtonCircle from "./ButtonCircle.vue";
import DribbbleIcon from "./icons/DribbbleIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkIcon from "./icons/LinkIcon.vue";

const projects = [
    {
        image: "gaming.png",
        name: "Game Company Landing Page",
        description: "Made with Vue JS 3 + Tailwind CSS Design with Figma",
        links: {
            demo: "https://gaming.ridoananda.my.id",
            github: "https://github.com/ridoananda/gaming-production",
        },
    },
    {
        image: "prokoin.png",
        name: "Company Landing Page + System",
        description: "Made with Laravel + Inertia + Vue JS 3 + Tailwind CSS",
        links: {
            demo: "https://prokoin.sentratanisejahtera.com",
        },
    },
    {
        image: "quotes-app.png",
        name: "Quotes App Design",
        description: "Made with Figma",
        links: {
            dribbble: "https://dribbble.com/shots/20243742-Quotes-App-Design",
        },
    },
    {
        image: "yapim.png",
        name: "School Information Website",
        description: "Made with Laravel + Vue JS 2 + Bootstrap",
        links: {
            demo: "https://yapim.ridoananda.com",
        },
    },
    {
        image: "quran.png",
        name: "Digital Qur'an",
        description: "Made with Vue JS 3 + Tailwind CSS",
        links: {
            demo: "https://ridoananda.github.io/quran-app/#/",
            github: "https://github.com/ridoananda/quran-app",
        },
    },
];
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="flex flex-col gap-y-3" v-for="(project, i) in projects" :key="i">
            <router-link :to="'/project/' + (project.links.detail || '')">
                <img
                    :src="`images/projects/${project.image}`"
                    class="w-full transform scale-100 object-cover object-top hover:object-contain hover:scale-105 transition"
                />
            </router-link>
            <div>
                <h5 class="font-head font-bold text-xl sm:text-2xl">{{ project.name }}</h5>
                <p class="text-paragraph text-sm sm:text-base">{{ project.description }}</p>
            </div>
            <div class="flex items-center justify-between gap-x-3">
                <div class="flex items-center gap-x-3 text-gray-200">
                    <a :href="project.links.demo" v-if="project.links.demo" target="_blank">
                        <ButtonCircle size="sm" title="Demo">
                            <LinkIcon />
                        </ButtonCircle>
                    </a>
                    <a :href="project.links.github" v-if="project.links.github" target="_blank">
                        <ButtonCircle size="sm" title="Github">
                            <GithubIcon />
                        </ButtonCircle>
                    </a>
                    <a :href="project.links.dribbble" v-if="project.links.dribbble" target="_blank">
                        <ButtonCircle size="sm" title="Dribbble">
                            <DribbbleIcon />
                        </ButtonCircle>
                    </a>
                </div>
                <router-link
                    :to="project.links.detail ? '/project/' + project.links.detail : '#'"
                    class="rounded-full border border-border bg-secondary flex items-center justify-center hover:bg-zinc-700 hover:border-zinc-500 hover:shadow-md py-1 px-3 text-gray-200 text-sm md:text-base gap-x-1.5"
                >
                    <span class="font-medium">Detail</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 12H19"
                            stroke="#E2E8F0"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M15 16L19 12"
                            stroke="#E2E8F0"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M15 8L19 12"
                            stroke="#E2E8F0"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>
