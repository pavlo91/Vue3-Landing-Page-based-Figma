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
    import Testimal from './Testimal.vue';

    import { gsap } from 'gsap';
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger)
    
    onMounted(() => {
        gsap.from('.box', { x: -600, duration: 1.5, scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' } })
        gsap.from('#image', { scale: 0.5, duration: 1.5, scrollTrigger: { trigger: '.box', toggleActions: 'play pause restart reset' } })
        gsap.from('.solution-text', { x: 1600, duration: 1.5, scrollTrigger: { trigger: '.solution-text', toggleActions: 'play pause restart reset' } })
        gsap.from('.solution-image', { scale: 0.5, duration: 1.5, scrollTrigger: { trigger: '.solution', toggleActions: 'play pause restart reset' } })
    })
</script>