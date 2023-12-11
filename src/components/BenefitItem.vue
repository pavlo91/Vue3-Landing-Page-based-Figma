<template>
  <div class="ml-0 lg:gap-5 mb-10 benefit-text">
    <img :src="props.bIconUrl" class="benefit-icon p-4 px-5 md:px-6 lg:px-5 xl:px-6 rounded-full relative z-10 h-fit mb-6"/>
    <div>
      <h6 class="lg:whitespace-nowrap  text-2xl lg:text-3xl font-semibold benefit-main-title">{{ props.benefitTitle }}</h6>
      <p class="lg:ml-0 text-left text-sm lg:text-xl benefit-description">{{ props.benefitDescription }}</p>
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

<style scoped>
  .benefit-icon {
    background: var(--m-3-state-layers-dark-primary-opacity-016, rgba(208, 188, 255, 0.16));
  }

  .benefit-main-title {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
  }

  .benefit-description {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
    align-self: stretch;
  }
</style>