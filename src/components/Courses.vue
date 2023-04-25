<template>
  <section class="lg:px-[270px] md:px-16 px-5 pb-40">
    <div class="mb-12">
      <h2 class="font-medium text-4xl mb-6">Courses</h2>
      <p class="paragraph">Here are some courses from our schools that we offer.</p>
      <p class="paragraph">Enroll and kickstart your tech career.</p>
    </div>
    <div class="flex flex-col md:flex-row gap-10 md:justify-between lg:justify-center items-center md:flex-wrap">
        <Course title="Product Design" description="Design user experiences for products in today’s digital world. Build a portfolio that showcases your ability to transform products." image="https://www.axia.africa/assets/images/landing/course1.png" />
        <Course title="Data Analytics" description="Use Python, SQL, and statistics to uncover insights, communicate critical findings, and create data-driven solutions" image="https://www.axia.africa/assets/images/landing/course2.png" />
        <Course title="Front-End Development" description="Begin our front-end development program structured to help students launch a new career in web development." image="https://www.axia.africa/assets/images/landing/course3.png" />
    </div>
  </section>
</template>

<script setup>
import Course from './Course.vue';
</script>

<style scoped>
.paragraph {
    font-size: 1rem;
    line-height: 1.75rem;
}
</style>
