<template>
  <div class="service-item">
    <div class="item-header d-flex">
      <div class="item-icon">
        =
      </div>
      <div class="item-title">
        Fast Iteration
      </div>
    </div>
    <div class="item-body text-left">
      <p>Move fast and ship your product. Kusama’s risk-taking and nimble mentality allows developers to move swiftly through the governance and upgrade process, enabling rapid progress and growth.</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/scss/shared/mixins.scss";
@import "@/scss/colors.scss";

.service-item {
  .item-icon {
    color: $white;
    font-size: 50px;
    @include phone-screen () {
      font-size: 35px;
    }
  }
  .item-title{
    padding-left: 15px;
    color: $white;
    line-height: 2.5;
    font-size: 1.85em;
    @include phone-screen () {
      font-size: 1.5em;
    }
  }
  .item-body {
    color: $paragraph-text;
    word-spacing: 5px;
    font-size: 1.125em;
    line-height: 1.5;
    @include space-mono-font();
  }
}
</style>