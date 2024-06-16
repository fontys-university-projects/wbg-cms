<template>
    
    <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
        <div class="px-4 mx-auto max-w-screen-2xl lg:px-6 xl:px-12">
            <div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div class="px-4 divide-y dark:divide-gray-700">
                    <div
                         class="flex flex-col py-3 space-y-3 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
                        <div class="flex items-center flex-1 space-x-4">
                            <h5>
                                <span class="text-gray-500">{{ $t('all-users')[0].toUpperCase() + $t('all-users').slice(1) }}: </span>
                                <span class="dark:text-white">{{ users.length }}</span>
                            </h5>
                        </div>
                    </div>
                    <div
                         class="flex flex-col items-stretch justify-between py-4 space-y-3 md:flex-row md:items-center md:space-y-0">
                        <button type="button"
                                data-modal-target="createUserModal"
                                data-modal-toggle="createUserModal"
                                class="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                            <IconPlus class="h-5 w-5 mr-2 stroke-2" />
                            {{ $t('add-new-user')[0].toUpperCase() + $t('add-new-user').slice(1) }}
                        </button>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col"
                                    class="px-4 py-3">{{ $t('user')[0].toUpperCase() + $t('user').slice(1) }}</th>
                                <th scope="col"
                                    class="px-4 py-3">{{ $t('user-role')[0].toUpperCase() + $t('user-role').slice(1) }}</th>
                                <th scope="col"
                                    class="px-4 py-3">{{ $t('status')[0].toUpperCase() + $t('status').slice(1) }}</th>
                                <th scope="col"
                                    class="px-4 py-3 whitespace-nowrap">{{ $t('contact')[0].toUpperCase() + $t('contact').slice(1) }}</th>
                                <th scope="col"
                                    class="px-4 py-3 whitespace-nowrap">{{ $t('last-login')[0].toUpperCase() + $t('last-login').slice(1) }}</th>
                                <th scope="col"
                                    class="px-4 py-3">
                                    <span class="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users"
                                :key="user.id"
                                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <th scope="row"
                                    class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class="flex items-center">
                                        <img v-if="user.avatar != null"
                                             :src="user.avatar"
                                             :alt="user.name + `'s avatar`"
                                             class="w-auto h-8 mr-3 rounded-full">
                                        <IconUserCircle v-else
                                                        class="w-auto h-9 mr-3" />

                                        {{ user.name }}
                                    </div>
                                </th>
                                <td class="px-4 py-2">
                                    <div v-for="role in roles">
                                        <div v-if="role.id === user.role"
                                             v-for="color in colors">
                                             
                                            <div v-if="role.color === color.id"
                                                 class="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded"
                                                 :class="color.color">
                                                <component :is="role.icon"
                                                           class="h-3.5 w-3.5 mr-1 stroke-2" />
                                                {{ role.name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 mr-2 bg-green-500 border rounded-full"></div>
                                        Active
                                    </div>
                                </td>
                                <td class="px-4 py-2 whitespace-nowrap">
                                    <div class="flex items-center space-x-1.5">
                                        <a class="transition hover:text-gray-900 dark:hover:text-white"
                                           href="mailto:test@exmaple.com">
                                            <IconMail class="w-5 h-5 stroke-2" />
                                        </a>
                                        <a class="transition hover:text-gray-900 dark:hover:text-white"
                                           href="tel:12345678910">
                                            <IconPhone class="w-5 h-5 stroke-2" />
                                        </a>
                                    </div>
                                </td>
                                <td class="px-4 py-2">{{ user.lastActive }}</td>
                                <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <div class="flex items-center space-x-1">
                                        <button type="button"
                                                @click="userData = user"
                                                class="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                data-modal-target="updateUserModal"
                                                data-modal-toggle="updateUserModal">
                                            <IconPencil class="h-4 w-4 mr-2 -ml-0.5 stroke-2" />
                                            {{ $t('edit')[0].toUpperCase() + $t('edit').slice(1) }}
                                        </button>
                                        <button type="button"
                                                @click="userData = user"
                                                class="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                data-modal-target="readUserModal"
                                                data-modal-toggle="readUserModal">
                                            <IconEye class="h-4 w-4 mr-2 -ml-0.5 stroke-2" />
                                            {{ $t('view')[0].toUpperCase() + $t('view').slice(1) }}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <nav class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                     aria-label="Table navigation">
                    <div class="flex items-center space-x-3">
                        <label for="rows"
                               class="text-xs font-normal text-gray-500 dark:text-gray-400">{{ $t('rows-per-page')[0].toUpperCase() + $t('rows-per-page').slice(1) }}</label>
                        <select id="rows"
                                v-model="perPage"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block py-1.5 pl-3.5 pr-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected=""
                                    value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <div class="text-xs font-normal text-gray-500 dark:text-gray-400">
                            <span class="font-semibold text-gray-900 dark:text-white">1-{{ perPage }}</span>
                            of
                            <span class="font-semibold text-gray-900 dark:text-white">{{ pageCount }}</span>
                        </div>
                    </div>
                    <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                            <button @click="currentPage = currentPage - 1"
                                    :disabled="currentPage === 1"
                                    class="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:hover:bg-white disabled:hover:text-gray-500 dark:disabled:hover:bg-gray-800 dark:disabled:hover:text-gray-400">{{ $t('previous')[0].toUpperCase() + $t('previous').slice(1) }}</button>
                        </li>
                        <li>
                            <button @click="currentPage = currentPage + 1"
                                    :disabled="currentPage === pageCount"
                                    class="flex text-sm w-20 items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:hover:bg-white disabled:hover:text-gray-500 dark:disabled:hover:bg-gray-800 dark:disabled:hover:text-gray-400">{{ $t('next')[0].toUpperCase() + $t('next').slice(1) }}</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <UserModal v-if="userData" :userData="userData" :roles="roles" :colors="colors" />
</template>

<script>

import { IconPlus, IconMail, IconPhone, IconUserCircle, IconPencil, IconEye } from '@tabler/icons-vue'
import { useRolesStore } from '@/stores/roles'
import { useUsersStore } from '@/stores/users'

import UserModal from '@/components/UserModal.vue'
export default {
    components: {
        IconPlus,
        IconMail,
        IconPhone,
        IconUserCircle,
        IconPencil,
        IconEye,
        UserModal
    },
    setup() {
        const {roles, colors} = useRolesStore()
        const { users } = useUsersStore()
        return {
            roles,
            colors,
            users,
        }
    },
    data() {
        return {
            perPage: 10,
            pageCount: Math.ceil(this.users.length / 10),
            currentPage: 1,
            userData: {}
        }
    },
    watch: {
        perPage() {
            this.pageCount = Math.ceil(this.users.length / this.perPage)
        }
    },
}

</script>