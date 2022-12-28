<script setup>
import ButtonCircle from "./ButtonCircle.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkIcon from "./icons/LinkIcon.vue";

const projects = [
    {
        image: "quran.png",
        name: "Digital Qur'an",
        description: "Made with Vue JS 3 + Tailwind CSS",
        links : {
            demo: "https://ridoananda.github.io/quran-app/#/",
            github: 'https://github.com/ridoananda/quran-app'
        }
    },
    {
        image: "quotes-app.png",
        name: "Quotes App Design",
        description: "Made with Figma",
        links : {
            dribble: 'https://github.com/ridoananda/quran-app',
        }
    },
    {
        image: "prokoin.png",
        name: "Company Landing Page + System",
        description: "Made with Laravel + Inertia + Vue JS 3 + Tailwind CSS",
        links : {
            demo: 'sadf',
            // github: 'https://github.com/ridoananda/quran-app'
        }
    },
    {
        image: "yapim.png",
        name: "School Information Website",
        description: "Made with Laravel + Vue JS 3 + Bootstrap",
        links : {
            demo: null,
            github: 'https://github.com/ridoananda/yapim'
        }
    },
]
</script>
<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="flex flex-col" v-for="(project, i) in projects" :key="i">
            <img :src="`/images/projects/${project.image}`" class="w-full" />
            <div class="flex items-center justify-between mt-3 gap-x-3">
                <div>
                    <h5 class="font-head font-bold text-xl sm:text-2xl">{{ project.name }}</h5>
                    <p class="text-paragraph text-sm sm:text-base">{{ project.description }}</p>
                </div>
                <div class="flex items-center gap-x-3 text-gray-200">
                    <a :href="project.links.demo" v-if="project.links.demo">
                        <ButtonCircle size="sm">
                            <LinkIcon />
                        </ButtonCircle>
                    </a>
                    <a :href="project.links.github" v-if="project.links.github">
                        <ButtonCircle size="sm">
                            <GithubIcon />
                        </ButtonCircle>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
