import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

import AddProject from "../views/AddProject.vue";
import editProject from "../components/editProject.vue";

const routes = [
  {
    path: "/add",
    name: "Add",
    component: AddProject,
  },
  {
    path: "/",
    name: "HOME",
    component: Home,
  },
  {
    path: "/edit",
    name: "editProject",
    component: editProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
