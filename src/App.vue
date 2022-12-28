<script setup>
import Footer from "./components/Footer.vue";
import InterestedSection from "./components/InterestedSection.vue";
import Navbar from "./components/Navbar.vue";
import ProfileDescription from "./components/ProfileDescription.vue";
import ProfileInformation from "./components/ProfileInformation.vue";
import Project from "./components/Project.vue";
import WhyHire from "./components/WhyHire.vue";

</script>

<template>
    <div class="bg-background min-h-screen font-sans text-white">
        <Navbar />
        <div class="pt-12 space-y-20">
            <ProfileInformation />
            <Project />
            <InterestedSection />
            <ProfileDescription/>
            <WhyHire />
            <Footer />
        </div>
    </div>
</template>
