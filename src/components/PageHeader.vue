<template>
    <!-- <img src="../assets//images/bg-tablet-pattern.svg" alt="" class="absolute -right-40 -top-40 -z-50 lg:w-[40rem] xl:w-[51rem]"> -->
    <div class="flex my-10 xl:my-14 justify-content-center items-center px-5 md:px-10 lg:px-20 xl:px-40">
        <div class="flex mr-40 lg:gap-4 xl:gap-8">
            <img src="../assets/images/swin-logo.svg" alt="Swin Logo">
        </div>
        <div class="lg:flex hidden lg:gap-6 xl:gap-10 navbar-text cursor-pointer">
            <p>Key Features</p>
            <p>How it Works</p>
            <p>Pricing</p>
            <p>Contact Us</p>
        </div>
        <img src="../assets/images/icon-hamburger.svg" alt="Menu Icon" class="block lg:hidden">
        <!-- <MainButton text="I want a Demo" class="hidden lg:block" /> -->
    </div>
</template>

<script setup lang="ts">
import MainButton from './MainButton.vue';
import gsap from 'gsap'

gsap.from('.trigger2', {})
</script>