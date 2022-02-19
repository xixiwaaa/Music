import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Main from "@/views/Main.vue";
import Recommend from "@/views/Recommend.vue";
import Singer from "@/views/Singer.vue";
import Rank from "@/views/Rank.vue";
import Search from "@/views/Search.vue";
import Player from "@/views/Player.vue";
import SingerSong from "@/views/SingerSong.vue";

export default new Router({
  routes: [
    { path: "/player", name: "Player", component: Player },
    {path:"/song",name:"SingerSong",component:SingerSong},
    {
      path: "/",
      component: Main,
      children: [
        { path: "", component: Recommend },
        { path: "recommend", component: Recommend },
        { path: "singer", component: Singer },
        { path: "rank", component: Rank },
        { path: "search", component: Search },
      ],
    },
  ],
});
