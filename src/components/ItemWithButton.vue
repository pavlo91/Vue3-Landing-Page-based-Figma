<template>
  <div class="max-w-lg box text-center lg:text-left flex flex-col items-center lg:items-start lg:pt-20 gap-10">
      <div class="flex flex-col gap-4">
        <h3 class="text-4xl lg:text-5xl text-left leading-snug lg:leading-[1.3] xl:leading-[1.3] boost-text">{{ props.itemTitle }}</h3>
        <p class="text-sm lg:text-lg lg:max-w-lg">{{ props.itemDescription }}</p>
      </div>
      <slot></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    itemTitle: string,
    itemDescription: string
  }>()
</script>