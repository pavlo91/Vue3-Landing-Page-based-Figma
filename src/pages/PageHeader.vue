<template>
    <div class="flex my-10 xl:my-14 justify-between lg:justify-center lg:gap-20 items-center px-5 md:px-10 lg:px-20 xl:px-40 slogan-bg mt-10">
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
import MainButton from '../components/MainButton.vue';
import gsap from 'gsap'

gsap.from('.trigger2', {})
</script>