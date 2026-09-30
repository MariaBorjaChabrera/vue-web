<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Home, House } from '@lucide/vue';
</script>
<template> 
        <div class="extra-nav"> 
         <RouterLink to="/">
        <House class="icon-home"/>
        </RouterLink>  
        </div>


  <header class="Titulo">
        <div id="titulus-Simpsons" class="titulus-img"> 
        <h1> Simpsons</h1>
        <p> Multiplicate por 0</p>
                </div>
       </header>  


</template>
<style scoped>
        .icon-home{
    width: 3rem;
    height: 3rem;
    color: rgb(213, 91, 112);
    margin: 20px;
}

.icon-home:hover{
    color: white;
    background-color: rgb(205, 87, 87);
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}
       titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imageines/Simspons/familias.jpg");
  min-height: 100vh;
}
</style>