<template>
  <div :class="props.className">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, withDefaults } from 'vue';
  interface ContainerProps {
    className?: string;
  }

  const props = withDefaults(defineProps<ContainerProps>(), {
    className: 'ski-container',
  });
</script>