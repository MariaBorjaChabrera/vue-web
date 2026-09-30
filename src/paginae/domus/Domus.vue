<script setup lang="ts">    
import { Button } from '@/components/ui/button'

</script>


<template> 
   <div class="fondo-home"> 
   <h1>
     <span> Diseño</span> Web y
   <br/> Apps 
   <span>Interactivas</span>
   </h1>
        <div class="botones">
        
         <Button variant="default">      
          <RouterLink to="/indecision">Si o no
          </RouterLink>     
          </Button>
         

         <Button variant="default"> 
           <RouterLink to="/batman">Batman
          </RouterLink>     
        </Button>

         <Button variant="default"> 
           <RouterLink to="/simpsons">Simpsons
           </RouterLink>     
        </Button>

         <Button variant="default"> 
         <a href="https://www.youtube.com/watch?v=wAMZ6KpMGQI"
         target="_blank"
         >
         Repositories
         </a>
        </Button>
        </div>
  </div>
</template>
<style scoped>
h1{
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
} 



</style>