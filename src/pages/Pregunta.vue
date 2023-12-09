<template>
  <div class="mt-20 grid grid-flow-row justify-items-center lg:justify-items-start lg:gap-14 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 preguntas">
    <div class="max-w-lg text-center lg:text-left flex flex-col items-center lg:items-start preguntas-text">
      <TitleComponent sub-title="faqs" main-title="Preguntas Frecuentes" />
      <p class="-ml-16 lg:ml-0 solution-description">Preguntas comunes sobre integración de la app, costos, soporte y uso. Ayuda a reducir el número de consultas que recibe tu equipo y manejar objeciones de antemano.</p>
    </div>
    <div class="grid grid-flow-row md:grid-cols-2 gap-4 mt-4 pregunta-items">
      <div class="flex flex-col items-center lg:items-start pregunta-item-1">
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
      <div class="flex flex-col items-center lg:items-start pregunta-item-2">
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
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  
  import TitleComponent from '@/components/TitleComponent.vue';
  
  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
      gsap.from('.preguntas-text', { scale: 0.5, duration: 1.5, scrollTrigger: { trigger: '.preguntas', toggleActions: 'play pause restart reset' } })
      gsap.from('.pregunta-item-1', { x: 600, duration: 2, scrollTrigger: { trigger: '.pregunta-items', toggleActions: 'play pause restart reset' } })
      gsap.from('.pregunta-item-2', { x: -600, duration: 2, scrollTrigger: { trigger: '.pregunta-items', toggleActions: 'play pause restart reset' } })
  })
</script>