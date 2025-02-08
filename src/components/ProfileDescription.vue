<script setup>
import BoxDecoration from "./BoxDecoration.vue";
import ButtonCircle from "./ButtonCircle.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import TiktokIcon from "./icons/TiktokIcon.vue";
import YoutubeIcon from "./icons/YoutubeIcon.vue";
import AppConfig from "../AppConfig";
</script>

<template>
    <div class="grid grid-cols-12">
        <div class="justify-items-center col-span-10 col-start-2 lg:col-start-2">
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-y-0 gap-x-4">
                <div class="col-span-1 relative w-10/12 sm:w-6/12 md:w-4/12 lg:w-6/12 mx-auto max-w-xs">
                    <img v-if="AppConfig.images.profile2" :src="AppConfig.images.profile2" class="" />
                    <BoxDecoration class="absolute top-4 left-5" v-if="AppConfig.images.iconSkill1">
                        <img :src="AppConfig.images.iconSkill1" alt="Figma" />
                    </BoxDecoration>
                    <BoxDecoration class="absolute top-36 left-2" v-if="AppConfig.images.iconSkill2">
                        <img :src="AppConfig.images.iconSkill2" alt="Vue" />
                    </BoxDecoration>
                    <BoxDecoration class="absolute top-8 right-6" v-if="AppConfig.images.iconSkill3">
                        <img :src="AppConfig.images.iconSkill3" alt="Laravel" />
                    </BoxDecoration>
                    <BoxDecoration class="absolute top-[10.5rem] right-2" v-if="AppConfig.images.iconSkill4">
                        <img :src="AppConfig.images.iconSkill4" alt="VSCode" />
                    </BoxDecoration>
                </div>

                <div class="col-span-1">
                    <p v-html="AppConfig.profileDescription.title" class="font-head font-black text-2xl lg:text-3xl"></p>
                    <p v-html="AppConfig.profileDescription.description" class="text-paragraph leading-7 mt-3 mb-5 max-w-lg"> </p>
                    <div class="flex flex-col sm:flex-row sm:items-center gap-x-3 text-paragraph">
                        <div class="flex items-center gap-x-3 mb-2 sm:mb-0">
                            <p>Visit My Social Media</p>
                            <svg
                                class="hidden sm:block"
                                width="30"
                                height="30"
                                viewBox="0 0 50 50"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.4167 25H39.5834"
                                    stroke="#D1D5DB"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M31.25 33.3333L39.5833 25"
                                    stroke="#D1D5DB"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M31.25 16.6665L39.5833 24.9998"
                                    stroke="#D1D5DB"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        <div class="flex items-center gap-x-3">
                            <a v-if="AppConfig.tiktok" :href="AppConfig.tiktok" target="_blank">
                                <ButtonCircle size="sm">
                                    <TiktokIcon />
                                </ButtonCircle>
                            </a>
                            <a v-if="AppConfig.instagram" :href="AppConfig.instagram" target="_blank">
                                <ButtonCircle size="sm">
                                    <InstagramIcon />
                                </ButtonCircle>
                            </a>
                            <a v-if="AppConfig.youtube" :href="AppConfig.youtube" target="_blank">
                                <ButtonCircle size="sm">
                                    <YoutubeIcon />
                                </ButtonCircle>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
