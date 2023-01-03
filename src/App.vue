<script setup>
import Navbar from "./components/Navbar.vue";

</script>

<template>
    <div class="bg-background min-h-screen font-sans text-white">
        <Navbar />
        <router-view></router-view>
    </div>
</template>
