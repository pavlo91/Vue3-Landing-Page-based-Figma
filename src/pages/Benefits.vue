<template>
  <div class="slogan-bg lg:py-20 lg:px-20 benefit">
    <TitleComponent sub-title="advantages" main-title="Maximize Business Benefits"/>
    <div class="grid grid-flow-row lg:grid-cols-3 md:flex mt-12">
        <div v-for="item in benefits" :key="item.bIconUrl" class="lg:gap-5 mb-5 benefit-text">
            <BenefitItem :b-icon-url="item.bIconUrl" :benefit-title="item.benefitTitle" :benefit-description="item.benefitDescription" />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import TitleComponent from '@/components/TitleComponent.vue'
  import BenefitItem from '@/components/BenefitItem.vue'

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