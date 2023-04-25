<template>
  <div class="container font-inter w-full md:w-[300px]">
    <div class="bg-[#FAF5EE] background-svg">
      <div class="w-full">
        <img :src="image" :alt="title" class="w-full h-[8rem] md:h-[14.5625rem]"/>
      </div>
      <div class="p-5">
        <div>
          <h3 class="md:text-xl text-lg font-inter font-semibold text-[#111111]">{{ title }}</h3>
          <p class="text-bodyTextColor font-inter font-medium md:text-sm text-xs leading-6 mt-3 mb-7">
            {{ description }}
          </p>
        </div>
        <CtaLink text="Enrol Now" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CtaLink from "./CtaLink.vue";

const props = defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<style scoped>
.container {
  position: relative;
  z-index: 1;
}
.background-svg {
  position: relative;
}
.background-svg::before {
  content: "";
  width: 95%;
  height: 90%;
  position: absolute;
  z-index: -1;
  bottom: -20px;
  right: 2rem;
  border-width: 2.4px 0px 2.4px 2.4px;
  border-style: solid;
  border-color: #000000;
}
</style>
