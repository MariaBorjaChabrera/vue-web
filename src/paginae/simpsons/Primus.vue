<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';
import { useFavoritosStore } from '@/stores/useFavoritos';
import { Heart } from '@lucide/vue';
import { storeToRefs } from 'pinia';

const favoritosStore = useFavoritosStore();

const { totalFavoritos } = storeToRefs(favoritosStore);



</script>

<template> 
  <div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">
      <LogoSimpsons  estilus="w-[24rem] sm:w-[35rem]"/>  
      

    <h1 class="text-xl my-1 font-medium">
        Discover some of the most amazing Quotes from The Simpsons
    </h1>
      <div>
        <strong>This is an unofficial app (even though it looks so cool!)</strong>
      </div>
          <div className="mt-8 flex gap-5">
            <Button variant="terriarius" size="lg">
                  <RouterLink to="/">Exit</RouterLink>
            </Button>
            
              <Button variant="terriarius" size="lg">
                  <RouterLink to="/simpsons/about">Enter</RouterLink>
              </Button>

              <div class="flex items-center gap-2 text-blue-600">
                <Heart class="w-6 h-6 fill-red-500" /> 
                <span>{{ favoritosStore.totalFavoritos }}</span>
              </div>
              
          </div>
          <div class="flex gap-12">
            <img class="object-conatin hidden md:block" src="/imageines/simpsons/bart.png" width="200px" />

            <img class="object-conatin hidden md:block mt-20" src="/imageines/simpsons/homer.png" width="195px" />

            <img class="object-conatin mt-12 md:mt-0" src="/imageines/simpsons/moe.png" width="220px" />

          </div>

    
  </div>

</template>

<style scoped>

</style>