<template>
  <div class="mt-5">
    <title-header class="mb-4" :title="'Join the Kusama Ecosystem'" />
    <div
      class="d-flex flex-wrap justify-content-start justify-content-lg-between pt-5 pb-5"
    >
      <router-link
        class="icon-wrapper"
        v-for="item in experiances"
        :key="item.id"
        to="/"
      >
        <img class="icon" :src="getIcon(item.image)" alt="" />
        <div class="text">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import TitleHeader from "./TitleHeader";
export default {
  data() {
    return {
      experiances: [
        {
          id: 1,
          title: "Polkadot",
          image: "polkadot.png"
        },
        {
          id: 2,
          title: "Acala",
          image: "acala.png"
        },
        {
          id: 3,
          title: "Chainlink",
          image: "chainlink.png"
        },
        {
          id: 4,
          title: "Moonbeam",
          image: "moonbeam.png"
        },
        {
          id: 5,
          title: "Phala",
          image: "phala.svg"
        },
        {
          id: 1,
          title: "Edgeware",
          image: "edgeware.svg"
        }
      ]
    };
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name);
    }
  },
  components: {
    TitleHeader
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/shared/mixins.scss";
@import "../../scss/colors.scss";
.icon-wrapper {
  .icon {
    height: 3em;
    width: 3em;
    margin: 1em;
  }

  .text {
    color: $white;
    @include space-mono-font();
  }
}
</style>
