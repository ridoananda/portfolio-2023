<script setup>
import Footer from "@/components/Footer.vue";
import InterestedSection from "@/components/InterestedSection.vue";
import ProfileDescription from "@/components/ProfileDescription.vue";
import ProfileInformation from "@/components/ProfileInformation.vue";
import Project from "@/components/Project.vue";
import WhyHire from "@/components/WhyHire.vue";
</script>

<template>
    <div class="pt-12 space-y-20">
        <ProfileInformation />
        <Project />
        <InterestedSection />
        <ProfileDescription />
        <WhyHire />
        <Footer />
    </div>
</template>
