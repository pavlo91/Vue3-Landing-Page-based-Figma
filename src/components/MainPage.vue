<template>
    <!-- Slider Start -->
    <div class="mt-8 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-10 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 md:px-10 lg:px-20 xl:px-40">
      <div class="lg:hidden">
          <img src="../assets/images/mobile-group.svg" alt="" id="image" class="w-[45rem]">
      </div>
      <ItemWithButton button-text="I want a Demo" item-title="Boost Sales with Effortless In-App Ordering" item-description="Swin Drinks™ unveils digital solutions to enhance revenue and capitalize on missed opportunities within the nightlife industry" />
      <div class="lg:block hidden">
          <img src="../assets/images/mobile-group.svg" alt="" id="image" class="mobile-groups">
      </div>
    </div>
    <!-- Slogan Start -->
    <div class="flex slogan-bg items-center gap-14 lg:gap-8  py-12 relative overflow-hidden md:px-10 lg:px-20 xl:px-40 ">
      <div class="flex lg:gap-4 xl:gap-8">
          <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
      </div>
      <div class="flex lg:gap-4 xl:gap-8">
          <img src="../assets/images/swin-logo-gray.svg" alt="Swin Logo">
      </div>
    </div>
    <!-- Slogan End -->
    <!-- Slider End -->
    <!-- Solution Start -->
    <div class="mt-20 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-14 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 solution">
      <div class="lg:hidden">
          <img src="../assets/images/mobile-solution.svg" alt="Mobile Solution" class="w-[45rem] solution-image">
      </div>
      <div class="lg:block hidden solution-image">
          <img src="../assets/images/mobile-solution.svg" alt="Mobile Solution" class="mobile-1">
      </div>
      <div class="max-w-lg box1 text-center lg:text-left flex flex-col items-center lg:items-start solution-text">
        <TitleComponent sub-title="Key Features" main-title="Unlock Powerful Solutions"/>
        <div class="mt-12">
            <div v-for="item in solutions" :key="item.iconUrl" class="ml-5 lg:ml-0 lg:gap-5 mb-5">
                <SolutionItem :icon-url="item.iconUrl" :solution-title="item.solutionTitle" :solution-description="item.solutionDescription"/>
            </div>
        </div>
      </div>
    </div>
    <!-- Solution End -->
    <!-- Benefit Start -->
    <div class="slogan-bg py-20 benefit">
        <TitleComponent sub-title="advantages" main-title="Maximize Business Benefits"/>
        <div class="flex mt-12">
            <div v-for="item in benefits" :key="item.bIconUrl" class="ml-5 lg:ml-0 lg:gap-5 mb-5 benefit-text">
                <BenefitItem :b-icon-url="item.bIconUrl" :benefit-title="item.benefitTitle" :benefit-description="item.benefitDescription" />
            </div>
        </div>
    </div>
    <!-- Benefit End -->
    <!-- Onboard Start -->
    <div class="grid grid-flow-row lg:grid-cols-2 lg:gap-14 xl:gap-20 my-8 mb:my-12 lg:my-16 xl:my-20 lg:px-20 xl:px-40 relative">
        <div class="onboard">
            <TitleComponent sub-title="How it works" main-title="Effortless Onboarding"/>
            <div class="mt-12">
                <div v-for="item in onboards" :key="item.id" class="flex ml-5 lg:ml-0 lg:gap-5 mb-5">
                    <EffortItem :e-icon-url="item.eIconUrl" :effort-title="item.effortTitle" :effort-description="item.effortDescription" />
                </div>
            </div>
        </div>
        <!-- <img src="../assets/images/square-clover.png" alt="" class="absolute -z-50 lg:-left-[30rem] lg:top-3/4 trigger -right-[40rem] -top-3/4"> -->
        <div class="lg:block hidden">
            <img src="../assets/images/imagen-steps.svg" alt="Squear Clover" class="mobile-groups1 box2">
        </div>
    </div>
    <img src="../assets/images/evolution.png" alt="Evolution" class="mobile-groups1 box2">
    <!-- Onboard End -->
    <!-- Testimal Start -->
    <div class="text-center my-8 mb:my-12 lg:my-16 xl:my-20 px-5 md:px-10 lg:px-20 xl:px-40">
        <h4 class="text-primary-DarkBlue text font-bold mt-10 text-4xl md:text-[2.75rem] lg:text-4xl xl:text-[2.75rem] mb-32">What they’ve said</h4>
        <div class="grid grid-flow-col gap-10 mb-16 relative" id="slider" >
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="max-w-lg slider w-[32rem] p-10 bg-secondary-LightGray flex flex-col items-center transition ease-linear">
                <img :src="testimonial.avatar" alt="" class="relative -top-20 w-20">
                <h6 class="font-bold mb-5 text-primary-DarkBlue -mt-16">{{ testimonial.name }}</h6>
                <p>{{ testimonial.testimony }}</p>
            </div>
            <!-- <div id="slider" class="p-10 max-w-lg bg-secondary-LightGray flex flex-col items-center transition ease-linear">
                <img src="../assets/images/avatar-anisha.png" alt="" class="relative -top-20 w-20">
                <h6 class="font-bold mb-5 text-primary-DarkBlue -mt-16">Anisha Li</h6>
                <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div> -->
        </div>
        <!-- <MainButton text="Get Started"  class="mb-5 button"/> -->
    </div>
    <!-- Testimal End -->
    <!-- Preguntas Start -->
    <div class="mt-20 grid lg:grid-cols-1 justify-items-center lg:justify-items-start lg:gap-14 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 price">
      <div class="max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start price-text">
        <TitleComponent sub-title="faqs" main-title="Preguntas Frecuentes" />
        <p class="-ml-16 lg:ml-0 solution-description">Preguntas comunes sobre integración de la app, costos, soporte y uso. Ayuda a reducir el número de consultas que recibe tu equipo y manejar objeciones de antemano.</p>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col items-center lg:items-start mt-4">
            <div class="text-center lg:text-left flex flex-col items-center lg:items-start prgunta-bgg px-8 py-8 mb-4">
                <h4 class="pregunta-title mb-4">Preguntas</h4>
                <p class="pregunta-description">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div class=" text-center lg:text-left flex flex-col items-center lg:items-start pregunta-bg border-radius-4 px-8 py-8 mb-4">
                <h4 class="pregunta-title mb-4">Preguntas</h4>
                <p class="pregunta-description">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div class="text-center lg:text-left flex flex-col items-center lg:items-start prgunta-bgg px-8 py-8">
                <h4 class="pregunta-title mb-4">Preguntas</h4>
                <p class="pregunta-description">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
        </div>
        <div class="flex flex-col items-center lg:items-start mt-4">
            <div class="text-center lg:text-left flex flex-col items-center lg:items-start pregunta-bg px-8 py-8 mb-4">
                <h4 class="pregunta-title mb-4">Preguntas</h4>
                <p class="pregunta-description">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div class="text-center lg:text-left flex flex-col items-center lg:items-start prgunta-bgg px-8 py-8 mb-4">
                <h4 class="pregunta-title mb-4">Preguntas</h4>
                <p class="pregunta-description">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
            <div class="text-center lg:text-left flex flex-col items-center lg:items-start pregunta-bg px-8 py-8">
                <h4 class="pregunta-title mb-4">Preguntas</h4>
                <p class="pregunta-description">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
            </div>
        </div>
      </div>
    </div>
    <!-- Preguntas End -->
    <!-- Pricing Start -->
    <div class="mt-20 slogan-bg grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-14 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 price">
      <div class="lg:hidden price-image">
          <img src="../assets/images/mobile-prices.svg" alt="Mobile Price" class="w-[45rem]">
      </div>
      <div class="lg:block hidden price-image">
          <img src="../assets/images/mobile-prices.svg" alt="Mobile Price" class="mobile-1">
      </div>
      <div class="max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start price-text">
        <ItemWithButton item-title="Pricing" item-description="Our pricing model aligns seamlessly with your sales growth. We only charge a modest percentage of your earnings, and the additional income we generate for you promptly offsets this cost" button-text="I want a Demo" />
      </div>
    </div>
    <!-- Pricing End -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MainButton from './MainButton.vue';
import TitleComponent from './TitleComponent.vue';
import SolutionItem from './SolutionItem.vue';
import BenefitItem from './BenefitItem.vue';
import EffortItem from './EffortItem.vue';
import ItemWithButton from './ItemWithButton.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const onboard = gsap.timeline({ scrollTrigger: { trigger: '.benefit', toggleActions: 'play pause restart reset' } })

onMounted(() => {
    gsap.from('.box', { x: -600, duration: 1.5, scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' } })
    gsap.from('#image', { scale: 0.5, duration: 1.5, scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' } })
    gsap.from('.solution-text', { x: 1600, duration: 1.5, scrollTrigger: { trigger: '.solution-text', toggleActions: 'play pause restart reset' } })
    gsap.from('.solution-image', { scale: 0.5, duration: 1.5, scrollTrigger: { trigger: '.solution', toggleActions: 'play pause restart reset' } })
    gsap.from('.drop', { y: -50, duration: 1, delay: 0.5, ease: 'bounce.out', scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' }})
    gsap.from('.benefit-text', { y: -100, duration: 2, delay: 0.5, ease: 'bounce.out', scrollTrigger: { trigger: '.benefit', toggleActions: 'play pause restart reset' }})
    gsap.from('.trigger', { x: -200, y: 200, duration: 1.5, scrollTrigger: { trigger: '.trigger' } })
    gsap.from('.text', { scale: 0.25, duration: 1.5 })
    onboard.from('.box2', { y: -250, duration: 1.5, opacity: 0 })
    onboard.from('.number', { y: -100, duration: 1, delay: 0, stagger: 0.5, opacity: 0 }, '<0.5')
    onboard.from('.benefit', { x: 200, duration: 1.5, stagger: 0.5, opacity: 0 }, '<')
    gsap.from('.button', { y: 200, duration: 1, scrollTrigger: { trigger: '.button', toggleActions: 'play pause reverse reset' } })
    gsap.from('.slider', { x: 200, duration: 1.5, repeat: -1, repeatDelay: 0.5})
    slideTestimonials()
})

const solutions = [
    {
        iconUrl: 'src/assets/images/mobile_friendly.svg',
        solutionTitle: 'Mobile Ordering',
        solutionDescription: 'Simplify the ordering process for increased revenue. Allow customers to place orders seamlessly from their mobile devices, contributing to enhanced convenience and boosted sales'
    },
    {
        iconUrl: 'src/assets/images/flash_on.svg',
        solutionTitle: 'Flash Passes',
        solutionDescription: 'Increase your earnings with Flash Passes – a smart way to turn missed chances into profits. Customers skip lines, enjoy a smoother experience, and boost your operational efficiency. Elevate your business with premium access for hassle-free visits.'
    },
    {
        iconUrl: 'src/assets/images/event.svg',
        solutionTitle: 'Event Management',
        solutionDescription: 'Seamlessly create, edit, and manage events with a comprehensive event management system. Keep track of reservations, promotions, and event details in real time'
    },
    {
        iconUrl: 'src/assets/images/bar_chart.svg',
        solutionTitle: 'Live Statistics',
        solutionDescription: 'Access real-time statistics that offer instant insights into sales, customer behavior, and other key metrics, empowering you to make data-driven decisions on the spot.'
    },
]

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
const onboards = [
      {
          id: '01',
          eIconUrl: 'src/assets/images/number-1.svg',
          effortTitle: 'POS Integration:',
          effortDescription: 'Connect our app with your POS to allow your customers to order directly from their phones. No new hardware, no additional training—just more orders and satisfied customers.'
      },
      {
          id: '02',
          eIconUrl: 'src/assets/images/number-2.svg',
          effortTitle: 'Quick Setup',
          effortDescription: "Easily create your club's profile in our system. We'll handle the initial setup, so you can focus on what you do best"
      },
      {
          id: '03',
          eIconUrl: 'src/assets/images/number-3.svg',
          effortTitle: 'Create your Events',
          effortDescription: 'Organize events and control access with ease, enhancing the customer experience from the start'
      },
      {
          id: '04',
          eIconUrl: 'src/assets/images/number-4.svg',
          effortTitle: 'In-App Ordering:',
          effortDescription: 'Customers can order their next round without leaving their conversation, and your staff can serve without skipping a beat'
      },
      {
          id: '05',
          eIconUrl: 'src/assets/images/number-5.svg',
          effortTitle: ' Wrap-Up The Night',
          effortDescription: "Close your night effortlessly—your current routines remain unchanged. Then, dive into the app to see a snapshot of your venue's performance, from ticket sales to patron preferences, unlocking insights designed to inform and boost your business strategy."
      },
      
  ]

const testimonials = [
    {
        avatar: 'src/assets/images/avatar-anisha.png',
        name: 'Anisha Li',
        testimony: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
        avatar: 'src/assets/images/avatar-ali.png',
        name: 'Ali Bravo',
        testimony: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
        avatar: 'src/assets/images/avatar-richard.png',
        name: 'Richard Watts',
        testimony: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
        avatar: 'src/assets/images/avatar-shanai.png',
        name: 'Shanai Gough',
        testimony: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
]

const slideTestimonials = () => {
    let arr = <any>[]
    for (let i = 0; i < testimonials.length; i++) {
        arr.push(document.getElementById('slider')?.children.item(i))
    }
    console.log(arr)
    let i = 1
    setInterval(() => {
        // arr.forEach()
        arr.forEach((e: any) => {
            e.style.transform = `translateX(-${i * 50}%)`;
        });
        i < arr.length ? i++ : i = 0
    }, 1500)
}
</script>