<template>
  <div class="px-4 pb-[120px] md:pb-20 lg:pb-[200px] xl:pb-80">
    <div class="mb-10 xl:mb-20 lg:ml-40">
      <TitleComponent sub-title="Evolución" main-title="Aquí estamos"/>
    </div>
    <VerticalTimeLine />
  </div>
</template>

<script setup lang="ts">
  import TitleComponent from '@/components/TitleComponent.vue';
  import VerticalTimeLine from '@/components/VerticalTimeLine.vue';
</script>