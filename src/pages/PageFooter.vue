<template>
    <div class="py-20 lg:pt-[175px] lg:pb-[120px] px-4 lg:px-[152px]">
        <div class="grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-20 footer-color footer" id="contact_us">
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
                        <p><input type="radio"><span class="ml-2">Event</span></p>
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
                <MainButton text="Tet in touch" class="drop w-[100%] lg:w-fit" />
            </div>
        </div>
    </div>
    <div class="grid lg:flex lg:justify-around items-center grid-col px-4 md:px-20 lg:px-[152px] xl:px-40 mb-10 footer-color">
        <div class="text-center grid grid-col lg:flex lg:gap-4">
            <a class="pb-6 lg:pb-0 underline ">Terms of Use</a>    
            <a class="pb-6 lg:pb-0 underline">Privacy Policy</a>    
            <a class="underline">Cookie Policy</a>    
        </div>
        <div class="text-center mt-10 lg:mt-0 lg:flex lg:gap-4">
            <p class="footer-color text-2xl lg:text-3xl font-semibold">Swin in</p>
            <div class="flex justify-center lg:-mt-2 ">
                <img src="../assets/images/facebook.svg" alt="">
                <img src="../assets/images/instagram.svg" alt="">
                <img src="../assets/images/linkedin.svg" alt="">
                <img src="../assets/images/social.svg" alt="">
            </div>
        </div>
    </div>
    <p class="text-center border-t-[1px] font-normal text-sm py-4 swin-text">Copyright 2022 SwinApp all rights reserved</p>
</template>

<script setup lang="ts">
    import MainButton from '@/components/MainButton.vue';
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