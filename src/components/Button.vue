<template>
  <RouterLink :to="{ name: 'application' }">
    <div class="container">
      <button :class="style ? `font-semibold text-sm md:text-base md:py-4 py-3 px-5 ${color} md:px-6 border-4 border-black btn` : `font-semibold md:py-4 py-3 px-5 md:px-6 border-4 text-sm md:text-base border-white  btn-2 ${color} text-white`">
        {{text}}
      </button>
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  text: String,
  style: Boolean,
  color: String
});
</script>

<style scoped>
.btn {
  position: relative;
  background-color: white;
  transition: all 0.4s ease-in-out;
}
.btn-2 {
  position: relative;
  background-color: #202054;
  transition: all 0.4s ease-in-out;
}
.btn:hover {
  background-color: #202054;
  color: white;
}
.btn-2:hover {
  background-color: white;
  color: #202054;
}
.btn::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 10px;
  left: 10px;
  background: #202054;
  transition: all 0.4s ease-in-out;
}
.btn-2::before {
content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 10px;
  left: 10px;
  background: white;
  transition: all 0.4s ease-in-out;
}
.btn:hover::before, .btn-2:hover::before {
  background: #f0b73f;
}
.container {
  position: relative;
  z-index: 1;
}
.custom-btn {
  background: #111111;
}
.custom-btn:hover {
  color: #111111;
}
</style>
