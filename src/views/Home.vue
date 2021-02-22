<template>
  <div class="home">
    <top-nav />
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";
export default {
  name: "Home",
  components: {
    TopNav
  }
};
</script>
<style lang="scss" scoped>
@import "../scss/colors.scss";
.home {
  background-color: $background-color-black;
  min-height: 100vh;
  height: 100%;
}
</style>
