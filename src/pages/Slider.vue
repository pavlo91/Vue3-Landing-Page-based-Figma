<template>
  <div class="mt-8 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-10 xl:gap-20 mb-10 md:mb-4 lg:mb-4 xl:mb-20 md:px-10 lg:px-20 xl:px-40 lg:relative">
        <ItemWithButton button-text="I want a Demo" item-title="Boost Sales with Effortless In-App Ordering" item-description="Swin Drinks™ unveils digital solutions to enhance revenue and capitalize on missed opportunities within the nightlife industry" >
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
        <div class="flex slogan-bg items-center gap-14 lg:gap-8 lg:py-12 overflow-hidden md:px-10 lg:px-20 xl:px-40 lg:absolute lg:-bottom-12">
          <p class="ml-10 lg:ml-0 solution-description">Our partner</p>
          <div class="flex lg:gap-4 xl:gap-8">
              <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
  import ItemWithButton from '@/components/ItemWithButton.vue';
  import ImageItem from '@/components/ImageItem.vue';
</script>