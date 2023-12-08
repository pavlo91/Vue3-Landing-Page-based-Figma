<template>
  <div class="mt-20 slogan-bg grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-14 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 price1">
    <div class="lg:hidden price-image1">
        <img src="../assets/images/mobile-prices.svg" alt="Mobile Price" class="w-[45rem]">
    </div>
    <div class="lg:block hidden price-image1">
        <img src="../assets/images/mobile-prices.svg" alt="Mobile Price" class="mobile-1">
    </div>
    <div class="max-w-lg text-left lg:text-left flex flex-col items-center lg:items-start price-text1">
      <ItemWithButton item-title="Pricing" item-description="Our pricing model aligns seamlessly with your sales growth. We only charge a modest percentage of your earnings, and the additional income we generate for you promptly offsets this cost">
        <MainButton text="I want a Demo" class="mb-5 drop w-[90%] lg:w-fit" />
      </ItemWithButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ItemWithButton from '@/components/ItemWithButton.vue';
  import MainButton from '@/components/MainButton.vue';
</script>