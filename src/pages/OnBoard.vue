<template>
  <div class="grid grid-flow-row lg:grid-cols-2 lg:gap-20 py-20 lg:py-[120px] px-4 lg:px-[152px] effort-onboard" id="how_it_works">
        <div class="onboard">
            <TitleComponent sub-title="How it works" main-title="Effortless Onboarding"/>
            <div class="mt-12" ref="parentElement">
                <div v-for="item in onboards" :key="item.id" :data-target="item.dataTarget" class="items-center ml-0 mb-5 lg:mb-12 effort-item-container">
                    <EffortItem :e-icon-url="item.eIconUrl" :effort-title="item.effortTitle" :effort-description="item.effortDescription" >
                    </EffortItem>
                    <ImageItem :url="item.imageUrl" class-name="lg:hidden full-fit"/>
                </div>
            </div>
        </div>
        <div class="hidden md:block relative">
            <div id="imagen-steps" ref="img1" class="app-nav-content absolute full-fit">
                <img class="w-full mx-auto" src="src/assets/images/imagen-steps.svg" alt="Eos nisi wisi at pereunt quas nisi">
            </div>
            <div ref="img2" id="quick-setup" class="app-nav-content absolute full-fit">
                <img class="w-full mx-auto" src="src/assets/images/quick-setup.svg" alt="Eos nisi wisi at pereunt quas nisi">
            </div>
            <div ref="img3" id="e-events" class="app-nav-content absolute full-fit">
                <img class="w-full mx-auto" src="src/assets/images/e-events.svg" alt="Eos nisi wisi at pereunt quas nisi">
            </div>
            <div ref="img4" id="ordering" class="app-nav-content absolute full-fit">
                <img class="w-full mx-auto" src="src/assets/images/ordering.svg" alt="Eos nisi wisi at pereunt quas nisi">
            </div>
            <div ref="img5" id="wrap-night" class="app-nav-content absolute full-fit">
                <img class="w-full mx-auto" src="src/assets/images/wrap-night.svg" alt="Eos nisi wisi at pereunt quas nisi">
            </div>
        </div>
      <!-- <div class="image-list">
          <div v-for="item in onboards" :key="item.id" class="px-4 lg:px-0 mb-5">
            <ImageItem :url="item.imageUrl" class-name="lg:block hidden full-fit"/>
          </div>
      </div> -->
    </div>
    <img src="../assets/images/evolution.png" alt="Evolution">     
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    import TitleComponent from '@/components/TitleComponent.vue';
    import EffortItem from '@/components/EffortItem.vue';
    import ImageItem from '@/components/ImageItem.vue';

    gsap.registerPlugin(ScrollTrigger)
    const onboard = gsap.timeline({ scrollTrigger: { trigger: '.effort-onboard', toggleActions: 'play pause restart reset' } })
    const parentElement = ref(null);
    const transitionDuration = 500;
    onMounted(() => {
        const parent = parentElement.value;
        const children = parent.querySelectorAll('.effort-item-container');
        onboard.from('.effort-onboard', { y: -250, duration: 1.5, opacity: 0 })
        onboard.from('.number', { y: -100, duration: 1, delay: 0, stagger: 0.5, opacity: 0 }, '<0.5')
        onboard.from('.effort-item', { x: 200, duration: 1.5, stagger: 0.5, opacity: 0 }, '<')
        children.forEach((li: any) => {
            // Associate target with li directly
            li.targetElement = document.getElementById(li.dataset.target);

            li.addEventListener('mouseenter', function() {
                deactivateAllExcept(li);
                activateElement(li);
                activateElement(li.targetElement);
            });

            li.addEventListener('mouseleave', function() {
                if (li.classList.contains('active') || li.classList.contains('activating')) {
                    deactivateElement(li);
                    deactivateElement(li.targetElement);
                }
            });
        });
        const deactivateAllExcept = (excludeElement: HTMLElement) => {
            children.forEach((item: any) => {
                if (item !== excludeElement) {
                    const otherTarget = item.targetElement; // Use associated target
                    [item, otherTarget].forEach(deactivateElement);
                }
            });
        }

        children.forEach(navItem => {
            navItem.addEventListener("mouseover", () => {
                navItem.classList.add("app-hovered");
            });
            navItem.addEventListener("mouseleave", () => {
                navItem.classList.remove("app-hovered");
            });
        });
        const activateElement = (el: HTMLElement) => {
            el.classList.add('activating');
            setTimeout(() => {
                if (el.classList.contains('activating')) {
                    el.classList.remove('activating');
                    el.classList.add('active');
                }
            }, transitionDuration);
        }
        const deactivateElement = (el: HTMLElement) => {
            if (el.classList.contains('active') || el.classList.contains('activating')) {
                el.classList.remove('activating', 'active');
                el.classList.add('deactivating');
                setTimeout(() => {
                    el.classList.remove('deactivating');
                }, transitionDuration);
            }
        }
    })

    const onboards = [
      {
          id: '01',
          eIconUrl: 'src/assets/images/number-1.svg',
          effortTitle: 'POS Integration:',
          effortDescription: 'Connect our app with your POS to allow your customers to order directly from their phones. No new hardware, no additional training—just more orders and satisfied customers.',
          imageUrl: 'src/assets/images/imagen-steps.svg',
          dataTarget: 'imagen-steps'
      },
      {
          id: '02',
          eIconUrl: 'src/assets/images/number-2.svg',
          effortTitle: 'Quick Setup',
          effortDescription: "Easily create your club's profile in our system. We'll handle the initial setup, so you can focus on what you do best",
          imageUrl: 'src/assets/images/quick-setup.svg',
          dataTarget: 'quick-setup'
      },
      {
          id: '03',
          eIconUrl: 'src/assets/images/number-3.svg',
          effortTitle: 'Create your Events',
          effortDescription: 'Organize events and control access with ease, enhancing the customer experience from the start',
          imageUrl: 'src/assets/images/e-events.svg',
          dataTarget: 'e-events'
      },
      {
          id: '04',
          eIconUrl: 'src/assets/images/number-4.svg',
          effortTitle: 'In-App Ordering:',
          effortDescription: 'Customers can order their next round without leaving their conversation, and your staff can serve without skipping a beat',
          imageUrl: 'src/assets/images/ordering.svg',
          dataTarget: 'ordering'
      },
      {
          id: '05',
          eIconUrl: 'src/assets/images/number-5.svg',
          effortTitle: ' Wrap-Up The Night',
          effortDescription: "Close your night effortlessly—your current routines remain unchanged. Then, dive into the app to see a snapshot of your venue's performance, from ticket sales to patron preferences, unlocking insights designed to inform and boost your business strategy.",
          imageUrl: 'src/assets/images/wrap-night.svg',
          dataTarget: 'wrap-night'
      },
      
    ]
</script>

<style scoped>
    .app-nav-content {
        left: 0;
        opacity: 0;
        top: 40%;
        transition: all 1000ms ease-in-out;
        z-index: 0;
    }

    .app-nav-content.activating,
    .app-nav-content.active {
        left: 0;
        opacity: 1;
        top: 10%;
        transform: translateX(10%);
        z-index: 9;
    }
</style>