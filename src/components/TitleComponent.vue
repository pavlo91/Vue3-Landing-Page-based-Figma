<template>
  <div class="text-left">
    <p class="sub-title mb-1">{{ props.subTitle }}</p>
    <h4 class="main-title">{{props.mainTitle}}</h4>
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
const props = defineProps<{
  subTitle: string,
  mainTitle: string
}>()
</script>