<template>
    <div :class="navbarClass">
        <div class="mr-10">
            <img src="../assets/images/swin-logo.svg" alt="Swin Logo">
        </div>
        <div class="lg:flex hidden lg:gap-6 xl:gap-10 navbar-text cursor-pointer">
            <a href="#key_features">Key Features</a>
            <a href="#how_it_works">How it Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact_us">Contact Us</a>
        </div>
        <img src="../assets/images/menu.svg" alt="Menu Icon" class="block lg:hidden p-2">
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
        return 'px-4 py-4 flex lg:py-6 justify-between lg:justify-center lg:gap-20 items-center px-5 md:px-10 lg:px-20 xl:px-40 swin-header fixed z-40 overflow-hidden';
        } else {
        return 'px-4 py-4 flex lg:py-6 justify-between lg:justify-center lg:gap-20 items-center px-5 md:px-10 header-top lg:px-20 xl:px-40 overflow-hidden';
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
        background-color: black;
    }
    .header-top {
        width: 100%;
        background-color: transparent;
    }
</style>