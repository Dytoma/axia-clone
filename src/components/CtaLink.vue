<template>
  <div class="flex items-center gap-4 link-hover w-fit cursor-pointer">
    <a href="#" class="md:text-base text-sm font-semibold text-darkBlue underline"
      >{{text}}</a
    >
    <!-- <font-awesome-icon icon="fa-sharp fa-arrow-right" class="w-7" /> -->
    <img
      src="../assets/arrow-r.svg"
      alt="arrow"
      aria-hidden="true"
      class="cursor-pointer"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  text: String
});
</script>

<style scoped>
.link-hover img {
  transition: all 0.4s ease-in-out;
}
.link-hover:hover img {
  transform: translateX(12px);
}
</style>
