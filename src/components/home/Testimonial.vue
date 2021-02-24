<template>
  <div class="mt-5">
    <title-header class="mb-4" :title="'Testimonials'" />
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
#recommendators {
  ul {
    list-style: none;
  }
}
</style>
