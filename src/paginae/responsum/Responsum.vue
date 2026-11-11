
<script setup lang="ts">
import { getYesNo, type YesNoTipus } from '@/actions/getYesNo.actio';
import { Loader2 } from '@lucide/vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const quaestio = computed(() => {
        const query = route.query.quaestio
        return typeof query === 'string' ? query : 'No hay pregunta'
})
const yesNo = ref <YesNoTipus>({ 
        answer: '',
         image: '' 
        })

const estLoading = ref<boolean>(true)

onMounted(async () => {
    try {
        const response = await getYesNo()
        yesNo.value = response
        estLoading.value = false
    } catch (error) {
        console.error(error);
   
        estLoading.value = false;
    }
})
        

</script>

<template>
        <div class="text-center"> 

        <div v-if="estLoading">
                <img class="h-screen w-screen absolute top-0 left-0 object-cover" src="/imageines/github.jpg" alt="..." />
                <div class="absolute w-screen h-screen top-0 left-0 bg-black opacity-40"></div>

                <div class="relative mt-45">
                        <p class="text-4xl text-white font-medium mt-8">{{ quaestio }}</p> 
                        
                        <div class="flex items-center justify-center mt-60">
                                <Loader2 class="w-18 h-18 text-white animate-spin" />
                        </div>
                </div>
        </div>

        <div v-else class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
                <img
                        v-if="yesNo.image"
                        :src="yesNo.image"
                        :alt="`GIF de respuesta: ${yesNo.answer}`"
                        class="absolute inset-0 z-0 h-full w-full object-cover"
                />
                <div class="absolute inset-0 z-0 bg-black/40"></div>

                <div class="relative z-10 flex flex-col items-center px-6 text-white">
                        <p class="text-4xl font-medium">{{ quaestio }}</p>
                        <p class="mt-24 text-6xl font-bold">
                                {{ yesNo.answer === 'yes' ? 'Siií' : 'No!' }}
                        </p>
                </div>

                <button
                        @click="router.push('/')"
                        class="fixed right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 bg-gray-700 transition-colors hover:bg-gray-600"
                >
                        <span class="text-xl text-gray-300">➔</span>
                </button>
        </div>
	
</div>
</template>


<style scoped>

</style>