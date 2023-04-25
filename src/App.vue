<template>
  <div class=" bg-bgColor md:pt-[101px] pt-20">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
  
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'; 
import Footer from './components/Footer.vue';

</script>

<style scoped></style>
