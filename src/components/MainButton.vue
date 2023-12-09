<template>
    <button class="p-4 xl:p-5 px-8 xl:px-10 rounded-full main-button shadow-lg">{{ props.text }}</button>
</template>

<script setup lang="ts">
    const props = defineProps<{
        text: string
    }>()
</script>