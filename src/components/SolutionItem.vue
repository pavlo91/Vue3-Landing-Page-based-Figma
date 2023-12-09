<template>
  <div class="flex gap-4 lg:ml-0 lg:gap-5 mb-6 lg:mb-10">
    <img :src="props.iconUrl" class="relative z-10 h-fit"/>
    <div class="solution">
        <h6 class="solution-main-title mb-2 lg:bg-inherit px-8 -ml-4 lg:ml-0 -z-10 relative right-0 py-2 lg:p-0">{{ props.solutionTitle }}</h6>
        <p class="-ml-16 lg:ml-0 text-left solution-description">{{ props.solutionDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconUrl: string,
  solutionTitle: string,
  solutionDescription: string
}>()

</script>