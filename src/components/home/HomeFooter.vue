<template>
  <footer id="footer" class="d-flex justify-content-center align-items-center">
    <ul
      class="d-flex pl-0 footer-actions justify-content-center align-items-center"
    >
      <li>
        <p class="footer-copyrights mb-0">&copy; 2021 Kasuma</p>
      </li>
      <li>
        <router-link to="/">Privacy Policy</router-link>
      </li>
      <li>
        <router-link to="/">Terms and Conditions</router-link>
      </li>
      <li>
        <router-link to="/">Cookie Settings</router-link>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/shared/mixins.scss";
@import "@/scss/colors.scss";
#footer {
  flex-wrap: wrap;
  font-size: 0.75em;
  @include phone-screen() {
    font-size: 0.65em;
  }
  @include tablet-screen() {
    font-size: 0.65em;
  }
  @include space-mono-font();
  .footer-copyrights {
    color: $white;
    color: $text-ash;
  }
  .footer-actions {
    list-style: none;
    flex-wrap: wrap;
    li {
      padding-left: 10px;
      padding-right: 8px;
      position: relative;
      a {
        color: $white;
        &:hover {
          text-decoration: none;
        }
      }
    }
    li:nth-of-type(n + 2) {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 44%;
        height: 2px;
        width: 2px;
        border-radius: 50%;
        background-color: $white;
      }
    }
  }
}
</style>
