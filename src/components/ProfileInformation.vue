<script setup>
import BoxDecoration from "./BoxDecoration.vue";
import Button from "./Button.vue";
import ButtonCircle from "./ButtonCircle.vue";
import WhatsappIcon from "./icons/WhatsappIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import LinkedInIcon from "./icons/LinkedInIcon.vue";
import AppConfig from "../AppConfig";

</script>
<template>
    <div class="grid grid-cols-12">
        <div class="justify-items-center col-span-10 col-start-2">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 lg:gap-y-0">
                <div>
                    <div class="font-head font-black text-2xl lg:text-3xl mb-3">Hi, I'm <span class="text-primary">Rido Ananda</span></div>
                    <div class="font-head font-black text-4xl lg:text-5xl">
                        Web <span class="text-primary">Developer</span> &
                        <div class="mt-3">UI/UX <span class="text-primary">Designer</span></div>
                    </div>
                    <p class="text-paragraph leading-7 mt-4 mb-7 max-w-md">
                        I’m from Indonesia and I’m a <span class="text-white font-medium">Content Creator</span>.
                        I’ve worked for a Malaysian company <span class="text-white font-medium">Ionsoft Digital</span> as a
                        Front end Vue developer for 1 year. I’ve been freelancing for the last 3 years and right now I am
                        looking forward to collaborate with you!
                    </p>
                    <div class="flex items-center gap-x-3">
                        <a href="mailto:ridoananda123@gmail.com" class="flex items-center gap-x-3">
                            <Button class="flex items-center gap-x-2">
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_714_13)">
                                        <path
                                            d="M28.7379 5.33334C28.6167 5.32085 28.4946 5.32085 28.3734 5.33334H3.48454C3.32502 5.3358 3.16656 5.35971 3.01343 5.40445L15.8579 18.1956L28.7379 5.33334Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M30.0534 6.56885L17.1111 19.4577C16.778 19.7888 16.3275 19.9747 15.8578 19.9747C15.3881 19.9747 14.9376 19.7888 14.6045 19.4577L1.7778 6.66663C1.73837 6.81155 1.71746 6.96089 1.71558 7.11107V24.8888C1.71558 25.3603 1.90288 25.8125 2.23628 26.1459C2.56967 26.4793 3.02186 26.6666 3.49335 26.6666H28.3822C28.8537 26.6666 29.3059 26.4793 29.6393 26.1459C29.9727 25.8125 30.16 25.3603 30.16 24.8888V7.11107C30.1529 6.92587 30.117 6.74292 30.0534 6.56885ZM4.71113 24.8888H3.47558V23.6177L9.9378 17.2088L11.1911 18.4622L4.71113 24.8888ZM28.3645 24.8888H27.12L20.64 18.4622L21.8934 17.2088L28.3556 23.6177L28.3645 24.8888Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_714_13">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Email Me</span>
                            </Button>
                        </a>
                        <a href="mailto:ridoananda123@gmail.com" class="flex items-center gap-x-3">
                            <Button class="flex items-center gap-x-2" variant="dark">
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.33325 22.6667V25.3334C5.33325 26.0407 5.6142 26.7189 6.1143 27.219C6.6144 27.7191 7.29267 28.0001 7.99992 28.0001H23.9999C24.7072 28.0001 25.3854 27.7191 25.8855 27.219C26.3856 26.7189 26.6666 26.0407 26.6666 25.3334V22.6667"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M9.33325 14.6667L15.9999 21.3334L22.6666 14.6667"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M16 5.33325V21.3333"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <span>Download CV</span>
                            </Button>
                        </a>
                    </div>
                </div>
                <div class="relative w-10/12 sm:w-6/12 md:w-11/12 lg:w-8/12 xl:w-7/12 mx-auto md:mx-0 md:ml-auto max-w-xs">
                    <img src="/images/profile-1.png" class="" />
                    <BoxDecoration class="absolute top-4 left-5">
                        <img src="/images/figma.png" alt="Figma">
                    </BoxDecoration>
                    <BoxDecoration class="absolute top-36 left-2">
                        <img src="/images/vue.png" alt="Figma">
                    </BoxDecoration>
                    <BoxDecoration class="absolute top-8 right-6">
                        <img src="/images/laravel.png" alt="Figma">
                    </BoxDecoration>
                    <BoxDecoration class="absolute top-[10.5rem] right-2">
                        <img src="/images/vscode.png" alt="Figma">
                    </BoxDecoration>
                </div>
            </div>
            <!-- Connect With -->
            <h5 class="mt-12 mb-3 text-center font-medium">Connected with</h5>
            <div class="flex items-center justify-center gap-x-4">
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
        </div>
    </div>
</template>
