import Vue from 'vue'
import VueRouter from 'vue-router'
import centerRouter from "./routes/center"
import cinemaRouter from "./routes/cliemas"
import filmsRouter from "./routes/films"
Vue.use(VueRouter)

const routes = [
  centerRouter,
  cinemaRouter,
  filmsRouter,
  { path: "/", redirect: "/films" },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
