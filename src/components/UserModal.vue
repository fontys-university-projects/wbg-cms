<template>
    <!-- Main modal -->
    <div id="readUserModal"
         tabindex="-1"
         aria-hidden="true"
         class="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-3xl p-4 md:h-auto"
             v-if="userData">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->
                <div class="flex justify-between mb-4 rounded-t sm:mb-5">
                    <div class="flex items-center">
                        <img v-if="userData.avatar"
                             class="w-12 h-12 mr-2 rounded-full sm:mr-4"
                             :src="userData.avatar"
                             :alt="userData.name + ' avatar'">
                        <IconUserCircle v-else
                                        class="w-12 h-12 mr-2 rounded-full sm:mr-4 text-gray-900 dark:text-white" />
                        <div>
                            <h3 class="text-lg font-bold text-gray-900 md:text-xl dark:text-white">
                                {{ userData.name }}
                            </h3>
                            <p class="text-base font-light text-gray-500 dark:text-gray-400">
                            <div v-for="role in roles">
                                <div v-if="role.id === userData.role"
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
                            </p>
                        </div>
                    </div>
                    <div>
                        <button type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="readUserModal">
                            <svg aria-hidden="true"
                                 class="w-5 h-5"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                </div>
                <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                    <dl>
                        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Email Adress</dt>
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ userData.contacts?.email
                            }}</dd>
                        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Phone Number</dt>
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ userData.contacts?.phone
                            }}
                        </dd>
                    </dl>
                    <dl>
                        <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Note</dt>
                        <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">{{ userData.description }}
                        </dd>
                    </dl>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3 sm:space-x-4">
                        <button type="button"
                                data-modal-target="updateUserModal"
                                data-modal-toggle="updateUserModal"
                                data-modal-hide="readUserModal"
                                class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <svg aria-hidden="true"
                                 class="w-5 h-5 mr-1 -ml-1"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                </path>
                                <path fill-rule="evenodd"
                                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Edit
                        </button>
                    </div>
                    <button type="button"
                            class="inline-flex items-center text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900">
                        <svg aria-hidden="true"
                             class="w-5 h-5 mr-1.5 -ml-1"
                             fill="currentColor"
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Main modal -->
    <div id="updateUserModal"
         tabindex="-1"
         aria-hidden="true"
         class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->
                <div
                     class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Update user
                    </h3>
                    <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="updateUserModal">
                        <svg aria-hidden="true"
                             class="w-5 h-5"
                             fill="currentColor"
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form action="#" @submit.prevent="updateUser">
                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label for="full-name"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                Name</label>
                            <input type="text"
                                   name="full-name"
                                   id="full-name"
                                   placeholder="Bonnie Smith"
                                   :value="userData.name"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required="true">
                        </div>
                        <div>
                            <label for="email"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   :value="userData.contacts?.email"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="john@company.com"
                                   required="true">
                        </div>
                        <div>
                            <label for="phone"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                            <input type="tel"
                                   name="phone"
                                   id="phone"
                                   :value="userData.contacts?.phone"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="+359 89 602 1920"
                                   required="true">
                        </div>
                        <div>
                            <label for="user-permissions"
                                   class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                User Role
                                <button type="button"
                                        data-tooltip-target="tooltip-user-perms"
                                        data-tooltip-style="dark"
                                        class="ml-1">
                                    <svg aria-hidden="true"
                                         class="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
                                         fill="currentColor"
                                         viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="sr-only">Details</span>
                                </button>
                                <div id="tooltip-user-perms"
                                     role="tooltip"
                                     class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    {{ $t('user-perm-tooltip')[0].toUpperCase() + $t('user-perm-tooltip').slice(1) }}
                                    <div class="tooltip-arrow"
                                         data-popper-arrow></div>
                                </div>
                            </label>
                            <select id="user-permissions"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected></option>
                                <option v-for="role in roles" :value="role.id">{{ role.name }}</option>
                            </select>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="description"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description"
                                      rows="3"
                                      :value="userData.description"
                                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Write a description..."></textarea>
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                   for="file_input">Upload avatar</label>
                            <div class="items-center w-full sm:flex">
                                <img class="mb-4 w-20 h-20 rounded-full sm:mr-4 sm:mb-0"
                                v-if="userData.avatar"
                                     :src="userData.avatar"
                                     alt="Helene avatar">
                                     <IconUserCircle v-else
                                        class="w-32 h-32 mr-2 rounded-full sm:mr-4 text-gray-900 dark:text-white" />
                                <div class="w-full">
                                    <input class="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                           aria-describedby="file_input_help"
                                           id="file_input"
                                           name="file-input"
                                           type="file">
                                    <p class="mt-1 mb-3 text-xs font-normal text-gray-500 dark:text-gray-300"
                                       id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                    <!-- <div class="flex items-center space-x-2.5">
                                        <button type="button"
                                                class="inline-flex items-center py-2 px-3 text-xs font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            <svg class="mr-1 -ml-1 w-4 h-4"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                            Upload new picture
                                        </button>
                                        <button type="button"
                                                class="py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <label for="user-status"
                                       class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Status
                                    <button type="button"
                                            data-tooltip-target="tooltip-status"
                                            data-tooltip-style="dark"
                                            class="ml-1">
                                        <svg aria-hidden="true"
                                             class="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="sr-only">Details</span>
                                    </button>
                                    <div id="tooltip-status"
                                         role="tooltip"
                                         class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        {{ $t('user-status-tooltip')[0].toUpperCase() +
                                            $t('user-status-tooltip').slice(1) }}
                                        <div class="tooltip-arrow"
                                             data-popper-arrow></div>
                                    </div>
                                </label>
                            </div>
                            <label for="user-status"
                                   class="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox"
                                       value=""
                                       id="user-status"
                                       class="sr-only peer">
                                <div
                                     class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Disabled</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button type="submit"
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Update user
                        </button>
                        <button type="button"
                                class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            <svg class="mr-1 -ml-1 w-5 h-5"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Main modal -->
    <div id="createUserModal"
         tabindex="-1"
         aria-hidden="true"
         class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <!-- Modal header -->
                <div
                     class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Create user
                    </h3>
                    <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="createUserModal">
                        <svg aria-hidden="true"
                             class="w-5 h-5"
                             fill="currentColor"
                             viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <form action="#" @submit.prevent="createUser">
                    <div class="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label for="full-name"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full
                                Name</label>
                            <input type="text"
                                   name="full-name"
                                   id="full-name"
                                   placeholder="Bonnie Smith"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   required="true">
                        </div>
                        <div>
                            <label for="email"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email"
                                   name="email"
                                   id="email"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="john@company.com"
                                   required="true">
                        </div>
                        <div>
                            <label for="phone"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                            <input type="tel"
                                   name="phone"
                                   id="phone"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="+359 89 602 1920"
                                   required="true">
                        </div>
                        <div>
                            <label for="user-permissions"
                                   class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                User Role
                                <button type="button"
                                        data-tooltip-target="tooltip-user-perms"
                                        data-tooltip-style="dark"
                                        class="ml-1">
                                    <svg aria-hidden="true"
                                         class="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
                                         fill="currentColor"
                                         viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                              clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="sr-only">Details</span>
                                </button>
                                <div id="tooltip-user-perms"
                                     role="tooltip"
                                     class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    {{ $t('user-perm-tooltip')[0].toUpperCase() + $t('user-perm-tooltip').slice(1) }}
                                    <div class="tooltip-arrow"
                                         data-popper-arrow></div>
                                </div>
                            </label>
                            <select id="user-permissions"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected></option>
                                <option v-for="role in roles" :value="role.id">{{ role.name }}</option>
                            </select>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="description"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description"
                                      rows="3"
                                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Write a description..."></textarea>
                        </div>
                        <div class="sm:col-span-2">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                   for="file_input">Upload avatar</label>
                            <div class="items-center w-full sm:flex">
                                <IconUserCircle
                                                class="mb-4 w-24 h-24 rounded-full sm:mr-4 sm:mb-0 text-gray-900 dark:text-white" />
                                <div class="w-full">
                                    <input class="w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                           aria-describedby="file_input_help"
                                           id="file_input"
                                           name="file-input"
                                           type="file">
                                    <p class="mt-1 mb-3 text-xs font-normal text-gray-500 dark:text-gray-300"
                                       id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                    <!-- <div class="flex items-center space-x-2.5">
                                        <button type="button"
                                                class="inline-flex items-center py-2 px-3 text-xs font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                            <svg class="mr-1 -ml-1 w-4 h-4"
                                                 fill="currentColor"
                                                 viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                            Upload new picture
                                        </button>
                                        <button type="button"
                                                class="py-2 px-3 text-xs font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Delete</button>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                <label for="user-status"
                                       class="inline-flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Status
                                    <button type="button"
                                            data-tooltip-target="tooltip-status"
                                            data-tooltip-style="dark"
                                            class="ml-1">
                                        <svg aria-hidden="true"
                                             class="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-white dark:text-gray-500"
                                             fill="currentColor"
                                             viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="sr-only">Details</span>
                                    </button>
                                    <div id="tooltip-status"
                                         role="tooltip"
                                         class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                        {{ $t('user-status-tooltip')[0].toUpperCase() +
                                            $t('user-status-tooltip').slice(1) }}
                                        <div class="tooltip-arrow"
                                             data-popper-arrow></div>
                                    </div>
                                </label>
                            </div>
                            <label for="user-status"
                                   class="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox"
                                       value=""
                                       id="user-status"
                                       class="sr-only peer">
                                <div
                                     class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-300">Disabled</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button type="submit"
                                class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Create user
                        </button>
                        <button type="button"
                                class="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            <svg class="mr-1 -ml-1 w-5 h-5"
                                 fill="currentColor"
                                 viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import { useUsersStore } from '@/stores/users'
import { IconUserCircle } from '@tabler/icons-vue'
import { Modal } from 'flowbite';
export default {
    components: {
        IconUserCircle
    },
    setup() {
        const users = useUsersStore()
        return {
            users
        }
    },
    props: {
        userData: {
            type: Object,
            default: () => ({})
        },
        roles: {
            type: Array,
            default: () => []
        },
        colors: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            targetEl: null,
        }
    },
    methods: {
        updateUser(event) {
            const formData = {
                name: event.target['full-name'].value,
                contacts: {
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                },
                role: event.target['user-permissions'].value,
                description: event.target.description.value,
                avatar: event.target['file-input'].files[0] ? new Blob([event.target['file-input'].files[0]], { type: event.target['file-input'].files[0].type }) : null,
                disabled: event.target['user-status'].checked,
            }
            this.users.updateUser(formData)

            const $targetEl = document.getElementById('updateUserModal');
            const modal = new Modal($targetEl);
            modal.hide();

        },
        createUser(event) {
            const formData = {
                name: event.target['full-name'].value,
                contacts: {
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                },
                role: event.target['user-permissions'].value,
                description: event.target.description.value,
                avatar: event.target['file-input'].files[0] ? new Blob([event.target['file-input'].files[0]], { type: event.target['file-input'].files[0].type }) : null,
                disabled: event.target['user-status'].checked,
            }
            this.users.addUser(formData)
            const $targetEl = document.getElementById('createUserModal');
            const modal = new Modal($targetEl);
            modal.hide();
        },
    }
}
</script>