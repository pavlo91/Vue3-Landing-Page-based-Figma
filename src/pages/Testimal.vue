<template>
  <div class="text-center my-8 mb:my-12 lg:my-16 xl:my-20 px-5 md:px-10 lg:px-20 xl:px-40">
      <h4 class="text-primary-DarkBlue text font-bold mt-10 text-4xl md:text-[2.75rem] lg:text-4xl xl:text-[2.75rem] mb-32">What they’ve said</h4>
      <div class="grid grid-flow-col gap-10 mb-16 relative" id="slider" >
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="max-w-lg slider w-[32rem] p-10 bg-secondary-LightGray flex flex-col items-center transition ease-linear">
              <img :src="testimonial.avatar" alt="" class="relative -top-20 w-20">
              <h6 class="font-bold mb-5 text-primary-DarkBlue -mt-16">{{ testimonial.name }}</h6>
              <p>{{ testimonial.testimony }}</p>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    onMounted(() => {
            slideTestimonials()
        })
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