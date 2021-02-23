<template>
  <div id="top-nav" class="d-flex align-center justify-space-between">
    <section class="kusama-logo">
      <router-link to="/"
        ><img :src="image" alt="kusama-logo" width="120"
      /></router-link>
    </section>
    <section class="action-buttons d-flex align-center">
      <nav>
        <ul class="d-flex">
          <li><router-link to="/" class="link"> Home </router-link></li>
          <li><router-link to="/" class="link"> Portfolio </router-link></li>
          <li><router-link to="/" class="link"> Contact </router-link></li>
        </ul>
      </nav>
      <div class="social-media">
        <ul class="d-flex">
           <li>
            <a
              class="mdi mdi-github link icon"
              id="github"
              href="https://github.com/"
            >
            </a>
          </li>
          <li>
            <a
              class="mdi mdi-linkedin link icon"
              id="linkedin"
              href="https://linkedin.com/"
            >
            </a>
          </li>
         
        </ul>
      </div>
      <custom-button v-text="'Start Building'" class="button" />
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import CustomButton from "../custom-components/CustomButton.vue";
import img from "../../assets/kusama-logo.svg";
export default {
  components: {
    CustomButton
  },
  setup() {
    let image = ref(img);
    return { image };
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
@import "../../scss/shared/mixins.scss";
#top-nav {
  border-bottom: $border-ash;
  padding: 17px 140px;
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
  li {
    list-style-type: none;
  }
}
</style>
