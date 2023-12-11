<template>
    <div class="px-4 py-20 lg:pb-0 grid lg:grid-cols-2 justify-items-center lg:justify-items-start gap-10 lg:gap-10 xl:gap-20 md:px-20 lg:px-36 xl:px-[152px] lg:relative slider-section">
        <ItemWithButton item-title="Boost Sales with Effortless In-App Ordering" item-description="Swin Drinks™ unveils digital solutions to enhance revenue and capitalize on missed opportunities within the nightlife industry" >
          <MainButton text="I want a Demo" class="drop w-[100%] lg:w-fit" />
        </ItemWithButton>
        <div class="lg:flex hidden" id="image">
            <ImageItem url="src/assets/images/sevents.svg" class-name="lg:block hidden z-10" />
            <ImageItem url="src/assets/images/stickets.svg" class-name="lg:block hidden py-2 mt-14 -ml-10" />
        </div>
        <div class="lg:hidden flex" id="image">
            <ImageItem url="src/assets/images/sevents.svg" class-name="z-10" img-class="w-[45rem]" />
            <ImageItem url="src/assets/images/stickets.svg" class-name="mt-14 -ml-10" img-class="w-[45rem]" />
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
  
</style>
