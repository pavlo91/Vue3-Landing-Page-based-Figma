<template>
    <div class="mt-20 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-20 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 footer">
        <div class="text-left">
            <p class="sub-title mb-1">Schedule a Demo</p>
            <h4 class="main-title">Learn More About The  Features of Swin Drinks</h4>
            <p class="swin-text lg:text-lg lg:max-w-lg mb-10">Ready to experience the power of our Swin Drinks? Connect with our team to schedule a personalized demo. We're here to answer your questions and showcase how our solution can benefit you.</p>
            <div class="flex">
                <img src="src/assets/images/email.svg"/>
                <a class="swin-text lg:text-left">help@swinapp.com</a>
            </div>
            
        </div>
        <div class="justify-self-end grid">
            <div class="flex gap-2">
                <input type="text" class="p-3 px-7 w-fit h-fit rounded-t-lg slogan-bg" placeholder="Given name">
            </div>
            <div>
                <p class="swin-text lg:text-lg lg:max-w-lg mb-2">Business</p>
                <div class="flex swin-text lg:text-lg lg:max-w-lg gap-2">
                    <p><input type="radio"><span>Bar</span></p>
                    <p><input type="radio"><span>Event</span></p>
                    <p><input type="radio"><span>Promoter</span></p>
                    <p><input type="radio"><span>Other</span></p>
                </div>
            </div>
            <div class="flex gap-2">
                <input type="text" class="p-3 px-7 w-fit h-fit rounded-t-lg slogan-bg" placeholder="Business name">
            </div>
            <div>
                <p class="swin-text lg:text-lg lg:max-w-lg mb-2">Most interested in:</p>
                <div class="flex swin-text lg:text-lg lg:max-w-lg gap-2">
                    <p><input type="radio"><span>Increase Sales</span></p>
                    <p><input type="radio"><span>Live Stats</span></p>
                </div>
                <div class="flex swin-text lg:text-lg lg:max-w-lg gap-2">
                    <p><input type="radio"><span>Event Management</span></p>
                </div>
            </div>
            <div class="flex gap-2">
                <textarea type="text" class=" p-3 px-7 w-fit h-fit rounded-t-lg slogan-bg" rows="5" cols="50" placeholder="Updates in your inbox…"></textarea>
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
        </div>
    </div>
    
    <p class="text-center border-t-[1px] self-end py-4 swin-text">Copyright 2023. All Rights Reserved</p>
</template>

<script setup lang="ts">
   import TitleComponent from '@/components/TitleComponent.vue'; 
</script>