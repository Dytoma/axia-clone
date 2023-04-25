<template>
  <section class="md:mt-[5.625rem] relative mb-[222px] flex flex-col gap-y-10 md:gap-0 md:block">
    <div class="lg:px-[270px] md:px-16 px-8">
      <div class="font-inter lg:w-[560px] text-center">
        <h1 class="font-bold md:text-[2.625rem] text-2xl md:leading-[3rem]">
          Accelerate your career with
          <span class="text-gradient">Job-ready</span> tech skills.
        </h1>
        <div class="space-y-1 mt-7 mb-12">
          <p class="text-base leading-7 lg:pr-28">
            Begin your tech journey and expand your career<br /> opportunities in the tech space by learning tech skills in demand.
          </p>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div>
            <Button text="Apply Now" :style="true" color="bg-white" />
          </div>
          <CtaLink text="Speak with an Advisor" />
        </div>
      </div>
    </div>
    <div class="md:absolute mx-auto md:mx-0 top-0 lg:right-[144px] md:right-16">
      <img
        src="https://www.axia.africa/_nuxt/hero.0d0e9f28.svg"
        alt="Banner image"
        class="w-[81.4vw] h-[244px] md:w-[438px] md:h-[316px] lg:w-auto lg:h-auto"
      />
    </div>
    <div class="pt-[70px] hidden md:block lg:pl-[10rem] md:pl-16">
      <img
        src="../assets/dotes.svg"
        alt="asset"
        aria-hidden="true"
        class="asset-animate md:w-[230px] md:h-[86px] lg:w-auto lg:h-auto"
      />
    </div>
  </section>
</template>

<script setup>
import Button from "./Button.vue";
import CtaLink from './CtaLink.vue';
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(65deg, #ab2638 0%, #f0b73f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.asset-animate {
  animation: asset 5s ease-in-out infinite;
}
@keyframes asset {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-24px);
  }
  
  100% {
    transform: translateY(0);
  }
}
</style>
