<script setup lang="ts">    
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { ref} from 'vue'

const dialogApertaEst = ref<boolean>(false)
const quaestion = ref<string>('')

// watch(quaestion, (valorNuevo) => {
//   console.log(`Pregunta guardada:${valorNuevo}`)
// })

</script>


<template> 
   <!-- <div class="fondo-home">  -->
   <div class="bg-domus-navy h-screen w-screen text-white font-sans text-center flex flex-col items-center justify-center gap-12 fixed overflow-hidden  ">
  
  <img class="absolute opacity-20" src="/imageines/tonitrui.png" />
  
   <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold pb-10 z-10 md:pb-20">
     <span class="text-domus-cyan"> Diseño</span> Web y
   <br/> Apps 
   <span class="text-domus-cyan">Interactivas</span>
   
   </h1>
   <p class="text-lg md:text-2xl transition-all">
   Aprendiendo a crear aplicaciones web
   </p>

      <div class="text-md bg-domus-cyan w-fit rounded-2xl px-2 py-2 gap-between gap-8">
        <div class="scale-z-10 ">
        
         <!-- <Button variant="domus" class="mr-2">      
          <RouterLink to="/indecision">Si o no
          </RouterLink>     
          </Button>
          -->

            <Dialog
              :open="dialogApertaEst"
              @update:open="dialogApertaEst = $event"
            >
                <DialogTrigger as-child>
                  <Button variant="domus" class="mr-2">
                    Si o No
                  </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px] bg-domus-navy text-white">
                  <DialogHeader>
                    <DialogTitle>Preguntame</DialogTitle>
                    <DialogDescription class="text-domus-cyan">
                    No sigas con tus dudas yo te responderé si o no.
                    </DialogDescription>
                  </DialogHeader>

                  <div class="mt-4">
                    <Input 
                      class="placeholder:text-domus-navy text-white" 
                      v-model="quaestion"
                      placeholder="Escribe tu pregunta..." />
                  </div> 
                </DialogContent>
            </Dialog>

         <Button variant="domus" class="mr-2"> 
           <RouterLink to="/batman">Batman 
          </RouterLink>     
        </Button>

         <Button variant="domus" class="mr-2"> 
           <RouterLink to="/simpsons">Simpsons
           </RouterLink>     
        </Button>

         <Button variant="domus"> 
         <a href="https://www.youtube.com/watch?v=wAMZ6KpMGQI"
         target="_blank"
         >
         Repositories
         </a>
        </Button>
        </div>
  </div>
  </div>
</template>


<style scoped>





 /* h1{
        font-size: 3rem;
        }
.fondo-home {
  background-color: rgb(35, 40, 75);
  height: 100vh;
  color: rgb(231, 122, 133);
}


.botones > Button {
  margin-right: 0.5rem;
  background-color: rgba(226, 82, 82, 0.7);
} 


.botones > Button:hover {
  background-color: rgba(195, 227, 67, 0.5);
}  */ 



</style>