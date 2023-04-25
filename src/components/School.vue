<template>
    <div class="bg-[#FAF5EE] container md:w-[18rem] lg:w-[24.5rem]">
        <div class="px-5 py-6 school md:h-[27.5rem] lg:h-auto">
            <h3 class="md:text-[1.375rem] text-lg leading-8 font-inter font-semibold">{{ school }}</h3>
            <p class="font-medium md:text-base text-xs mt-6 mb-16">{{ description }}</p>
            <CtaLink text="View Courses" />
        </div>
    </div>
</template>

<script setup>
import CtaLink from './CtaLink.vue';
const props = defineProps({
    school: String,
    description: String,
}); 

</script>

<style scoped>
.container {
    position: relative;
    z-index: 1;
}
.school {
    position: relative;
}
.school::before {
  content: "";
  width: 95%;
  height: 90%;
  position: absolute;
  z-index: -1;
  bottom: -20px;
  left: -12px;
  border-width: 0px 0px 2.4px 2.4px;
  border-style: solid;
  border-color: #000000;
}
</style>