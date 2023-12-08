<template>
    <!-- Slider Start -->
    <Slider />
    <!-- Slider End -->
    <!-- Solution Start -->
    <Solution />
    <!-- Solution End -->
    <!-- Benefit Start -->
    <Benefits />
    <!-- Benefit End -->
    <!-- Onboard Start -->
    <OnBoard />
    <!-- Onboard End -->
    <!-- Testimal Start -->
    <Testimal />
    <!-- Testimal End -->
    <!-- Preguntas Start -->
    <Pregunta />
    <!-- Preguntas End -->
    <!-- Pricing Start -->
    <Pricing />
    <!-- Pricing End -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import Slider from '@/pages/Slider.vue';
import Solution from '@/pages/Solution.vue';
import Benefits from '@/pages/Benefits.vue';
import OnBoard from '@/pages/OnBoard.vue';
import Pregunta from '@/pages/Pregunta.vue';
import Pricing from '@/pages/Pricing.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimal from './Testimal.vue';

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
        // slideTestimonials()
    })
</script>