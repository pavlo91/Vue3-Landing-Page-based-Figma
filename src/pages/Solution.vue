<template>
    <div class="mt-20 grid lg:grid-cols-2 justify-items-center lg:justify-items-start lg:gap-20 xl:gap-20 mb-8 md:mb-12 lg:mb-16 xl:mb-20 px-5 md:px-10 lg:px-20 xl:px-40 solution">
        <ImageItem url="src/assets/images/mobile-solution.svg" class-name="lg:hidden solution-image" img-class="w-[45rem]"/>
        <ImageItem url="src/assets/images/mobile-solution.svg" class-name="lg:block hidden solution-image" img-class="w-fit"/>
        <div class="mt-10 lg:mt-0 max-w-lg box1 text-center lg:text-left flex flex-col items-center lg:items-start solution-text">
            <TitleComponent sub-title="Key Features" main-title="Unlock Powerful Solutions">
            </TitleComponent>
            <div class="mt-12">
                <div v-for="item in solutions" :key="item.iconUrl" class="ml-5 lg:ml-0 lg:gap-5 mb-5">
                    <SolutionItem :icon-url="item.iconUrl" :solution-title="item.solutionTitle" :solution-description="item.solutionDescription"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import MainContainer from '@/components/MainContainer.vue'
    import TitleComponent from '@/components/TitleComponent.vue'
    import ImageItem from '@/components/ImageItem.vue'
    import SolutionItem from '@/components/SolutionItem.vue';

    const solutions = [
        {
            iconUrl: 'src/assets/images/mobile_friendly.svg',
            solutionTitle: 'Mobile Ordering',
            solutionDescription: 'Simplify the ordering process for increased revenue. Allow customers to place orders seamlessly from their mobile devices, contributing to enhanced convenience and boosted sales'
        },
        {
            iconUrl: 'src/assets/images/flash_on.svg',
            solutionTitle: 'Flash Passes',
            solutionDescription: 'Increase your earnings with Flash Passes – a smart way to turn missed chances into profits. Customers skip lines, enjoy a smoother experience, and boost your operational efficiency. Elevate your business with premium access for hassle-free visits.'
        },
        {
            iconUrl: 'src/assets/images/event.svg',
            solutionTitle: 'Event Management',
            solutionDescription: 'Seamlessly create, edit, and manage events with a comprehensive event management system. Keep track of reservations, promotions, and event details in real time'
        },
        {
            iconUrl: 'src/assets/images/bar_chart.svg',
            solutionTitle: 'Live Statistics',
            solutionDescription: 'Access real-time statistics that offer instant insights into sales, customer behavior, and other key metrics, empowering you to make data-driven decisions on the spot.'
        },
    ]
</script>