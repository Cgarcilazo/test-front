import Vue from "vue";
import Router from "vue-router";
import TutorialsList from '../components/tutorials/List';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "tutorials",
      component: TutorialsList,
    },
  ]
});
