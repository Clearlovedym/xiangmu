import films from "@/views/Films/Films.vue"
import comingsoon from "@/views/Films/Comingsoon.vue"
import nowPlaying from "@/views/Films/NowPlaying.vue"
var filmsRouter = {
    path: '/films',
    component: films,
    // redirect: '/Films/NowPlaying',
    children: [
        { path: 'nowPlaying', component: nowPlaying, },
        { path: 'comingsoon', component: comingsoon, }
    ]
}
export default filmsRouter;