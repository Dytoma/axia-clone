<template>
  <nav
    class="fixed top-0 left-0 right-0 md:h-[101px] py-4 z-30 flex justify-center items-center bg-bgColor"
  >
    <div
      class="lg:px-[270px] md:px-[10rem] px-6 flex justify-between items-center my-auto w-full text-base text-black font-inter"
    >
      <div class="flex justify-between w-full md:w-auto">
        <RouterLink :to="{ name: 'home' }">
          <img
            src="https://www.axia.africa/_nuxt/logo.a67befb6.svg"
            alt="Logo"
            class="w-[78px] h-[30px] md:w-auto md:h-auto"
          />
        </RouterLink>
        <div class="block md:hidden cursor-pointer" >
          <img src="../assets/menu.svg" alt="menu icon" @click="show" />
        </div>
      </div>
      <div class="hidden lg:block">
        <ul class="flex items-center gap-7">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <div class="dropdown relative cursor-pointer">
              <div class="flex gap-[6px] items-center">
                <p class="font-medium">Schools</p>
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
              </div>
              <div class="dropdown-links shadow-xl">
                <RouterLink to="/schools/product">
                  <span class="font-medium">School of Product</span>
                </RouterLink>
                <RouterLink to="/schools/engineering"
                  ><span class="font-medium"
                    >School of Engineering</span
                  ></RouterLink
                >
                <RouterLink to="/schools/data"
                  ><span class="font-medium">School of Data</span></RouterLink
                >
              </div>
            </div>
          </li>
          <li class="cursor-pointer font-medium">Join Our Community</li>
          <li>
            <div class="dropdown relative cursor-pointer">
              <div class="flex gap-[6px] items-center">
                <p class="font-medium">Help</p>
                <font-awesome-icon icon="fa-solid fa-chevron-down" />
              </div>
              <div class="dropdown-links shadow-xl">
                <RouterLink to="/faqs">
                  <span class="font-medium">FAQs</span>
                </RouterLink>
                <p class="font-medium">Contact Us</p>
              </div> 
            </div>
          </li>
        </ul>
      </div>
      <div class="hidden md:block">
        <Button text="Apply Now" :style="true" color="bg-white" />
      </div>
    </div>
  </nav>
  <div v-if="showMenu">
    <MobileMenu :menu="showMenu" @close="showMobileMenu" />
  </div>
</template>

<script>
import Button from "./Button.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "Navbar",
  components: {
    Button,
    MobileMenu
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    show() {
      console.log(this.showMenu);
      this.showMenu = !this.showMenu
    },
    showMobileMenu(menuClose) {
      this.showMenu = menuClose
    }
  }
}

</script>

<style scoped>
.dropdown-links {
  display: none;
  position: relative;
}
.dropdown:hover .dropdown-links {
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1.25rem;
  background-color: white;
  width: 200px;
}
</style>
