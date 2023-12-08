<template>
  <div class="ml-4 lg:ml-0 lg:gap-5 mb-10">
    <img :src="props.bIconUrl" class="benefit-icon p-4 px-5 md:px-6 lg:px-5 xl:px-6 rounded-full relative z-10 h-fit mb-6"/>
    <div class="benefit">
      <h6 class="lg:whitespace-nowrap benefit-main-title">{{ props.benefitTitle }}</h6>
      <p class="lg:ml-0 text-left benefit-description">{{ props.benefitDescription }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  bIconUrl: string,
  benefitTitle: string,
  benefitDescription: string
}>()
</script>