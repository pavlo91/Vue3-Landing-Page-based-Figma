<template>
  <div class="flex gap-4 lg:ml-0 lg:gap-5 mb-6 lg:mb-10">
    <img :src="props.iconUrl" class="relative h-fit"/>
    <div class="solution">
        <h6 class="solution-main-title text-left text-2xl lg:text-2xl font-semibold mb-2">{{ props.solutionTitle }}</h6>
        <p class="text-left text-sm lg:text-lg font-normal solution-description">{{ props.solutionDescription }}</p>
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

<style scoped>
  .solution-main-title {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
  }

  .solution-description {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
    align-self: stretch;
  }
</style>