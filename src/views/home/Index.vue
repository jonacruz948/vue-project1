<template>
  <div>
    <section>
      <img
        src="../../assets/kusama_animation.gif"
        alt="kusama animation"
        width="900"
      />
      <div class="typewriter_text">
        <custom-type-writer :words="words" />
      </div>
      <div class="subscribe-action">
        <custom-button v-text="'Subscribe for Updates'" class="button" />
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import CustomButton from "@/components/custom-components/CustomButton.vue";
import CustomTypeWriter from "@/components/custom-components/CustomTypeWriter.vue";
export default {
  components: {
    CustomButton,
    CustomTypeWriter,
  },
  setup() {
    let words = ref([
      "Expect chaos.",
      "No promises.",
      "Polkadot's wild cousin.",
      "A canary network.",
      "A Polkadot experiment",
    ]);
    return {
      words,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
.typewriter_text {
  color: $white;
  font-weight: bold;
  font-family: helvetica;
  font-size: 30px;
  margin-bottom: 70px;
}
</style>
