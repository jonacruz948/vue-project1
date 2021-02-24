<template>
  <div class="p-4 linkedin-wrapper linkedin-wrapper--bordered">
    <img
      class="linkedin-avatar"
      :src="getAvatar(testimonial.avatar)"
      :alt="testimonial.avatar"
    />
    <p class="linkedin-member-message mt-1">
      {{ testimonial.message }}
    </p>
    <div class="divider mt-5 mb-4"></div>
    <p class="linkedin-member mb-1">{{ testimonial.name }}</p>
    <p class="linkedin-member-title">{{ testimonial.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  },
  methods: {
    getAvatar(name) {
      return require("@/assets/" + name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/shared/mixins.scss";
@import "../../scss/colors.scss";

.linkedin-wrapper {
  @include space-mono-font();
  color: $white;

  &--bordered {
    border: $border-ash;
    border-radius: 5px;
  }

  .linkedin-avatar {
    height: 7em;
    width: 7em;
    border-radius: 50%;
    margin: 20px;
  }

  .divider {
    height: 3px;
    width: 5em;
    border-radius: 3px;
    margin: auto;
    background-color: $white;
  }
}
</style>
