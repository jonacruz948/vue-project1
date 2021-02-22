<template>
  <div id="top-nav" class="d-flex align-center justify-space-between">
    <section class="kusama-logo">
      <router-link to="/"
        ><img src="../../assets/kusama-logo.svg" alt="kusama-logo" width="120"
      /></router-link>
    </section>
    <section class="action-buttons d-flex align-center">
      <router-link to="/" class="link"> Guide </router-link>
      <router-link to="/" class="link"> Claim KSM </router-link>
      <router-link to="/" class="link"> Blog </router-link>
      <a class="mdi mdi-twitter link icon" href="https://twitter.com/"> </a>
      <a class="mdi mdi-discord link icon" href="https://discord.com/"> </a>
      <a class="mdi mdi-github link icon" href="https://github.com/"> </a>
      <custom-button v-text="'Start Building'" class="button" />
    </section>
  </div>
</template>

<script>
import CustomButton from "../custom-components/CustomButton.vue";
export default {
  components: {
    CustomButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
@import "../../scss/shared/mixins.scss";
#top-nav {
  border-bottom: $border-ash;
  padding: 15px 140px;
  position: fixed;
  background: $background-color-black;
  top: 0;
  right: 0;
  left: 0;
  .link {
    @include space-mono-font();
    color: $text-ash;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.1em;
    &:hover {
      color: $hover-text-color;
    }
  }
  .icon {
    font-size: 1.3em;
  }
  .button {
    margin-left: 25px;
  }
}
</style>
