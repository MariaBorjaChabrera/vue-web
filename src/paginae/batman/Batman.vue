<script setup lang="ts">

import CarrusImaginum from '@/components/CarrusImaginum.vue';
import NavigatiorPrimarius from '@/components/NavigatorPrimarius.vue';
import { useMouseMotio } from '@/composables/useMouseMotio';
import { scrollToSection } from '@/utils/scrollToSection';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { ref } from 'vue'
import type { DateValue } from 'reka-ui';
import { Loader2, MapPin, Mail, Phone, MessageCircle, X } from '@lucide/vue';
import { Icon } from '@iconify/vue';

const dies= ref<DateValue>()
const nomen = ref<string> ("")
const cognomen = ref<string> ("")
const misssio = ref<string> ("")
const estLoanding = ref<boolean>(false)  

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

const mittereSubmit = async () =>{
  estLoanding.value = true
  await new Promise((resolve) => setTimeout(resolve, 1000))
  estLoanding.value = false

  
console.log('Formulario enviado:',{
 dies: dies.value,
 nomen: nomen.value,
 cognomen: cognomen.value,
 missio: misssio.value,
})

  nomen.value = ""
  cognomen.value = ""
  misssio.value = ""


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
      :autoplayDelay="1500"
    />
</section>

  <section id="contactus" class="w-full py-12 bg-gray-100">

    <div class="container mx-auto max-w-5xl px-4">

      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Contacta con Batman</h2>
            
      <div class="flex flex-col lg:flex-row gap-8 items-center">

              <!-- Mapa de Google Maps -->
        <div class="hidden lg:block w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <div class="aspect-square">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155710122!2d-73.987844924164!3d40.757985971389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1ses!2ses!4v1710864000000!5m2!1ses!2ses"
              class="w-full h-full rounded-lg"
              :style="{ border: 0 }"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

              <!-- Formulario -->
        <div class="w-full max-w-md mx-auto lg:max-w-none lg:w-1/2 ">

          <form 
          class="space-y-6 bg-white p-8 rounded-lg shadow-lg aspect-square"
          @submit.prevent="mittereSubmit"
          >
            <div class="space-y-2">   
               <Label for="nomen">Nombre</Label>
               <Input id="nomen" required v-model="nomen"/>

            </div>
                  
            <div class="space-y-2">
            <Label for="cognomen">Apellidos</Label>
            <Input id="cognomen" required v-model="cognomen"/> 

            </div>

            <div class="space-y-2 ">

          <Select required >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona una mision" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rescatare">
                Rescate de rehenes
              </SelectItem>
              <SelectItem value="investigare">
                Investigacion
              </SelectItem>
              <SelectItem value="persequi">
                Persecucion
              </SelectItem>
              <SelectItem value="defendere">
                Defensa de Gotham
              </SelectItem>
            </SelectContent>
          </Select>

            </div>

            <div class="space-y-2">
               <Label>Fecha de la misión</Label>
              
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                <span v-if="dies">
                {{dies.day}}/ {{dies.month}}/ {{dies.year}}
                </span> 
                <span v-else class="text-gray">Selecciona una fecha</span> 
                </Button>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar v.model="dies"/>
              </PopoverContent>
            </Popover>

            <Button type="submit"
            class="w-full bg-brand-purple"
            :disabled="estLoanding"
        
            >
            <Loader2 v-if="estLoanding" class="mrc-2 h-4 w-4 animate-spin"/>
            <span v-if="estLoanding">Enviando...</span>

            <span v-else>Enviar Solicitud</span>
            </Button>
                
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer class="w-full bg-gray-900 text-gray-300 py-12">
    <div class="flex flex-col md:flex-row md:justify-around gap-8 max-w-3xl mx-auto">

      <div class="space-y-4 text-center md:text-left">

        <h3 class="text-xl font-bold text-white">Información de Contacto</h3>
              
          <div class="space-y-2">
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <Phone class="w-6 h-6" />
              +1 (555) 123-4567

            </p>
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <Mail class="w-6 h-6"/>
              batman@wayneenterprises.com

            </p>
            <p class="flex items-center gap-2 justify-center md:justify-start">
              <MapPin class="w-6 h-6"/>
              Wayne Manor, Gotham City

            </p>
          </div>
        </div>

        <!-- Redes sociales -->
        <div class="space-y-4 text-center md:text-left text-gray-400">
          <h3 class="text-xl font-bold text-white">Síguenos</h3>
          <div class="flex gap-8 justify-center">
          
            <X class="w-10 h-10 hover:text-white"/> 
            <span class="w-10 h-10 hover:text-white">Instagram</span>
            <span class="w-10 h-10 hover:text-white">LinkedIn</span>
            <MessageCircle class="w-10 h-10 hover:text-white"/>
                
          </div>
      </div>
    </div>
  </footer>

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
