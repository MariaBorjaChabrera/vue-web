<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Home } from '@lucide/vue';
import  {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'


</script>

<template> 
   
       <div class="batman"/> 

       <div class="extra-nav"> 
         <RouterLink to="/">
        <Home class="icon-home"/>
        </RouterLink>  
       
          
        

       <header class="titulus">
        <h1>Batman</h1>
        <div id="titulus-Batman" class="titulus-img"></div>
        <p> Yo...soy Batman</p>
       </header>  
 </div>
</template>

<style scoped>
.batman{
  font-family: Arial,Helvetica, sans-serif;
}
.icon-home{
    width: 3rem;
    height: 3rem;
    color: rgb(213, 91, 112);
  
}

.icon-home:hover{
    color: white;
    background-color: rgb(205, 87, 87);
}

.extra-nav {
  background-color: rgb(251, 231, 8);
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}
@media (min-width: 340px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}
.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imageines/batman/joker.jpg");
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: rgb(229, 208, 15);
  pointer-events:none; 
  font-family: Batman;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: rgb(232, 229, 14);
  pointer-events:none;
  display: none;
  font-family: Batman;
}

@media (min-width:768px){
        .titulus >p {
                display:block;
                }
        .titulus > h1 {
                color:rgb(255, 0, 0);
    
        }
        
}

</style>

