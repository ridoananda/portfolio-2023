<template>
    <div class="grid grid-cols-12">
        <div class="col-span-10 col-start-2">
            <h1 class="font-head font-black text-3xl text-center mb-10 lg:mb-12">Why Hire Me?</h1>
            <div class="grid cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-12">
                <div v-for="(item, index) in AppConfig.whyHire" :key="index" class="flex flex-col items-center gap-y-2">
                    <img :src="item.image" class="w-40 h-40" />
                    <h4 class="font-bold font-head text-2xl">{{ item.title }}</h4>
                    <p class="text-paragraph text-center">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import AppConfig from "../AppConfig";
</script>
