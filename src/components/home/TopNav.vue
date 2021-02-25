<template>
  <div id="top-nav" class="navbar navbar-expand-lg navbar-dark fixed-top">
    <section class="container">
      <section class="navbar-brand kusama-logo">
        <router-link to="/"
          ><img :src="image" alt="kusama-logo" width="120"
        /></router-link>
      </section>
      <button
        class="navbar-toggler border-0 p-0"
        type="button"
        data-toggle="collapse"
        data-target="#main-navigation"
        aria-controls="main-navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          class="icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z"
            fill="#fff"
          ></path>
        </svg>
      </button>
      <section
        id="main-navigation"
        class="collapse navbar-collapse action-buttons text-left overflow-auto"
      >
        <div class="d-flex ml-auto py-2">
          <ul class="d-flex flex-row navbar-nav">
            <li>
              <router-link to="/" class="link nav-item"> Home</router-link>
            </li>
            <li>
              <router-link to="/" class="link nav-item">
                Portfolio
              </router-link>
            </li>
          </ul>
          <div class="social-media">
            <ul class="d-flex mb-0 pl-0">
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
        </div>
        <router-link :to="{ name: 'Contact' }">
          <custom-button v-text="'Contact'" class="button ml-lg-3 mr-1" />
        </router-link>
      </section>
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
  background: $background-color-black;

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

  li {
    list-style-type: none;
  }

  .action-buttons {
    @include phone-screen {
      font-size: 0.825em;
    }

    .button {
      border-radius: 0px;
      font-size: 0.75em;
      padding: 8px 25px;
      @include phone-screen {
        font-size: 1em;
        padding: 5px 10px;
      }
    }
  }
}
</style>
