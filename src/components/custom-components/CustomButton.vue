<template>
  <button
    id="btn"
    :class="{
      btn: true,
      'btn-disabled': loading || disabled,
    }"
    :disabled="loading || disabled"
  >
    <div v-if="!loading" class="text">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";

.btn {
  padding: 10px 15px;
  outline: none;
  background: transparent;
  color: $pink;
  font-size: 0.8em;
  cursor: pointer;
  border: 2px solid $pink;
  &:hover {
    color: $button-hover-color;
    border-color: $button-hover-color;
  }
  &:active {
    transform: scale(1.04, 1.03);
  }
}
.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
