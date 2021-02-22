<template>
  <div>
    <section>
      <img
        src="../../assets/kusama_animation.gif"
        alt="kusama animation"
        width="1100"
      />
      <div>
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
    let words = ref(["Expect chaos.", "No promises."]);
    return {
      words,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
