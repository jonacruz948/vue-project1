<template>
  <div class="mt-5">
    <title-header class="mb-4" :title="'Testimonials'" />
    <div id="recommendators" class="py-lg-5">
      <ul class="d-flex row p-0">
        <li
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="linkedin-wrapper col-sm-12 col-md-6 col-lg-4 mt-4 px-3 mt-lg-0 mx-auto"
        >
          <div class="p-4 linkedin-wrapper--bordered">
            <img
              class="linkedin-avatar"
              src="../../assets/profile-pic.jpg"
              alt=""
            />
            <p class="linkedin-member-message mt-1">
              {{ testimonial.message }}
            </p>
            <div class="divider mt-5 mb-4"></div>
            <p class="linkedin-member mb-1">{{ testimonial.name }}</p>
            <p class="linkedin-member-title">{{ testimonial.title }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TitleHeader from "./TitleHeader";
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          avatar: "profile-pic.jpg",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          name: "Nico Robin",
          title: "Los angeles, California"
        },
        {
          id: 2,
          avatar: "profile-pic.jpg",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          name: "Nico Robin",
          title: "Los angeles, California"
        },
        {
          id: 3,
          avatar: "profile-pic.jpg",
          message:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          name: "Nico Robin",
          title: "Los angeles, California"
        }
      ]
    };
  },
  components: {
    TitleHeader
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/shared/mixins.scss";
@import "../../scss/colors.scss";

#recommendators {
  ul {
    list-style: none;
  }
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
}
</style>
