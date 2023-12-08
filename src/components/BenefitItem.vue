<template>
  <div class="ml-4 lg:ml-0 lg:gap-5 mb-10">
    <img :src="props.bIconUrl" class="benefit-icon p-4 px-5 md:px-6 lg:px-5 xl:px-6 rounded-full relative z-10 h-fit mb-6"/>
    <div class="benefit">
        <h6 class="benefit-main-title font-bold mb-4 lg:bg-inherit px-8 -ml-4 lg:ml-0 relative right-0 py-2 lg:p-0">{{ props.benefitTitle }}</h6>
        <p class="lg:ml-0 benefit-description">{{ props.benefitDescription }}</p>
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