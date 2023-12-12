<template>
  <div class="text-center px-4 lg:px-[152px] py-20 lg:py-[120px] slogan-bg">
      <div class="text-center lg:mb-12 mb-6">
        <p class="font-medium text-md lg:text-lg testimal-sub-title uppercase">Testimonios</p>
        <h4 class="font-semibold text-2xl lg:text-4xl testimal-title">Lo que opinan</h4>
      </div>
      <div>
      <swiper 
          :slides-per-view="1"
          :modules="[Navigation]"
          :navigation="{
            nextEl: '.testimonial-sc__button-next',
            prevEl: '.testimonial-sc__button-prev',
          }"
          :space-between="30"
        >
          <swiper-slide v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="grid grid-flow-row lg:grid-cols-4 lg:gap-10 items-center justify-items-center">
                <div class="lg:block hidden">
                    <button class="carousel-nav__button testimonial-sc__button-prev">
                        <img src="src/assets/images/arrow-back.svg">
                    </button>
                </div>
                <div class="mb-6 lg:mb-0">
                    <img :src="testimonial.avatar" alt="" class="full-fit">
                </div>
                <div class="lg:text-left">
                    <p class="mb-6 testimal-sub-title">{{ testimonial.testimony }}</p>
                    <h6 class="font-bold text-2xl testimal-title">{{ testimonial.name }}</h6>
                    <p class="text-sm font-normal testimal-sub-title">{{ testimonial.role }}</p>
                </div>
                <div class="lg:block hidden">
                    <button class="carousel-nav__button testimonial-sc__button-next">
                        <img src="src/assets/images/arrow-forward.svg">
                    </button>
                </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <footer class="block lg:hidden">
        <div class="flex justify-between">
          <button class="carousel-nav__button testimonial-sc__button-prev">
            <img src="src/assets/images/arrow-back.svg">
          </button>
          <button class="carousel-nav__button testimonial-sc__button-next">
                <img src="src/assets/images/arrow-forward.svg">
          </button>
        </div>
      </footer>
  </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { Navigation } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    
    const testimonials = [
        {
            avatar: 'src/assets/images/avatar-anisha.png',
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

</script>

<style scoped>
    .testimal-title {
        color: var(--m-3-sys-dark-on-background, #E0E3E1);
    }
    .testimal-sub-title {
        color: var(--m-3-sys-dark-secondary, #B1CCC5);
    }

    .carousel-nav__button {
        width: 4rem;
        height: 4rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: none !important;
        background-color: var(--secondary);
        color: var(--white);
        transition: background-color 0.3 ease;
    }

.testimonial-sc__button-prev {
  margin-right: 0.5rem;
}

.swiper-button-disabled {
  background-color: var(--green-300);
}

@media screen and (min-width: 992px) {
  .testimonial-sec {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .testimonial-sec__title {
    font-size: 2.5rem;
  }

  .testimonial__quote {
    font-size: 1.25rem;
  }

  .testimonial__name {
    font-size: 1.25rem;
  }
}
</style>