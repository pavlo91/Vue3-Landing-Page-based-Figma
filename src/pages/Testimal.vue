<template>
  <div class="text-center px-4 lg:px-[152px] py-20 lg:py-[120px] slogan-bg">
      <div class="text-center lg:mb-12 mb-6">
        <p class="font-medium text-md lg:text-lg testimal-sub-title uppercase">Testimonios</p>
        <h4 class="font-semibold text-2xl lg:text-4xl testimal-title">Lo que opinan</h4>
      </div>
      <div class="grid grid-flow-row lg:grid-cols-4 lg:gap-10 items-center justify-items-center">
        <img src="src/assets/images/arrow-back.svg" alt="" class="">
        <img src="src/assets/images/testimal-1.svg" alt="" class="w-full">
        <div class="lg:text-left">
            <p class="mb-6">“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque.”</p>
            <h6 class="font-bold text-2xl">Nick Jonas</h6>
            <p class="text-sm font-normal">role</p>
        </div>
        <img src="src/assets/images/arrow-forward.svg" alt="" class="">
      </div>
      <!-- <div class="grid grid-flow-col gap-10 mb-16" id="slider" >
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="lg:flex max-w-lg slider p-10 items-center transition ease-linear">
            <div class="mb-8">
                <img :src="testimonial.avatar" alt="" class="border rounded-full w-40">
            </div>
            <div>
                <p class="mb-6">{{ testimonial.testimony }}</p>
                <h6 class="font-bold text-2xl">{{ testimonial.name }}</h6>
                <p class="text-sm font-normal">{{ testimonial.role }}</p>
            </div>
          </div>
      </div> -->
  </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    // onMounted(() => {
    //         slideTestimonials()
    //     })
    const testimonials = [
        {
            avatar: 'src/assets/images/testimal-1.svg',
            name: 'Nick Jonas',
            testimony: '“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque.”',
            role: 'role'
        },
        {
            avatar: 'src/assets/images/avatar-ali.png',
            name: 'Ali Bravo',
            testimony: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
            role: 'role'
        },
        {
            avatar: 'src/assets/images/avatar-richard.png',
            name: 'Richard Watts',
            testimony: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
            role: 'role'
        },
        {
            avatar: 'src/assets/images/avatar-shanai.png',
            name: 'Shanai Gough',
            testimony: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
            role: 'role'
        }
    ]

    // const slideTestimonials = () => {
    //     let arr = <any>[]
    //     for (let i = 0; i < testimonials.length; i++) {
    //         arr.push(document.getElementById('slider')?.children.item(i))
    //     }
    //     console.log(arr)
    //     let i = 1
    //     setInterval(() => {
    //         // arr.forEach()
    //         arr.forEach((e: any) => {
    //             e.style.transform = `translateX(-${i * 50}%)`;
    //         });
    //         i < arr.length ? i++ : i = 0
    //     }, 1500)
    // }
</script>

<style scoped>
    .testimal-title {
        color: var(--m-3-sys-dark-on-background, #E0E3E1);
    }
    .testimal-sub-title {
        color: var(--m-3-sys-dark-secondary, #B1CCC5);
    }
</style>