<template>
  <div v-text="title" />
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
div {
  font-size: 35px;
  color: $white;
  width: 100%;
}
</style>
