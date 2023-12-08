<template>
  <div class="max-w-lg box text-center lg:text-left flex flex-col items-center lg:items-start mt-10 lg:mt-20">
      <h3 class="boost-text text-left leading-snug lg:leading-[1.15] xl:leading-[1.15] mb-4">{{ props.itemTitle }}</h3>
      <p class="swin-text lg:text-lg lg:max-w-lg mb-10">{{ props.itemDescription }}</p>
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
  itemTitle: string,
  itemDescription: string
}>()
</script>