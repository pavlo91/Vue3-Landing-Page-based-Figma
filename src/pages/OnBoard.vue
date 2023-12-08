<template>
  <div class="grid grid-flow-row benefits lg:grid-cols-2 lg:gap-14 xl:gap-20 my-8 mb:my-12 lg:my-16 xl:my-20 lg:px-20 xl:px-40 relative">
    <div>
        <div v-for="benefit in benefits" :key="benefit.id" class="flex ml-5 lg:ml-0 lg:gap-5 mb-10">
          <p class="p-2 px-5 number md:px-6 lg:px-5 xl:px-6 font-bold rounded-full relative z-10 text-secondary-LightGray bg-primary-BrightRed h-fit">{{ benefit.id }}</p>
          <div class="benefit">
              <h6 class="font-bold mb-5 text-primary-DarkBlue lg:bg-inherit px-8 -ml-4 lg:ml-0 -z-10 relative right-0 py-2 lg:p-0 bg-secondary-paleRed">{{ benefit.title }}</h6>
              <p class="-ml-16 lg:ml-0">{{ benefit.subtitle }}</p>
          </div>
        </div>
    </div>
    <!-- <img src="../assets/images/square-clover.png" alt="" class="absolute -z-50 lg:-left-[30rem] lg:top-3/4 trigger -right-[40rem] -top-3/4"> -->
    <div class="lg:block hidden">
      <img src="../assets/images/imagen-steps.svg" alt="Squear Clover" class="mobile-groups1">
    </div>
  </div>
  <img src="../assets/images/evolution.png" alt="Evolution" class="mobile-groups1">     
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger)

  const benefit = gsap.timeline({ scrollTrigger: { trigger: '.benefits', toggleActions: 'play pause restart reset' } })

  onMounted(() => {
    // gsap.from('.box', { x: -600, duration: 1.5, scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' } })
    // gsap.from('#image', { scale: 0.5, duration: 1.5, scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' } })
    // gsap.from('.drop', { y: -50, duration: 1, delay: 0.5, ease: 'bounce.out', scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' }})
    // gsap.from('.trigger', { x: -200, y: 200, duration: 1.5, scrollTrigger: { trigger: '.trigger' } })
    // gsap.from('.text', { scale: 0.25, duration: 1.5 })
    benefit.from('.box2', { y: -250, duration: 1.5, opacity: 0 })
    benefit.from('.number', { y: -100, duration: 1, delay: 0, stagger: 0.5, opacity: 0 }, '<0.5')
    benefit.from('.benefit', { x: 200, duration: 1.5, stagger: 0.5, opacity: 0 }, '<')
    // gsap.from('.button', { y: 200, duration: 1, scrollTrigger: { trigger: '.button', toggleActions: 'play pause reverse reset' } })
    // gsap.from('.slider', { x: 200, duration: 1.5, repeat: -1, repeatDelay: 0.5})
})

  const benefits = [
      {
          id: '01',
          title: 'Track company-wide progress',
          subtitle: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
      },
      {
          id: '02',
          title: 'Advanced built-in reports',
          subtitle: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
      },
      {
          id: '03',
          title: 'Everything you need in one place',
          subtitle: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
      }
  ]
</script>