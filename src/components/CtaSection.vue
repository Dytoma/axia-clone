<template>
    <section class="lg:px-[270px] md:px-16 px-5 md:py-[9rem] py-20 flex flex-col lg:flex-row gap-[3.625rem] bg-[#202054]">
        <div>
            <h2 class="text-white md:text-4xl text-2xl md:leading-[3.375rem]">Confused about what to learn?</h2>
            <p class="text-[#EBEBEB] text-base leading-7 mt-5 mb-8">Speak with our professional tech advisors to help kick start your tech journey and pilot you to being an expert in your desired field.</p>
            <Button text="Speak with an Advisor" :style="false" color="bg-darkBlue" />
        </div>
        <div class="container">
            <img src="https://www.axia.africa/_nuxt/advisor.525dee5a.svg" alt="Call to action image" class="cta-img w-full h-auto md:w-[330px] md:h-[238px] lg:w-auto lg:h-auto image">
        </div>
    </section>

</template>

<script setup>
import Button from './Button.vue'
</script>

<style scoped>
.container {
    position: relative;
}
/* .cta-img {
    position: inherit;
}
.cta-img::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 95%;
    height: 90%;
    background: #F0B73F;
    right: 0.5rem;
    bottom: -10px;
} */

@media screen and (max-width: 738px) {
    .image {
        max-width: calc(100vw - 40px);
    }
}
</style>