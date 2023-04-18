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
            <a href="mailto:ridoananda123@gmail.com" class="font-bold">ridoananda123@gmail.com</a>
        </p>
        <div class="flex items-center justify-center gap-x-4 mt-2">
            <!-- Whatsapp -->
            <a :href="AppConfig.whatsapp" target="_blank">
                <ButtonCircle>
                    <WhatsappIcon />
                </ButtonCircle>
            </a>
            <!-- Instagram -->
            <a :href="AppConfig.instagram" target="_blank">
                <ButtonCircle>
                    <InstagramIcon />
                </ButtonCircle>
            </a>
            <!-- Github -->
            <a :href="AppConfig.github" target="_blank">
                <ButtonCircle>
                    <GithubIcon />
                </ButtonCircle>
            </a>
            <!-- Linked In -->
            <a :href="AppConfig.linkedIn" target="_blank">
                <ButtonCircle>
                    <LinkedInIcon />
                </ButtonCircle>
            </a>
        </div>
        <div class="absolute bottom-4 font-bold">Design with ❤ Figma by Rido Ananda</div>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform rotate-12 top-10 md:top-14 right-4 md:right-24 lg:right-44"
        >
            <img src="/images/figma.png" alt="Figma" />
        </BoxDecoration>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform rotate-12 bottom-14 left-4 md:left-24 lg:left-44"
        >
            <img src="/images/vue.png" alt="Figma" />
        </BoxDecoration>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform -rotate-12 top-10 md:top-14 left-4 md:left-24 lg:left-44"
        >
            <img src="/images/laravel.png" alt="Figma" />
        </BoxDecoration>
        <BoxDecoration
            class="absolute opacity-40 shadow-none transform -rotate-12 bottom-14 right-4 md:right-24 lg:right-44"
        >
            <img src="/images/vscode.png" alt="Figma" />
        </BoxDecoration>
    </div>
</template>
