<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { House, Menu } from '@lucide/vue';
import  {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Toggle } from '@/components/ui/toggle'
import { onMounted, onUnmounted, ref } from 'vue';

interface MenuItem {
  label: string;
  href: string;
  onClick?: () => void;
}

const videreMenu = ref<boolean>(true)

const handleResize = () => {
  if  (window.innerWidth < 640) {
    videreMenu.value = false;
  } else {
    videreMenu.value = true;
  }
}

interface Props{
  items: MenuItem[];
  homeRoute?: string;
}

withDefaults (defineProps<Props>(), {
  homeRoute: '/',
});

const scrollToSection = (selector: string) => {
  if (selector === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
}


onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize);
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
})


</script>

<template>
    <div>
        <Toggle
        class="fixed top-2 right-4 z-50 bg-slate-500 sm:hidden"
        @click="videreMenu = !videreMenu"
        >
       <Menu :size="46" />
     </Toggle>

    <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3">
      <RouterLink :to="homeRoute">
        <House class="icon-home" />
      </RouterLink>

        <NavigationMenu>
          <NavigationMenuList class="flex flex-col sm:flex-row">
            <NavigationMenuItem v-for="item in items" :key="item.href">
              <a 
                :about="item.href"
                @click.prevent="item.onClick ? item.onClick() : scrollToSection(item.href)"
              >
              <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']">
                {{ item.label }}
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
    </nav>
    </div>
</template>


<style scoped>

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
  background-color: rgba(251, 231, 8, 0.92);
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 40;
}

@media (min-width: 640px){

  .extra-nav {
    background-color: rgb(251, 231, 8);
    width: 100%;
    border-radius: 0;
    left: 0;
  }
}
</style>