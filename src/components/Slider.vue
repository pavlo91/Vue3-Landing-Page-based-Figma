<template>
  <div class="mt-8 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-14 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40">
        <div class="lg:hidden">
            <img src="../assets/images/mobile-group.png" alt="" id="image" class="w-[45rem]">
        </div>
        <div class="max-w-lg box text-center lg:text-left flex flex-col items-center lg:items-start mt-20">
            <h3 class="boost-text font-bold text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-snug lg:leading-[1.15] xl:leading-[1.15] mb-4">Boost Sales with Effortless In-App Ordering</h3>
            <p class="swin-text lg:text-lg md:text-2xl text-xl lg:max-w-sm mb-10">Swin Drinks™ unveils digital solutions to enhance revenue and capitalize on missed opportunities within the nightlife industry</p>
            <MainButton text="I want a Demo" class="mb-5 drop" />
        </div>
        <div class="lg:block hidden">
            <img src="../assets/images/mobile-group.png" alt="" id="image" class="mobile-groups">
        </div>
      </div>
      <div class="grid lg:grid-cols-2 slogan-bg items-center py-12 relative overflow-hidden md:px-10 lg:px-20 xl:px-40">
        <div class="flex lg:gap-4 xl:gap-8">
            <img src="../assets/images/swin_logo-gray.svg" alt="Swin Logo">
            <img src="../assets/images/Swin-gray.svg" alt="Logo Letter">
        </div>
        <div class="flex lg:gap-4 xl:gap-8">
            <img src="../assets/images/swin_logo-gray.svg" alt="Swin Logo">
            <img src="../assets/images/Swin-gray.svg" alt="Logo Letter">
        </div>
      </div>
</template>

<script setup lang="ts">
  import MainButton from './MainButton.vue';
</script>