<template>
   <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 no-print dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
         <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
               <button data-drawer-target="logo-sidebar"
                       data-drawer-toggle="logo-sidebar"
                       aria-controls="logo-sidebar"
                       type="button"
                       class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6"
                       aria-hidden="true"
                       fill="currentColor"
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                     <path clip-rule="evenodd"
                           fill-rule="evenodd"
                           d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                     </path>
                  </svg>
               </button>
               <router-link to="/"
                            class="flex ms-2 md:me-24">
                  <img src="/logo.svg"
                       class="h-12 me-3"
                       :alt="name + ' Logo'" />
                  <span
                        class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"> {{ name }}</span>
               </router-link>
            </div>
            <div class="flex items-center">
               <button type="button"
                       data-dropdown-toggle="language-dropdown-menu"
                       class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  {{ tolgee.getLanguage() == 'en' ? 'English' : tolgee.getLanguage() == 'bg' ? ' Български' : '' }}
               </button>
               <!-- Dropdown -->
               <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                    id="language-dropdown-menu">
                  <ul class="py-2 font-medium"
                      role="none">
                     <li>
                        <div
                           @click="changeLanguage('en')"
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                           role="menuitem">
                           <div class="inline-flex items-center">
                              English
                           </div>
                        </div>
                     </li>
                     <li>
                        <div
                           @click="changeLanguage('bg')"
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                           role="menuitem">
                           <div class="inline-flex items-center">
                              Български
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
               <div class="flex items-center ms-3">
                  <div>
                     <button type="button"
                             class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                             aria-expanded="false"
                             data-dropdown-toggle="dropdown-user">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full"
                             src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                             alt="user photo">
                     </button>
                  </div>
                  <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                       id="dropdown-user">
                     <div class="px-4 py-3"
                          role="none">
                        <p class="text-sm text-gray-900 dark:text-white"
                           role="none">
                           Neil Sims
                        </p>
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                           role="none">
                           neil.sims@flowbite.com
                        </p>
                     </div>
                     <ul class="py-1"
                         role="none">
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Dashboard</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Settings</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Earnings</a>
                        </li>
                        <li>
                           <a href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem">Sign out</a>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </nav>

   <aside id="logo-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 no-print sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
         <ul class="space-y-2 font-medium"
             v-for="nav in navigation">
            <li v-if="!nav.children">
               <router-link :to="nav.href"
                           :class="{ 'hidden': nav.hidden }"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <component :is="nav.icon"
                             class="w-6 h-6 text-gray-700 transition duration-75 stroke-2 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                             aria-hidden="true" />
                  <span class="ms-3">{{ $t(nav.name)[0].toUpperCase() + $t(nav.name).slice(1) }}</span>
               </router-link>
            </li>
            <li v-else>
               <button type="button"
                       class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                       :aria-controls="'dropdown-' + nav.name"
                       :data-collapse-toggle="'dropdown-' + nav.name">
                  <component :is="nav.icon"
                             class="w-6 h-6 text-gray-700 transition duration-75 stroke-2 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                             aria-hidden="true" />
                  <span class="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">{{ $t(nav.name)[0].toUpperCase() + $t(nav.name).slice(1) }}</span>
                  <svg class="w-3 h-3 mr-0.5"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 10 6">
                     <path stroke="currentColor"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           stroke-width="2"
                           d="m1 1 4 4 4-4" />
                  </svg>
               </button>
               <ul :id="'dropdown-' + nav.name"
                   class="hidden py-2 space-y-2">
                  <li v-for="child in nav.children">
                     <router-link :to="nav.href + child.href"
                                 :class="{ 'hidden': child.hidden }"
                                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                        <component :is="child.icon"
                                   class="w-6 h-6 text-gray-700 transition duration-75 stroke-2 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                   aria-hidden="true" />
                        <span class="ms-3">{{ $t(child.name, 2)[0].toUpperCase() + $t(child.name, 2).slice(1) }}</span>
                     </router-link>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   </aside>

</template>

<script>

import { IconHome, IconReportAnalytics, IconChartPie, IconWebhook, IconAdCircle, IconReport, IconSettings2, IconSettings, IconUsers, IconUserCheck, IconBrandCampaignmonitor } from '@tabler/icons-vue'
import CountryFlag from 'vue-country-flag-next'
import logo from '../assets/logo.svg'

import { useTolgee } from '@tolgee/vue';

const navigation = [
   {
      name: 'dashboard',
      href: '/',
      icon: IconHome,
   },
   {
      name: 'analytics',
      href: '/analytics',
      icon: IconReportAnalytics,
      children: [
         { name: 'overall', href: '/overall', icon: IconChartPie },
         { name: 'social-media', href: '/socials', icon: IconWebhook, hidden: true},
         { name: 'google-analytics', href: '/ga', icon: IconAdCircle, hidden: true },
         { name: 'campaign', href: '/campaign', icon: IconBrandCampaignmonitor, hidden: true},
         { name: 'reports', href: '/reports', icon: IconReport },
      ]
   },
   {
      name: 'administration',
      href: '/administration',
      icon: IconSettings2,
      children: [
         { name: 'settings', href: '/settings', icon: IconSettings, hidden: true },
         { name: 'users', href: '/users', icon: IconUsers },
         { name: 'roles', href: '/roles', icon: IconUserCheck },
      ]
   },
]
export default {
   components: {
      logo,
      CountryFlag
   },
   setup() {
    return {
      name: import.meta.env.VITE_APP_NAME
    }
  },
   data() {
      return {
         navigation,
         tolgee: useTolgee(['language'])
      }
   },
   methods: {
      changeLanguage (language) {
         this.tolgee.changeLanguage(language)
      }
   }
}

</script>