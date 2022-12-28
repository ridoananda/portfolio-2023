<script setup>
import Button from "./Button.vue";
</script>
<template>
    <div class="grid grid-cols-12">
        <div class="col-span-10 col-start-2">
            <div class="py-3 px-4 md:px-5 md:h-20 bg-secondary rounded-md flex flex-col md:flex-row items-center justify-between">
                <h1 class="font-head font-bold text-xl text-center md:text-left lg:text-2xl mb-3 md:mb-0">Interested Working with me?</h1>
                <div class="flex items-center gap-x-2 md:gap-x-4 text-sm md:text-base">
                    <a href="#" class="border border-border py-1.5 px-4 rounded-md">See More Project</a>
                    <a href="mailto:ridoananda123@gmail.com">
                        <Button class="flex items-center gap-x-2 rounded-md">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
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
                </div>
            </div>
        </div>
    </div>
</template>
