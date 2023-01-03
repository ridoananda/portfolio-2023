<script setup>
const props = defineProps({
    // width: [String, Number],
    // height: [String, Number],
    size: { type: String, default: 'normal' },
});
// tailwind doesn't support dynamic number class
// const width = props.width ? `w-${props.width}` : "w-11";
// const height = props.height ? `h-${props.height}` : "h-11";
</script>
<template>
    <div
        class="rounded-full border border-border bg-secondary flex items-center justify-center hover:bg-zinc-700 hover:border-zinc-500 hover:shadow-md"
        :class="size"
    >
        <div
            class="flex items-center justify-center hover:scale-100 scale-95 transform transition duration-100 cursor-pointer text-gray-200"
            :class="size"
        >
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
.normal {
    @apply w-11 h-11
}
.sm {
    @apply w-9 h-9 p-1.5 sm:p-2 sm:w-10 sm:h-10
}
.lg {
    @apply w-12 h-12
}

/* .whatsapp:hover {
    @apply bg-gradient-to-br from-whatsapp-teal-green to-whatsapp-light-green;
}
.instagram:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
} */
</style>
