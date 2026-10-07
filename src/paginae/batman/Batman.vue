<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Home, Navigation } from '@lucide/vue';
import  {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'


</script>

<template>
  <div class="Batman"/>

  <nav class="extra-nav flex flex-col sm:flex-row justify-between px-3 "">
    <RouterLink to="/">
      <Home class="icon-home"/>
    </RouterLink>

      <NavigationMenu>
      <NavigationMenuList class="flex flex-col sm:flex-row">

  <NavigationMenuItem>
    <a href="#">
      <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white']">
        Portada
      </NavigationMenuLink>
    </a>
  </NavigationMenuItem>

  <NavigationMenuItem>
    <a href="#vehiculis">
      <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white']">
        Vehículos
      </NavigationMenuLink>
    </a>
  </NavigationMenuItem>

  <NavigationMenuItem>
    <a href="#imagen">
      <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white']">
        Imagen
      </NavigationMenuLink>
    </a>
  </NavigationMenuItem>

  <NavigationMenuItem>
    <a href="#contacto">
      <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white']">
        Contacto
      </NavigationMenuLink>
    </a>
  </NavigationMenuItem>

</NavigationMenuList>
      </NavigationMenu>
  </nav>

  <header class="titulus">
    <div id="titulus-Batman" class="titulus-img">
      <h1>Batman</h1>
      <p>Yo...soy Batman</p>
    </div>
  </header>

  <section id="vehiculis">

  <div class="vehiculis-titulus">
        <h1>Vehículos de Batman</h1>
      </div>

    <div class="vehiculis-arca">
      <div class="item unus">
        <div class="notitia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget ferme</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/imageines/batman/avion.jpg"/>
      </div>

      <div class="item duo">
        <div class="notitia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/imageines/batman/moto.jpg"/>
      </div>

      <div class="item tribus">
        <div class="notitia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehe</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/imageines/batman/car.jpg"/>
      </div>
  
    </div>
  </section>
</template>

<style scoped>
#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;

}

.vehiculis-arca{
  order: 1;
  display: flex;
  flex-direction: column;

  }
 

.vehiculis-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.5rem ;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.item > img{
  width: 90%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 4px solid white;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2) ; 
  order:2;
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
  order:3;
}

.notitia {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.notitia > small {
  font-weight: bold;
  padding: 1rem;
}
 
.notitia > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 
.Batman{
  font-family: "batman";
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

.titulus h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: rgb(229, 208, 15);
  pointer-events:none; 
  font-family: "batman";
}

.titulus p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: rgb(232, 229, 14);
  display:none;
  pointer-events:none;
  font-family: "batman";
}

@media (min-width:768px){
  .titulus h1 {
    color:red;
  }

  .titulus p {
    display:block;
  }
}

@media (min-width:640px){
  #vehiculis {
    max-width: 576px;
  }

}

@media (min-width:768px){
      #vehiculis {
        max-width: 900px;
        }
  .item {
    flex-direction: row;
    height: 320px;
  }

  .notitia {
    width: 40%;
  }

  .unus > img {
    order: -1;
  }
        
}

@media (min-width:1024px){
  #vehiculis {
    max-width: 1280px;
  }

  .item {
    flex-direction: column;
    height: 560px;
  }

  .vehiculis-arca {
    flex-direction: row;
  }

  .notitia {
    width: 90%;
  }
}
</style>

