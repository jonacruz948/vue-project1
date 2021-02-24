<template>
  <router-link class="icon-wrapper" :to="icon.path">
    <img class="icon" :src="getIcon(icon.image)" :alt="icon.image" />
    <div class="text">{{ icon.title }}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  },
  methods: {
    getIcon(name) {
      return require("@/assets/icons/" + name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/shared/mixins.scss";
@import "../../scss/colors.scss";
.icon-wrapper {
  &:hover {
    text-decoration: none;
  }
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
