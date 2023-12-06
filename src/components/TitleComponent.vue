<template>
  <p class="sub-title mb-1">{{ props.subTitle }}</p>
  <h3 class="main-title font-bold">{{props.mainTitle}}</h3>
</template>

<script setup lang="ts">
const props = defineProps<{
  subTitle: string,
  mainTitle: string
}>()
</script>