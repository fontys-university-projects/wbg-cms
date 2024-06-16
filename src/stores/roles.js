import { defineStore } from 'pinia'

import { IconClipboardList, IconEye, IconUser, IconPointerCog, IconBallpen } from '@tabler/icons-vue'

export const useRolesStore = defineStore('roles', {
    state: () => ({
        colors: [
            {
                id: 'slate',
                name: 'slate',
                color: 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300',
            },
            {
                id: 'red',
                name: 'red',
                color: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300',
            },
            {
                id: 'orange',
                name: 'orange',
                color: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300',
            },
            {
                id: 'amber',
                name: 'amber',
                color: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-300',
            },
            {
                id: 'yellow',
                name: 'yellow',
                color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300',
            },
            {
                id: 'lime',
                name: 'lime',
                color: 'bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-300',
            },
            {
                id: 'green',
                name: 'green',
                color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300',
            },
            {
                id: 'emerald',
                name: 'emerald',
                color: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300',
            },
            {
                id: 'teal',
                name: 'teal',
                color: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300',
            },
            {
                id: 'cyan',
                name: 'cyan',
                color: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-300',
            },
            {
                id: 'sky',
                name: 'sky',
                color: 'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-300',
            },
            {
                id: 'blue',
                name: 'blue',
                color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300',
            },
            {
                id: 'indigo',
                name: 'indigo',
                color: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300',
            },
            {
                id: 'violet',
                name: 'violet',
                color: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-300',
            },
            {
                id: 'purple',
                name: 'purple',
                color: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300',
            },
            {
                id: 'fuchsia',
                name: 'fuchsia',
                color: 'bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-300',
            },
            {
                id: 'pink',
                name: 'pink',
                color: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300',
            },
            {
                id: 'rose',
                name: 'rose',
                color: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-300',
            },
        ],
        roles: [
            {
                id: 'admin',
                name: 'Administrator',
                color: 'indigo',
                icon: IconClipboardList,
                description: 'Administrator',
                permissions: ['create', 'read', 'update', 'delete'],
            },
            {
                id: 'moderator',
                name: 'Moderator',
                color: 'violet',
                icon: IconPointerCog,
                description: 'Moderator',
                permissions: ['read', 'update', 'delete'],
            },
            {
                id: 'user',
                name: 'User',
                color: 'blue',
                icon: IconUser,
                description: 'Regular user',
                permissions: ['read', 'update']
            },
            {
                id: 'guest',
                name: 'Guest',
                color: 'slate',
                icon: IconEye,
                description: 'Guest user',
                permissions: ['read']
            },
            {
                id: 'editor',
                name: 'Editor',
                color: 'green',
                icon: IconBallpen,
                description: 'Editor user',
                permissions: ['selfArticles', 'read', 'update', 'delete']
            }
        ],
    }),
})