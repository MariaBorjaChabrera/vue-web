<script setup lang="ts">

import CarrusImaginum from '@/components/CarrusImaginum.vue';
import NavigatiorPrimarius from '@/components/NavigatorPrimarius.vue';
import { useMouseMotio } from '@/composables/useMouseMotio';
import { scrollToSection } from '@/utils/scrollToSection';

const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"];

const { mousePositione, cumMouseMove, cumMouseLeave } = useMouseMotio()

const menuItems = [
  {
    label: 'Portada',
    href:'#',
    onClick: () => scrollToSection('#')
  },
  {
    label:'Vehículos',
    href: '#vehiculis',
    onClick: () => scrollToSection ('#vehiculis')
  },
  {
    label: `Imagenes`,
    href: `#videre`,
    onClick: () => {
      scrollToSection('#videre');
    },
  },
  {
    label: `Contacto`,
    href: `#contactus`,
    onClick: () => {
      scrollToSection('#contactus');
    },
  },
]


</script>

<template>
  <div class="Batman">
<NavigatiorPrimarius :items="menuItems" homeRoute="/" />

  <header class="titulus">
    <div
     id="titulus-Batman" 
      class="titulus-img"
      @mousemove="cumMouseMove"
      @mouseleave="cumMouseLeave"
      :style="{
        backgroundPositionX: `calc(50% + ${mousePositione.x}px)`,
        backgroundPositionY: `calc(50% + ${mousePositione.y}px)`,
        transition: `background-position 0.1s ease-out`
      } "
    ></div>
      <h1>Batman</h1>
      <p>Yo...soy Batman</p>
    
  </header>

  <section id="vehiculis">

  <div class="vehiculis-titulus">
        <h1>Vehículos de Batman</h1>
      </div>

    <div id="imagines" class="vehiculis-arca">
      <div class="item unus">
        <div class="notitia">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget ferme</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/imageines/batman/avion.jpg"/>
      </div>
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
  
   

  </section>

  <section id="videre" class="flex w-full justify-center  min-h-[60vh] lg:min-h-[95vh] items-center bg-gray-900">
    
    <CarrusImaginum 
      :photos="photos"
      :basePath="'/imageines/batman'"
    />
</section>
</div>
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

  height: 5.5rem; 

  font-size: 2rem;

  background-color: rgba(0, 0, 0, 0.7);

  color: white;

  display: flex;

  justify-content: center;

  align-items: center;

}



.item {

  padding: 1.5rem 0;

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

 max-width: 576px;

}

.Batman{

  font-family: "batman";

}





.titulus-img {

  background-size: 100% 100%;

  background-position: center center;

  background-image: url("../imageines/batman/joker.jpg");

 aspect-ratio: 10/7

}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus h1 {

  position: absolute;

  top: calc(100vw *0.5);

  width: 100%;

  text-align: center;

  font-size: 5rem;

  color: rgb(229, 208, 15);

  pointer-events:none;

  font-family: "batman";

}



.titulus p {

  position: absolute;

  top: calc(100vw * 0.36);

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

@media (min-width:420px){

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

.titulus-img:hover {

  background-size: 115% 115%;

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
