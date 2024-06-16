<template>
  <TolgeeProvider>
    <template v-slot:fallback>
      <div>Loading...</div>
    </template>
    <header>
    <NavBar v-if="!$route.meta.hideNavbar" />
  </header>
  <div :class="$route.meta.hideNavbar || !print ? 'p-4 pt-20 sm:ml-64': ''">
    <header>
    <nav :class="'hidden print:block bg-white border-gray-200 dark:bg-gray-800', $route.meta.hideNavbar ?? 'hidden'">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <router-link to="/"
                            class="flex ms-2 md:me-24">
                  <img src="/logo.svg"
                       class="h-12 me-3"
                       :alt=" name + ' Logo'" />
                  <span
                        class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">{{ name }}</span>
               </router-link>
        </div>
    </nav>
</header>
    <RouterView />
</div>
  </TolgeeProvider>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { initFlowbite } from 'flowbite'
import { TolgeeProvider } from '@tolgee/vue';
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    NavBar,
    TolgeeProvider,
  },
  setup() {
    
    return {
      name: import.meta.env.VITE_APP_NAME
    }
  },
  mounted() {
    initFlowbite()


    window.addEventListener('beforeprint', () => {
      this.print = true
    })

    window.addEventListener('afterprint', () => {
      this.print = false
    })
  },
  data() {
    return {
      print: false,
    }
  }
}

</script>