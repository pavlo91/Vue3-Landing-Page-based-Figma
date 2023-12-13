<template>
  <div class="px-4 md:px-20 lg:px-[152px] xl:px-40 evolution-color">
    <div class="lg:block hidden grid grid-col relative">
      <hr class="border-1 lg:-mx-40 lg:px-[120%] -z-10">
      <!--First item-->
      <div class="grid grid-cols-6 gap-4 absolute -mt-2">
        <div v-for="event in events" :key="event.id">
          <div class="items-center pt-2 md:block md:pt-0">
            <div
              class="rounded-full md:-mt-[5px] md:ml-0 md:mr-0 ">
              <img :src="event.src">
            </div>
            <p class="mt-2 text-sm ">
              {{ event.title }}
            </p>
          </div>
          <div class="ml-4 mt-2 pb-5 md:ml-0">
            <p class="mb-3 ">
              {{  event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="lg:hidden grid grid-col relative">
        <hr class="border-1 -mx-10 w-[120%] lg:-mx-40 lg:px-[120%]">
        <div class="grid grid-cols-2 gap-10 absolute -mt-7">
          <div class="items-center pt-2 md:block md:pt-0">
            <div
              class="rounded-full md:-mt-[5px] md:ml-0 md:mr-0 ">
              <img src="src/assets/images/Vector.svg">
            </div>
            <p class="mt-2 text-sm ">
              Desarrollo de la aplicación
            </p>
          </div>
          <div class="items-center pt-2 md:block md:pt-0">
            <div
              class="rounded-full md:-mt-[5px] md:ml-0 md:mr-0 ">
              <img src="src/assets/images/radio_button_unchecked.svg">
            </div>
            <p class="mt-2 text-sm ">
              Integración con Square
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  const events = [
      {
        id: '1',
        title: '10/10/2023',
        description: 'Diseño de la aplicación',
        state: 'complete',
        src: 'src/assets/images/check_circle.svg'
      },
      {
        id: '2',
        title: 'Actualidad',
        description: 'Desarrollo de la aplicación',
        state: 'active',
        src: 'src/assets/images/Vector.svg'
      },
      {
        id: '3',
        title: 'Próximamente',
        description: 'Integración con Square',
        state: 'incomplete',
        src: "src/assets/images/radio_button_unchecked.svg"
      },
      {
        id: '4',
        title: 'Próximamente',
        description: 'Launch con cliente piloto',
        state: 'incomplete',
        src: "src/assets/images/radio_button_unchecked.svg"
      },
      {
        id: '5',
        title: 'Próximamente',
        description: 'Partner up con 5 clubs que usen Square y 10 que usen Toast solo para promoción',
        state: 'incomplete',
        src: "src/assets/images/radio_button_unchecked.svg"
      },
      {
        title: 'Próximamente',
        description: 'Integración con Toast',
        state: 'incomplete',
        src: "src/assets/images/radio_button_unchecked.svg"
      },
      
  ];

</script>

<style scoped>
  .evolution-color {
    color: var(--m-3-sys-dark-on-background, #E0E3E1);
  }
</style>