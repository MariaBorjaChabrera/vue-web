
<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

        <header class="bg-simpsons-yellow w-full border border-black">

        <div class="flex flex-col  md:flex-row justify-between items-center p-3 md:px-20 mx-auto max-w-page">
         <LogoSimpsons estilus="w-[8rem] h-auto"/>

            <div class="flex gap-6 pt-3">
                 <RouterLink 
                    to="/simpsons/gallery"
                    active-class="font-bold"
                 >
                    Characters
                </RouterLink>

                <RouterLink 
                    to="/simpsons/about"
                    active-class="font-bold"
                >
                    About
                </RouterLink>

                <Button variant="terriarius" size="elongatis">
                    <RouterLink to="/simpsons">Exit</RouterLink>
                </Button>
         </div>
            </div>
        </header>

        <main>
            <RouterView/>
        </main>

        <footer class="bg-simpsons-yellow w-full border border-black text-center py-6">
        <div>
	        <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
        </div>

        <small>
	        This app was done by María Borja
        </small>
        
        </footer>
    </div>
</template>



<style scoped>

</style>