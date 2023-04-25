<template>
    <section class="lg:px-[270px] md:px-16 px-5 md:py-28 py-14 bg-[#111111] md:mb-24" id="about">
        <div>
            <h2 class="md:text-4xl text-2xl font-medium lg:leading-[3.375rem] text-white">Get onboard with us</h2>
            <div class="flex gap-20 flex-col-reverse md:flex-col lg:flex-row justify-between md:mt-[5.625rem] mt-16">
                <div class="w-full md:w-auto">
                    <img src="../assets/onboard.png" alt="Onboard" class="lg:h-[25.75rem] lg:min-w-[33.75rem] md:min-w-[330px] md:h-[238px] min-w-full">
                </div>
                <div class="flex flex-col gap-10">
                    <img src="../assets/about-svg.svg" alt="Decorative image" aria-hidden="true" class="w-[3.5rem] h-[3.5rem]">
                    <p class="text-[#EBEBEB] md:text-base text-sm md:pr-[50%] lg:pr-0"> Axia Africa is an organization that is focused on equipping African youths with the knowledge and digital skills needed today Our aim is to make tech knowledge accessible to every individual irrespective of age, literacy, and location.<br />  We are looking forward to building a strong community of ready-to-work personnel and employable candidates around the world in the tech space. </p>
                </div>
            </div>
        </div>
        <div class="mt-14">
            <h2 class="text-white md:text-3xl text-2xl md:pl-[6.125rem] pl-[4rem] about-header">Why choose us</h2>
            <p class="text-[#EBEBEB] md:text-base text-sm mt-6"> We at Axia Africa are intentional about our students and focused about building a community. The tech space in Africa is fast growing and we have the necessary programmes to help launch you into that space. We sharpen your skills to give you leverage in your career while navigating the job market </p>
        </div>
    </section>
</template>

<script setup></script>

<style scoped>
.about-header {
    position: relative;
}
.about-header::before {
    content: '';
    position: absolute;
    width: 6%;
    height: 2.4px;
    background: white;
    left: 0;
    top: 0;
    bottom: 0;
    margin-block: auto;
}
</style>