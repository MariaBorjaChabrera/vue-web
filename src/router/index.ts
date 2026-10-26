import { createRouter, createWebHashHistory } from "vue-router";
import Domus from "../paginae/domus/Domus.vue";
import Batman from "../paginae/batman/Batman.vue";
import Primus from "../paginae/simpsons/Primus.vue";
import Responsum from "../paginae/responsum/Responsum.vue";
import  Layout  from "@/paginae/simpsons/Layout.vue";
import Circa from "@/paginae/simpsons/Circa.vue";
import Collectione from "@/paginae/simpsons/Collectione.vue";
import Character from "@/paginae/simpsons/Character.vue";

export const router = createRouter({
    history: createWebHashHistory( import.meta.env.BASE_URL ),
    routes: [
        {
            path: "/",
            name: "home",
            component: Domus
        },
          {
            path: "/batman",
            name: "batman",
            component: Batman
        },
      {
            path: "/simpsons",
            children: [
              {
                path: "",
                name: "simpsons",   //simpsons/
                component: Primus
              },
              {
                path: "about",    //simpons/about
                component: Layout,
                children: [
                  {
                    path: "",     //simpsons/about/
                    component: Circa
                  }
                ]
              },
              {
                path: "gallery",    //simpons/about
                component: Layout,
                children: [
                  {
                    path: "",     //simpsons/gallery/
                    name: "simpsons-gallery", 
                    component: Collectione
                  },
                  {
                    path: ":id",    //simpsons/gallery/5
                    name: "simpsons-detail",
                    component: Character
                  }
                ]
              }
              
            ],
        },
    {
            path: "/indecision",
            name: "indecision",
            component: Responsum 
          },
          {
            path: "/:pathMatch(.*)*",
            redirect: "/"
          }
    ]
})