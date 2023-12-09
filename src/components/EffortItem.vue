<template>
  <div class="flex ml-4 lg:ml-0 lg:gap-5 mb-10 effort-item">
    <img :src="props.eIconUrl" class="lg:block number relative z-10 h-fit"/>
    <div class="effort">
        <h6 class="solution-main-title mb-2 lg:bg-inherit px-8 -ml-4 lg:ml-0 -z-10 right-0 py-2 lg:p-0">{{ props.effortTitle }}</h6>
        <p class="-ml-16 lg:ml-0 solution-description">{{ props.effortDescription }}</p>
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
</style>