import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/pages/Home.vue";
import Login from "../components/pages/Login.vue";
import Signup from "../components/pages/Signup.vue";
import Profile from "../components/pages/Profile.vue";
import Easy from '../components/pages/Difficulties/Easy.vue';
import Medium from '../components/pages/Difficulties/Medium.vue';
import Hard from '../components/pages/Difficulties/Hard.vue';
import VeryHard from '../components/pages/Difficulties/VeryHard.vue';
import Insane from '../components/pages/Difficulties/Insane.vue';
import Inhuman from '../components/pages/Difficulties/Inhuman.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/easy",
    name: "Easy",
    component: Easy,
  },
  {
    path: "/medium",
    name: "Medium",
    component: Medium,
  },
  {
    path: "/hard",
    name: "Hard",
    component: Hard,
  },
  {
    path: "/veryhard",
    name: "Very-Hard",
    component: VeryHard,
  },
  {
    path: "/insane",
    name: "Insane",
    component: Insane,
  },
  {
    path: "/inhuman",
    name: "Inhuman",
    component: Inhuman,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;