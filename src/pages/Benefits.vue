<template>
  <div class="slogan-bg py-20 lg:py-[120px] px-4 lg:px-[152px] benefit">
    <TitleComponent sub-title="advantages" main-title="Maximize Business Benefits"/>
    <div class="grid grid-flow-row md:flex mt-12">
        <BenefitItem  v-for="item in benefits" :key="item.bIconUrl" :b-icon-url="item.bIconUrl" :benefit-title="item.benefitTitle" :benefit-description="item.benefitDescription" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import TitleComponent from '@/components/TitleComponent.vue'
  import BenefitItem from '@/components/BenefitItem.vue'

  gsap.registerPlugin(ScrollTrigger)
  
  // onMounted(() => {
  //   gsap.from('.benefit-text', { y: 100, duration: 2, delay: 0.5, ease: 'bounce.out', scrollTrigger: { trigger: '.benefit', toggleActions: 'play pause restart reset' }})
  // })
  const benefits = [
      {
          bIconUrl: 'src/assets/images/stacked_line_chart.svg',
          benefitTitle: 'Increased Revenue',
          benefitDescription: 'Unlock new sales opportunities with tempting live time-limited discounts. Combined with in-app ordering, customers can efficiently place more orders, providing a competitive edge'
      },
      {
          bIconUrl: 'src/assets/images/groups.svg',
          benefitTitle: 'Enhanced Decision-Making',
          benefitDescription: 'Gain a competitive advantage with real-time live sale metrics. Make on-the-spot decisions for improved efficiency and profitability. Utilize comprehensive data analytics to strategically assess trends and optimize inventory.'
      },
      {
          bIconUrl: 'src/assets/images/timer.svg',
          benefitTitle: 'Effortless Event Management',
          benefitDescription: 'Efficiently manage events from creation to promotion, simplifying reservations, and creating a welcoming atmosphere for repeat business.'
      },
      
  ]
</script>