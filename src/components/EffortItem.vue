<template>
  <div class="flex ml-4 lg:ml-0 lg:gap-5 mb-10">
    <img :src="props.eIconUrl" class="p-2 px-5 md:px-6 lg:px-5 xl:px-6 font-bold relative z-10 h-fit"/>
    <div class="solution">
        <h6 class="solution-main-title font-bold mb-2 lg:bg-inherit px-8 -ml-4 lg:ml-0 -z-10 relative right-0 py-2 lg:p-0">{{ props.effortTitle }}</h6>
        <p class="-ml-16 lg:ml-0 solution-description">{{ props.effortDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  eIconUrl: string,
  effortTitle: string,
  effortDescription: string
}>()
</script>