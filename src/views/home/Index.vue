<template>
  <div class="index container">
    <section class="hero-ui">
      <div class="hero-image position-relative">
        <img src="../../assets/kusama_animation.gif" alt="kusama animation" />
        <div class="typewriter_text">
          <custom-type-writer :words="words" />
        </div>
      </div>
      <div class="subscribe-action">
        <custom-button
          v-text="'Subscribe for Updates'"
          class="button rounded-0"
        />
      </div>
    </section>
    <section class="portfolio-ui">
      <portfolio />
    </section>
    <section class="previous-experience py-5">
      <previous-experience />
    </section>
    <section class="services-ui">
      <service />
    </section>
    <section class="testimonials-ui">
      <testimonial />
    </section>
    <section class="previous-experience py-5">
      <previous-experience />
    </section>
    <section class="newsletter-ui py-5">
      <newsletter />
    </section>
    <home-footer />
  </div>
</template>

<script>
import { ref } from "vue";
import CustomButton from "@/components/custom-components/CustomButton.vue";
import CustomTypeWriter from "@/components/custom-components/CustomTypeWriter.vue";
import Portfolio from "../../components/home/Portfolio.vue";
import PreviousExperience from "../../components/home/PreviousExperience.vue";
import Service from "../../components/home/Service.vue";
import Testimonial from "../../components/home/Testimonial.vue";
import Newsletter from "../../components/home/Newsletter.vue";
import HomeFooter from '../../components/home/HomeFooter.vue';
export default {
  components: {
    CustomButton,
    CustomTypeWriter,
    Portfolio,
    PreviousExperience,
    Service,
    Testimonial,
    Newsletter,
    HomeFooter
  },
  setup() {
    let words = ref([
      "Expect chaos.",
      "No promises.",
      "Polkadot's wild cousin.",
      "A canary network.",
      "A Polkadot experiment"
    ]);
    return {
      words
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
@import "../../scss/shared/mixins.scss";
.index {
  background-color: $background-color-black;
}
.typewriter_text {
  color: $white;
  font-weight: bold;
  font-family: helvetica;
  font-size: 30px;
  position: absolute;
  left: 50%;
  bottom: 60px;
  transform: translate(-50%);
  white-space: nowrap;
  @include phone-screen {
    bottom: 20px;
    font-size: 1.4em;
  }
  @include tablet-screen {
    bottom: 25px;
    font-size: 1.5em;
  }
}
.hero-ui {
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  @include phone-screen {
    min-height: calc(100vh - 6rem);
    padding-bottom: 6rem;
  }
  .hero-image {
    margin-bottom: 35px;
  }
  img {
    width: 100%;
    max-width: 900px;
  }

  .subscribe-action {
    .button {
      @include phone-screen {
        padding: 6px 16px;
        font-size: 0.9em;
      }
    }
  }
}
</style>
