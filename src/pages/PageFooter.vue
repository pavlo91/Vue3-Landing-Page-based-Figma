<template>
    <div class="grid px-4 lg:px-[152px] py-20 lg:pt-[175px] lg:pb-[120px] lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-20 footer-color footer">
        <div class="text-left">
            <p class="font-semibold text-xl uppercase mb-1">Schedule a Demo</p>
            <h4 class="font-semibold text-3xl lg:text-4xl">Learn More About The  Features of Swin Drinks</h4>
            <p class="font-normal text-lg lg:text-lg lg:max-w-lg py-8">Ready to experience the power of our Swin Drinks? Connect with our team to schedule a personalized demo. We're here to answer your questions and showcase how our solution can benefit you.</p>
            <div class="lg:hidden flex mb-2">
                <img src="src/assets/images/call.svg"/>
                <a class="email-color lg:text-left">+1234 456 678 89</a>
            </div>
            <div class="flex gap-2">
                <img src="src/assets/images/email.svg"/>
                <a class="email-color lg:text-left">help@swinapp.com</a>
            </div>
        </div>
        <div class="justify-self-end grid pt-10 lg:pt-0">
            <div class="flex gap-2 mb-6">
                <input type="text" class="p-3 px-7 w-fit h-fit rounded-t-lg slogan-bg" placeholder="Given name">
            </div>
            <div class="mb-6">
                <p class="lg:text-lg lg:max-w-lg mb-2">Business:</p>
                <div class="flex lg:text-lg lg:max-w-lg gap-4 font-medium">
                    <p><input type="radio" checked><span class="ml-2">Bar</span></p>
                    <p><input type="radio" class="border radio-border w-4 h-4 rounded-full"><span class="ml-2">Event</span></p>
                    <p><input type="radio"><span class="ml-2">Promoter</span></p>
                    <p><input type="radio"><span class="ml-2">Other</span></p>
                </div>
            </div>
            <div class="flex gap-2 mb-6">
                <input type="text" class="p-3 px-7 w-fit h-fit rounded-t-lg slogan-bg" placeholder="Business name">
            </div>
            <div class="mb-6">
                <p class="swin-text lg:text-lg lg:max-w-lg mb-2">Most interested in:</p>
                <div class="flex swin-text lg:text-lg lg:max-w-lg gap-2">
                    <p><input type="radio"><span class="ml-2">Increase Sales</span></p>
                    <p><input type="radio"><span class="ml-2">Live Stats</span></p>
                </div>
                <div class="flex swin-text lg:text-lg lg:max-w-lg gap-2">
                    <p><input type="radio"><span class="ml-2">Event Management</span></p>
                </div>
            </div>
            <div class="flex gap-2 mb-10">
                <textarea type="text" class=" p-3 px-7 w-fit h-fit rounded-t-lg slogan-bg" rows="5" cols="50" placeholder="Updates in your inbox…"></textarea>
            </div>
        </div>
    </div>
    
    <div class="grid">
        <div class="flex gap-3 self-end">
            <img src="../assets/images/icon-facebook.svg" alt="">
            <img src="../assets/images/icon-youtube.svg" alt="">
            <img src="../assets/images/icon-twitter.svg" alt="">
            <img src="../assets/images/icon-pinterest.svg" alt="">
            <img src="../assets/images/icon-instagram.svg" alt="">
        </div>
    </div>
    <p class="text-center border-t-[1px] self-end py-4 swin-text">Copyright 2023. All Rights Reserved</p>
</template>

<script setup lang="ts">
   import TitleComponent from '@/components/TitleComponent.vue'; 
</script>

<style scoped>
    .footer-color {
        color: var(--m-3-sys-dark-on-background, #E0E3E1);
    }

    .email-color {
        color: var(--m-3-sys-dark-primary, #00DFC4);
    }

    .radio-border {
        border-color: var(--m-3-sys-dark-primary, #00DFC4);
        border: 2px;
    }
</style>