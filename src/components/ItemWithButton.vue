<template>
  <div class="max-w-lg box text-center lg:text-left flex flex-col items-center lg:items-start mt-20">
      <h3 class="boost-text font-bold text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-snug lg:leading-[1.15] xl:leading-[1.15] mb-4">{{ props.itemTitle }}</h3>
      <p class="swin-text lg:text-lg md:text-2xl text-xl lg:max-w-sm mb-10">{{ props.itemDescription }}</p>
      <MainButton :text="props.buttonText" class="mb-5 drop" />
  </div>
</template>

<script setup lang="ts">
  import MainButton from './MainButton.vue';

  const props = defineProps<{
  buttonText: string,
  itemTitle: string,
  itemDescription: string
}>()
</script>