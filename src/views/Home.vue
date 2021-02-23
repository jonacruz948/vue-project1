<template>
  <div class="home">
    <top-nav />
    <router-view />
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
@import "../scss/shared/mixins.scss";
.home {
  background-color: $background-color-black;
  // min-height: 100vh;
  padding-top: 4rem;
  height: 100%;
  @include phone-screen {
    padding-top: 6rem;
  }
}
</style>
