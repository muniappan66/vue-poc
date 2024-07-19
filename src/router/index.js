import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
// import TodosList from "@/components/TodosList.vue";
// import Todo from "@/components/Todo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      //component: Todo,
    },
    {
      path: "/todolist",
      name: "todolist",
      // component: TodosList,
    },
  ],
});

export default router;
