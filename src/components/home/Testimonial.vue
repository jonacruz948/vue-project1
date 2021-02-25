<template>
  <div class="row mt-5">
    <div class="col-sm-12">
      <title-header class="mb-4 text-left" :title="'Participant\'s say'" />
      <div id="recommendators" class="py-lg-5">
        <ul class="d-flex row p-0">
          <li
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="col-sm-12 col-md-6 col-lg-4 mt-4 px-3 mt-lg-0 mx-auto"
          >
            <testimonial-card :testimonial="testimonial" />
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-8 mx-auto questions-info py-4">
      <h3 class="mb-4 questions-info__title">Got a question for us?</h3>
      <p class="questions-info__message mt-2">
        Questions? interested for selling product or buying in the unique
        platform but need to understand how we work or need to talk?
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TitleHeader from "./TitleHeader";
import TestimonialCard from "./TestimonialCard";
export default {
  setup() {
    const testimonials = ref([
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
    ]);
    return {
      testimonials
    };
  },
  components: {
    TitleHeader,
    TestimonialCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/shared/mixins.scss";
@import "@/scss/colors.scss";

#recommendators {
  ul {
    list-style: none;
  }
}

.questions-info {
  &__title {
    color: $white;
    font-size: 2em;
    line-height: 2;
    @include phone-screen() {
      font-size: 1.5em;
    }
    @include tablet-screen() {
      font-size: 1.5em;
    }
  }
  &__message {
    color: $white;
    font-size: 1em;
    line-height: 1.8;
    @include space-mono-font();
    @include phone-screen() {
      font-size: 0.9em;
    }
    @include tablet-screen() {
      font-size: 0.9em;
    }
  }
}
</style>
