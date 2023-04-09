<template>
    <pageNavbar />



    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_PBgNop.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop controls autoplay></lottie-player>    <PageFooter />

</template>

<script>
import pageNavbar from "@/components/pageNavbar.vue";


export default {
  name: "BlogPage",
  data() {
    return {};
  },

  props: {
    blog: Array,
  },

  components: {
    pageNavbar,
  },
};
</script>

<style></style>