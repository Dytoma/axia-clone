<template>
    <div class="fixed bg-white z-50 inset-0 h-screen md:hidden p-6">
        <div class="flex justify-end mb-28">
            <img src="../assets/icon-x.svg" alt="Back" @click="closeOpen" >
        </div>
        <div class="flex flex-wrap gap-10 text-bodyTextColor">
            <FooterLinks header="Schools" :links="['School of Product', 'School of Data', 'School of Engineering']" :style="false" />
            <FooterLinks header="Company" :links="['About', 'FAQs', 'Join the Community', 'Partnership']" :style="false" />
            <FooterLinks header="Help" :links="['axiaafrica@gmail.com', '09015558035']" :style="false" />
        </div>
    </div>
</template>

<script>
import FooterLinks from './FooterLinks.vue'

export default {
    name: "MobileMenu",
    components: {
        FooterLinks
    },
    props: {
        menu: Boolean
    },
    data() {
        return {
            closeMenu: true
        }
    },
    methods: {
        closeOpen() {
            const menuClose = false;
            this.$emit('close', menuClose);
        }
    }
}
</script>

<style scoped>
</style>