<template>
    <div class="lg:px-[270px] md:px-[100px] px-8 pt-24 pb-14 bg-[#202054]">
        <div class="flex lg:gap-8 flex-wrap md:gap-4 gap-8 mb-32">
            <div>
              <img src="../assets/Axia-logo.svg" alt="Axia logo" />
              <p class="md:text-base text-sm text-[#EBEBEB] mt-5 mb-7 mr-11">An organization that is focused on equipping<br /> African youths with the knowledge and skills needed<br /> in the tech space.</p>
              <div class="text-white flex gap-5">
                <a href="https://www.linkedin.com/company/axiaafrica" target="_blank">
                  <img src="../assets/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/axiaafrica" target="_blank">
                  <img src="../assets/twitter.svg" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/axiaafrica/" target="_blank">
                  <img src="../assets/instagram.svg" alt="Instagram" />
                </a>
              </div>
            </div>
            <div class="flex gap-8 lg:gap-8 md:gap-4">
              <FooterLinks header="Company" :links="['About', 'Blog', 'FAQs', 'Join Our Community', 'Partnership']" :style="true" />
              <FooterLinks header="Schools" :links="['School of Product', 'School of Data', 'School of Engineering']" :style="true" />
              <div class="hidden lg:block">
                <FooterLinks header="Contact" :links="['axiaafrica@gmail.com', '09015558035']" :style="true" />
              </div>
            </div>
            <div class="lg:hidden">
                <FooterLinks header="Contact" :links="['axiaafrica@gmail.com', '09015558035']" :style="true" />
              </div>
        </div>
        <p class="text-white text-base text-center">© 2023 Axia Africa. All rights reserved.</p>
    </div>
</template>

<script setup>
import FooterLinks from './FooterLinks.vue';
</script>
