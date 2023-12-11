<template>
  <div class="grid grid-flow-row lg:grid-cols-2 lg:gap-20 py-20 lg:py-[120px] px-4 lg:px-[152px] effort-onboard">
      <div class="onboard">
          <TitleComponent sub-title="How it works" main-title="Effortless Onboarding"/>
          <div class="mt-12">
              <div v-for="item in onboards" :key="item.id" class="items-center ml-0 mb-5 lg:mb-12">
                  <EffortItem :e-icon-url="item.eIconUrl" :effort-title="item.effortTitle" :effort-description="item.effortDescription" >
                  </EffortItem>
                  <ImageItem :url="item.imageUrl" class-name="lg:hidden full-fit"/>
              </div>
          </div>
      </div>
      <div v-for="item in onboards" :key="item.id" class="px-4 lg:px-0 mb-5">
        <ImageItem :url="item.imageUrl" class-name="lg:block hidden full-fit"/>
      </div>
    </div>
    <img src="../assets/images/evolution.png" alt="Evolution">     
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    import TitleComponent from '@/components/TitleComponent.vue';
    import EffortItem from '@/components/EffortItem.vue';
    import ImageItem from '@/components/ImageItem.vue';

    gsap.registerPlugin(ScrollTrigger)
    const onboard = gsap.timeline({ scrollTrigger: { trigger: '.effort-item', toggleActions: 'play pause restart reset' } })

    onMounted(() => {
    onboard.from('.effort-onboard', { y: -250, duration: 1.5, opacity: 0 })
    onboard.from('.number', { y: -100, duration: 1, delay: 0, stagger: 0.5, opacity: 0 }, '<0.5')
    onboard.from('.effort-item', { x: 200, duration: 1.5, stagger: 0.5, opacity: 0 }, '<')
    })
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