<template>
  <div>
    <h3 :class="`font-bold ${style ? 'text-white' : 'text-bodyTextColor'} md:text-lg text-base uppercase`">{{ header }}</h3>
    <ul class="flex flex-col gap-8 mt-11">
      <li v-for="link of links" :class="`md:text-base ${style ? 'text-white' : 'text-bodyTextColor'} text-sm font-medium`">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  header: String,
  links: Array,
  style: Boolean
});
</script>

<style scoped>
.text {
    color: #111111;
}
</style>
