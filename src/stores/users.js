import { defineStore } from 'pinia'


export const useUsersStore = defineStore('users', {
    state: () => ({
        users:[
            {
                id: 1,
                name: 'Jane Cooper',
                role: 'admin',
                description: 'Admins have full access to the platform. They can manage users, create new posts, and more.',
                avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/avatar-2.png',
                status: 'Active',
                contacts: {
                    email: 'test@example.com',
                    phone: '555-555-5555'
                },
                lastActive: '20 Nov 2022',
                disabled: false
            },
            {
                id: 2,
                name: 'Cody Fisher',
                role: 'editor',
                status: 'Inactive',
                contacts: {
                    email: 'cody.fisher@example.com',
                    phone: '555-555-5555'
                },
                lastActive: '20 Nov 2022',
                disabled: false
            },
            {
                id: 3,
                name: 'Esther Howard',
                role: 'guest',
                status: 'Active',
                contacts: {
                    email: 'esther.howard@example.com',
                    phone: '555-555-5555'
                },
                lastActive: '20 Nov 2022',
                disabled: false
            },
            {
                id: 4,
                name: 'Jenny Wilson',
                role: 'moderator',
                status: 'Active',
                contacts: {
                    email: 'jenny.wilson@example.com',
                    phone: '555-555-5555'
                },
                lastActive: '20 Nov 2022',
                disabled: false
            },
        ]
    }),
    actions: {
        // Keep the static updates so you don't have to query the server, just make sure to add them only if the server returns 200
        addUser(user){
            user.id = this.users.length + 1
            user.status = 'Inactive'
            this.users.push(user)
        },
        removeUser(id){
            this.users = this.users.filter(user => user.id !== id)
        },
        updateUser(user){
            const index = this.users.findIndex(u => u.id === user.id)
            this.users[index] = user
        }
    }
})