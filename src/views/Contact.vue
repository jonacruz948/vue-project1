<template>
  <div class="contact">
    <top-nav />
  </div>
</template>

<script>
import TopNav from "@/components/home/TopNav.vue";

export default {
  name: "Contact",
  components: { TopNav },
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/colors.scss";
@import "../scss/shared/mixins.scss";

.contact {
  background-color: $background-color-black;
  // min-height: 100vh;
  padding-top: 4rem;
  height: 100%;
  @include phone-screen {
    padding-top: 6rem;
  }
}
</style>
