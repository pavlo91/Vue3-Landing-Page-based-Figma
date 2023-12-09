<template>
    <div :class="navbarClass">
        <div class="mr-10">
            <img src="../assets/images/swin-logo.svg" alt="Swin Logo">
        </div>
        <div class="lg:flex hidden lg:gap-6 xl:gap-10 navbar-text cursor-pointer">
            <p>Key Features</p>
            <p>How it Works</p>
            <p>Pricing</p>
            <p>Contact Us</p>
        </div>
        <img src="../assets/images/icon-hamburger.svg" alt="Menu Icon" class="block lg:hidden">
        <MainButton text="I want a Demo" class="hidden lg:block" id="header_demo" />
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, onMounted, onUnmounted } from 'vue';
    import MainButton from '../components/MainButton.vue';
    import gsap from 'gsap'

    gsap.from('.trigger2', {})
    const scrollPosition = ref(0);
    const navbarClass = computed(() => {
        // Define your logic to determine the class based on the scroll position
        if (scrollPosition.value > 10) {
        return 'flex my-10 lg:-mt-5 xl:my-14 justify-between lg:justify-center lg:gap-20 items-center px-5 md:px-10 lg:px-20 xl:px-40 swin-header mt-10 fixed z-40';
        } else {
        return 'flex mt-0 my-10 xl:my-14 justify-between lg:justify-center lg:gap-20 items-center px-5 md:px-10 swin-header lg:px-20 xl:px-40';
        }
    });

    // Update the scroll position when scrolling
    const handleScroll = () => {
        scrollPosition.value = window.scrollY;
    };

    // Add event listener when the component is mounted
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // Remove event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
</script>

<style scoped>
    .swin-header {
        width: 100%;
    }
</style>