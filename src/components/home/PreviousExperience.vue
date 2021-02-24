<template>
  <div class="mt-5">
    <title-header class="mb-4" :title="'Join the Kusama Ecosystem'" />
    <div
      class="d-flex flex-wrap justify-content-start justify-content-lg-between pt-5 pb-5"
    >
      <icon-box v-for="item in experiances" :key="item.id" :icon="item" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TitleHeader from "./TitleHeader";
import IconBox from "./IconBox";
export default {
  setup() {
    const experiances = ref([
      {
        id: 1,
        title: "Polkadot",
        path: "/",
        image: "polkadot.png"
      },
      {
        id: 2,
        title: "Acala",
        path: "/",
        image: "acala.png"
      },
      {
        id: 3,
        title: "Chainlink",
        path: "/",
        image: "chainlink.png"
      },
      {
        id: 4,
        title: "Moonbeam",
        path: "/",
        image: "moonbeam.png"
      },
      {
        id: 5,
        title: "Phala",
        path: "/",
        image: "phala.svg"
      },
      {
        id: 1,
        title: "Edgeware",
        path: "/",
        image: "edgeware.svg"
      }
    ]);
    return {
      experiances
    };
  },
  components: {
    TitleHeader,
    IconBox
  }
};
</script>
