<template>
    <div class="mt-8 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-10 xl:gap-20 mb-10 md:mb-4 lg:mb-4 xl:mb-20 md:px-10 lg:px-20 xl:px-40 lg:relative">
        <ItemWithButton item-title="Boost Sales with Effortless In-App Ordering" item-description="Swin Drinks™ unveils digital solutions to enhance revenue and capitalize on missed opportunities within the nightlife industry" >
          <MainButton text="I want a Demo" class="mb-5 drop w-[90%] lg:w-fit" />
        </ItemWithButton>
        <div class="flex" id="image">
            <ImageItem url="src/assets/images/Events.svg" class-name="lg:block hidden z-10" />
            <ImageItem url="src/assets/images/Tickets.svg" class-name="lg:block hidden py-2 mt-14 -ml-10" />
        </div>
        <div class="lg:hidden flex mx-4" id="image">
            <ImageItem url="src/assets/images/Events.svg" class-name="z-10" img-class="w-[45rem]" />
            <ImageItem url="src/assets/images/Tickets.svg" class-name="mt-14 -ml-10" img-class="w-[45rem]" />
          </div>
          <div class="slogan-bg items-center gap-14 lg:gap-8 lg:py-12 overflow-hidden md:px-10 lg:px-20 xl:px-40 lg:absolute lg:-bottom-12 md:w-[120%] z-20">
          <!-- <p class="ml-10 lg:ml-0 solution-description">Our partner</p> -->
          <div class="image-container grid grid-flow-col relative lg:gap-4" id="slogan">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import PageHeader from './PageHeader.vue';
  import ItemWithButton from '@/components/ItemWithButton.vue';
  import ImageItem from '@/components/ImageItem.vue';
  import MainButton from '@/components/MainButton.vue';
</script>

<style scoped>
  .slider-section {
    background: linear-gradient(238deg, #0E1010 0%, rgba(14, 16, 16, 0.00) 69.08%), linear-gradient(122deg, rgba(14, 16, 16, 0.90) 30.92%, rgba(14, 16, 16, 0.00) 100%), linear-gradient(107deg, #0E1010 0%, rgba(14, 16, 16, 0.50) 100%), url('src/assets/images/back-img.png'), lightgray 50% / cover no-repeat;
  }
  .image-container {
    white-space: nowrap;
  }

  /* .image-container img {
    display: inline-block;
    animation: scrollImages 5s linear infinite;
  }

  @keyframes scrollImages {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-150%);
    }
  } */
</style>
