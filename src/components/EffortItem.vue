<template>
  <div class="flex ml-0 gap-4 lg:gap-5 mb-6 effort-item">
    <img :src="props.eIconUrl" class="lg:block number h-fit"/>
    <div class="effort">
        <h6 class="effort-color font-semibold text-2xl lg:text-2xl mb-2 lg:bg-inherit  ml-0">{{ props.effortTitle }}</h6>
        <p class="effort-color ml-0 text-lg lg:text-xl font-normal">{{ props.effortDescription }}</p>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    eIconUrl: string,
    effortTitle: string,
    effortDescription: string
  }>()
</script>

<style scoped>
  .effort-item:hover {
    padding: 32px;
    background: var(--m-3-sys-dark-inverse-on-surface, #191C1B);
    border-radius: 40px;
  }

  .effort-color {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
  }
</style>