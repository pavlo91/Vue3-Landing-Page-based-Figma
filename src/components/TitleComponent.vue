<template>
  <div class="text-left">
    <p class="text-sm lg:text-xl sub-title font-medium mb-1">{{ props.subTitle }}</p>
    <h4 class="text-4xl lg:text-5xl font-semibold main-title lg:whitespace-nowrap">{{props.mainTitle}}</h4>
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
  const props = defineProps<{
    subTitle: string,
    mainTitle: string
  }>()
</script>

<style scoped>
  .sub-title {
    color: var(--m-3-sys-dark-secondary, #B1CCC5);
    text-transform: uppercase;
  }

  .main-title {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
  }
</style>