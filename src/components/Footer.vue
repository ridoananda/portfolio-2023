<script setup>
import AppConfig from "../AppConfig";
import BoxDecoration from "./BoxDecoration.vue";
import ButtonCircle from "./ButtonCircle.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";
import WhatsappIcon from "./icons/WhatsappIcon.vue";
</script>
<template>
    <div class="bg-[#121212] h-80 pt-10 md:pt-14 flex flex-col items-center text-center gap-y-5 relative">
        <h1 class="font-black text-3xl font-head">Get in touch</h1>
        <p class="text-gray-200">
            For business inquiry please send email to
            <a :href="`mailto:${AppConfig.email}`" class="font-bold">{{ AppConfig.email }}</a>
        </p>
        <div class="flex items-center justify-center gap-x-4 mt-2">
            <!-- Whatsapp -->
            <a v-if="AppConfig.whatsapp" :href="AppConfig.whatsapp" target="_blank">
                <ButtonCircle>
                    <WhatsappIcon />
                </ButtonCircle>
            </a>
            <!-- Instagram -->
            <a v-if="AppConfig.instagram" :href="AppConfig.instagram" target="_blank">
                <ButtonCircle>
                    <InstagramIcon />
                </ButtonCircle>
            </a>
            <!-- Github -->
            <a v-if="AppConfig.github" :href="AppConfig.github" target="_blank">
                <ButtonCircle>
                    <GithubIcon />
                </ButtonCircle>
            </a>
            <!-- Linked In -->
            <a v-if="AppConfig.linkedIn" :href="AppConfig.linkedIn" target="_blank">
                <ButtonCircle>
                    <LinkedInIcon />
                </ButtonCircle>
            </a>
        </div>
        <div class="absolute bottom-4 font-bold">Design with ❤ Figma by Rido Ananda</div>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform rotate-12 top-10 md:top-14 right-4 md:right-24 lg:right-44"
            v-if="AppConfig.images.iconSkill1"
        >
            <img :src="AppConfig.images.iconSkill1" />
        </BoxDecoration>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform rotate-12 bottom-14 left-4 md:left-24 lg:left-44"
            v-if="AppConfig.images.iconSkill2"
        >
            <img :src="AppConfig.images.iconSkill2" />
        </BoxDecoration>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform -rotate-12 top-10 md:top-14 left-4 md:left-24 lg:left-44"
            v-if="AppConfig.images.iconSkill3"
        >
            <img :src="AppConfig.images.iconSkill3" />
        </BoxDecoration>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform -rotate-12 bottom-14 right-4 md:right-24 lg:right-44"
            v-if="AppConfig.images.iconSkill4"
        >
            <img :src="AppConfig.images.iconSkill4" />
        </BoxDecoration>
    </div>
</template>
