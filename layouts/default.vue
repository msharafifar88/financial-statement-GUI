<script setup lang="ts">
    import headerComponent from '@/components/headerComponent.vue';
    import footerComponent from '@/components/footerComponent.vue';
</script>
<template>
<div dir="rtl" >
    <div> <headerComponent /> </div>
    <slot />

    <div> <footerComponent /> </div>
</div>
</template>

