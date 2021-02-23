import Home from "../../views/Home.vue";
import index from "../../views/home/Index.vue";
export default {
  path: "/",
  name: "Home",
  component: Home,
  children: [
    {
      path: "/",
      component: index,
      name: "home"
    }
  ]
};
