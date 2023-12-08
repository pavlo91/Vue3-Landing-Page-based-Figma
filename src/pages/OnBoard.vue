<template>
  <div class="grid grid-flow-row lg:grid-cols-2 lg:gap-14 xl:gap-20 my-8 mb:my-12 lg:my-16 xl:my-20 lg:px-20 xl:px-40 relative">
      <div class="onboard">
          <TitleComponent sub-title="How it works" main-title="Effortless Onboarding"/>
          <div class="mt-12">
              <div v-for="item in onboards" :key="item.id" class="px-4 items-center lg:ml-0 lg:gap-5 mb-5">
                  <EffortItem :e-icon-url="item.eIconUrl" :effort-title="item.effortTitle" :effort-description="item.effortDescription" >
                  </EffortItem>
                  <ImageItem :url="item.imageUrl" class-name="lg:hidden mobile-groups1 box2"/>
              </div>
          </div>
      </div>
      <div v-for="item in onboards" :key="item.id" class="px-4 lg:ml-0 lg:gap-5 mb-5">
        <ImageItem :url="item.imageUrl" class-name="lg:block hidden mobile-groups1 box2"/>
      </div>
  </div>     
</template>

<script setup lang="ts">
  import TitleComponent from '@/components/TitleComponent.vue';
  import EffortItem from '@/components/EffortItem.vue';
  import ImageItem from '@/components/ImageItem.vue';

  const onboards = [
      {
          id: '01',
          eIconUrl: 'src/assets/images/number-1.svg',
          effortTitle: 'POS Integration:',
          effortDescription: 'Connect our app with your POS to allow your customers to order directly from their phones. No new hardware, no additional training—just more orders and satisfied customers.',
          imageUrl: 'src/assets/images/imagen-steps.svg'
      },
      {
          id: '02',
          eIconUrl: 'src/assets/images/number-2.svg',
          effortTitle: 'Quick Setup',
          effortDescription: "Easily create your club's profile in our system. We'll handle the initial setup, so you can focus on what you do best",
          imageUrl: 'src/assets/images/quick-setup.svg'
      },
      {
          id: '03',
          eIconUrl: 'src/assets/images/number-3.svg',
          effortTitle: 'Create your Events',
          effortDescription: 'Organize events and control access with ease, enhancing the customer experience from the start',
          imageUrl: 'src/assets/images/e-events.svg'
      },
      {
          id: '04',
          eIconUrl: 'src/assets/images/number-4.svg',
          effortTitle: 'In-App Ordering:',
          effortDescription: 'Customers can order their next round without leaving their conversation, and your staff can serve without skipping a beat',
          imageUrl: 'src/assets/images/ordering.svg'
      },
      {
          id: '05',
          eIconUrl: 'src/assets/images/number-5.svg',
          effortTitle: ' Wrap-Up The Night',
          effortDescription: "Close your night effortlessly—your current routines remain unchanged. Then, dive into the app to see a snapshot of your venue's performance, from ticket sales to patron preferences, unlocking insights designed to inform and boost your business strategy.",
          imageUrl: 'src/assets/images/wrap-night.svg'
      },
      
  ]
</script>