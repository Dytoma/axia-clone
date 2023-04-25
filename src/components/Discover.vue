<template>
    <section class="lg:pt-24 pb-40">
        <div class="lg:ml-[270px] md:mx-16 px-5 relative lg:mr-[10rem] mb-28 pt-24 md:pt-0">
            <h2 class="md:text-4xl text-2xl font-medium font-inter">Discover the right school for your journey</h2>
            <p class="font-medium font-inter md:text-base text-sm text-bodyTextColor leading-7 mt-6">Axia Africa offers you the chance to explore schools which has variety of courses to<br /> learn from, like product design, Front end,</p>
            <div class="absolute right-0 top-0">
                <img src="../assets/asset-2.svg" alt="Decoration" aria-hidden="true" class="w-[230px] h-[86px] md:w-auto md:h-auto asset-animate" >
            </div>
        </div>
        <div class="lg:mx-[270px] md:mx-16 mx-5 flex flex-col md:flex-row md:flex-wrap md:justify-between gap-24 md:gap-x-16 lg:gap-x-20 md:gap-y-32 items-center lg:justify-center">
            <School school="Schools of Product" description="We offer you Product courses such as Product Design,Product management and Product marketing by equipping you with the right trainings and guidelines. Become a world class personnel and job-ready candidate in the product field." />
            <School school="Schools of Systems Engineering" description="Begin your learning process in Front-End Web Development, Back-End Web Development and more. Discover career opportunities available for you. Speak to professionals and read through materials and the programme designed specifically for you." />
            <School school="Schools of Data" description="Even as a newbie in the data analysis space, you can jumpstart your journey and hone your skills by kicking it off with the Axia Africa School of Data Analysis." />
        </div>
    </section>
</template>

<script setup>
import School from './School.vue';
</script>

<style scoped>
.asset-animate {
  animation: asset 5s ease-in-out infinite;
}
@keyframes asset {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(24px);
  }
  
  100% {
    transform: translateY(0);
  }
}
</style>