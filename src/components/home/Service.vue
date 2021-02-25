<template>
  <div class="py-lg-5 pb-5 row">
    <div class="col-sm-12 col-md-6">
      <h3 class="service-heading py-md-4 text-left">
        Parachains and Applications
      </h3>
    </div>
    <div class="col-sm-12 col-md-6">
      <ul class="service-list d-flex flex-column pl-lg-0 pl-5 py-4 text-left">
        <li
          v-for="(service, index) in services"
          :key="index"
          class="service-list__item px-4 mb-3"
        >
          {{ service }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const services = ref([
      "Gaming and eSports",
      "Messaging",
      "DAO",
      "Marketplaces",
      "Oracles",
      "Music",
      "Social Networking"
    ]);
    return {
      services
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/shared/mixins.scss";
@import "@/scss/colors.scss";

.service-heading {
  color: $white;
  font-size: 1.75em;
  font-weight: 600;
  line-height: 2;
  @include phone-screen() {
    font-size: 1.5em;
  }
  @include tablet-screen() {
    font-size: 1.5em;
  }
}

.service-list {
  list-style: none;
  &__item {
    @include space-mono-font();
    font-size: 1.4em;
    line-height: 2;
    color: $white;
    @include phone-screen() {
      font-size: 1.25em;
    }
    @include tablet-screen() {
      font-size: 1.25em;
    }
  }
}
</style>
