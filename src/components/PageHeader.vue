<template>
    <img src="../assets//images/bg-tablet-pattern.svg" alt="" class="absolute -right-40 -top-40 -z-50 lg:w-[40rem] xl:w-[51rem]">
    <div class="flex my-16 xl:my-20 justify-between items-center px-5 md:px-10 lg:px-20 xl:px-40">
        <img src="../assets/images/logo.svg" alt="Manage Logo">
        <div class="lg:flex hidden lg:gap-5 xl:gap-10 text-primary-DarkBlue cursor-pointer">
            <p>Pricing</p>
            <p>Products</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Community</p>
        </div>
        <img src="../assets/images/icon-hamburger.svg" alt="Menu Icon" class="block lg:hidden">
        <MainButton text="Get Started" class="hidden lg:block" />
    </div>
</template>

<script setup lang="ts">
import MainButton from './MainButton.vue';
import gsap from 'gsap'

gsap.from('.trigger2', {})
</script>