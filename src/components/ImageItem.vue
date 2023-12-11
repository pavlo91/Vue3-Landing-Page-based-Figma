<template>
  <div :class="props.className">
    <img  :src="props.url" class="props.imgClass" />
  </div>
</template>

<script setup lang="ts">
  import { defineProps, withDefaults } from 'vue';
  interface MyProps {
    url: string;
    className?: string;
    imgClass?: string;
  }

  const props = withDefaults(defineProps<MyProps>(), {
    className: 'ski-default',
    imgClass: 'ski-default'
  });
</script>

<style scoped>
  .full-fit {
    width: 100%!important;
  }
</style>