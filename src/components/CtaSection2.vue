<template>
  <section class="font-inter lg:px-[270px] md:px-16 px-5 md:py-28 py-16 bg-[#111111] mb-24">
    <div class="md:mx-[150px] lg:mx-0">
        <h2 class="md:text-3xl text-2xl md:leading-[3.375rem] text-white">Foster your tech knowledge</h2>
        <div class="mt-16 mb-12">
            <img src="https://www.axia.africa/_nuxt/foster.96ed8018.png" alt="Career" class="md:w-[400px] w-full h-[14rem] object-cover md:h-[10rem] lg:h-auto lg:w-auto">
        </div>
        <p class="md:text-base text-sm text-[#EBEBEB] font-medium mb-20">Don’t just wait around, Register and join our students ready to enroll<br /> and kick start their tech career.</p>
        <Button text="Apply Now" :style="false" color="custom-btn" />
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue';
</script>

<style scoped></style>
