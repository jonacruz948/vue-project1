<template>
  <div class="row justify-content-center">
    <div class="col-md-5 px-5 newsletter">
      <title-header class="mb-4" :title="'Stay in the loop'" />
      <p class="newsletter__body text-center">
        Subscribe to the newsletter to hear more about kusamaupdates and events.
      </p>
      <custom-button
        v-text="'Subscribe'"
        class="button rounded-0 newsletter__action mt-2"
      />
      <p class="newsletter__info pt-4">
        To see how we use your information please see our
        <router-link class="newsletter__info--link" to="/"
          >privacy policy</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import TitleHeader from "./TitleHeader";
import CustomButton from "@/components/custom-components/CustomButton";
export default {
  components: {
    TitleHeader,
    CustomButton
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/shared/mixins.scss";
@import "@/scss/colors.scss";

.newsletter {
  &__body {
    @include space-mono-font();
    color: $white;
    font-size: 1em;
  }
  &__info {
    @include space-mono-font();
    color: $text-ash;
    font-size: 0.875em;
    &--link {
      color: $white;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
