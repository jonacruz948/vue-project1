<template>
  <div id="features" class="py-lg-5 pb-5 ">
    <div
      :class="{ sticky: isSticky }"
      class="hero-image"
      :style="isSticky ? { top: 200 - moveEndUp + 'px' } : {}"
    >
      <img src="../../assets/mesh.png" />
    </div>
    <div class="row service-container">
      <div class="col-sm-12 col-md-6">
        <h3
          :class="{ sticky: isSticky }"
          class="service-heading py-md-4 text-left"
          :style="isSticky ? { top: 250 - moveEndUp + 'px' } : {}"
        >
          Launch your custom blockchain
        </h3>
      </div>
      <div class="col-sm-12 col-md-6 list-service">
        <feature-item class="py-lg-4" />
        <feature-item class="py-lg-4" />
        <feature-item class="py-lg-4" />
        <feature-item class="py-lg-4" />
        <feature-item class="py-lg-4" />
        <feature-item class="py-lg-4" />
      </div>
    </div>
  </div>
</template>

<script>
import FeatureItem from "./FeatureItem";
export default {
  data() {
    return {
      isSticky: false,
      topPosition: null,
      moveEndUp: 0
    };
  },
  components: {
    FeatureItem
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const features = document.querySelector('#features');
      const featuresContainer = document.querySelector('.service-container');

      this.topPosition = featuresContainer.offsetTop - 230;

      if (window.scrollY < this.topPosition + features.offsetHeight - 600) {
        this.moveEndUp = 0;
      }

      if (this.topPosition && window.scrollY >= this.topPosition) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }

      if (window.scrollY > this.topPosition + features.offsetHeight - 600) {
        this.moveEndUp =
          window.scrollY - (this.topPosition + features.offsetHeight - 600);
      }
    },
    getIcon(name) {
      return require("@/assets/" + name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/shared/mixins.scss";
@import "@/scss/colors.scss";

#features {
  @include phone-screen() {
    position: relative;
  }
  @include tablet-screen() {
    position: relative;
  }
}

.hero-image {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  @include phone-screen() {
    top: -10px !important;
    img {
      width: 250px;
      height: 100%;
    }
  }
  @include tablet-screen() {
    top: 0px !important;
    img {
      width: 300px;
      height: 100%;
    }
  }
}

.hero-image.sticky {
  @include desktop-screen() {
    position: fixed;
    top: 200px;
  }
}

.service-container {
  margin-top: 50px;
  position: relative;
  .service-heading {
    max-width: 400px;
    color: $white;
    font-size: 3em;
    @include phone-screen() {
      font-size: 2em;
    }
  }
  .service-heading.sticky {
    @include desktop-screen() {
      position: fixed;
      top: 250px;
    }
  }
}

.list-service {
  @include desktop-screen() {
    margin-top: 500px;
    margin-bottom: 500px;
  }
  @include phone-screen() {
    margin-top: 70px;
    font-size: 0.8em;
  }
  @include tablet-screen() {
    margin-top: 100px;
  }
}
</style>
