<script setup>
const props = defineProps({
    variant: String
})
const variant = props.variant == 'dark' ? 'bg-secondary border-border border' : 'bg-primary' 
</script>
<template>
    <button class="rounded-xl py-1.5 px-4" :class="variant">
        <slot></slot>
    </button>
</template>