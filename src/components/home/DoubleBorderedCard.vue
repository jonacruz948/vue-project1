<template>
  <div class="bordered-container box-outlines m-3" style="--progress: 50%">
    <h3 v-text="title" class="text-left" />
    <nav>
      <ul>
        <li v-for="(route, index) in routes" :key="index" class="mb-4">
          <router-link
            class="d-flex justify-space-between link align-center p-0"
            :to="route.link"
          >
            <span v-text="route.title" class="route-title col-9 text-left" />
            <span class="mdi mdi-arrow-right icon" />
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    routes: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/colors.scss";
@import "../../scss/shared/mixins.scss";
.box-outlines {
  display: inline-block;
  width: auto;
  position: relative;
  height: 350px;
  padding: 4rem 3rem !important;
}
.box-outlines::before,
.box-outlines::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: solid 2px $pink;
  pointer-events: none;
}
.parallax .box-outlines::after {
  transform: translate3d(
    calc(var(--progress) / 20),
    calc(var(--progress) / 20),
    0
  );
}
.box-outlines::before {
  transform: translate3d(
    calc(var(--progress) / 20 * -1),
    calc(var(--progress) / 20 * -1),
    0
  );
}
h3 {
  font-family: Helvetica;
  font-size: 24.5px;
  color: $white;
  margin: 0px 0px 42px;
  width: 100%;
}
.route-title {
  font: 19.6px;
  @include space-mono-font();
}
li {
  list-style-type: none;
  .link {
    text-decoration: none;
    color: $white;
    font-size: 19.6px;
    &:hover {
      color: $button-hover-color;
    }
  }
}
nav {
  width: 100%;
  ul {
    padding: 0px;
  }
}
</style>
