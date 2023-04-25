<template>
  <div class="h-full min-w-[22.875rem]">
    <div
      class="flex flex-col-reverse justify-between py-6 pl-[0.625rem] pr-[1.375rem] h-full w-full bg-[#FAF5EE]"
    >
      <div class="flex gap-[10px] items-center">
        <img :src="image" :alt="name" class="w-[56px] h-[56px] md:w-auto md:h-auto" />
        <h4 class="md:text-lg text-base font-bold text-bodyTextColor">{{ name }}</h4>
      </div>
      <p class="md:text-base text-xs font-medium text-bodyTextColor">{{ testimonial }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  image: String,
  testimonial: String,
});
</script>

<style scoped></style>
