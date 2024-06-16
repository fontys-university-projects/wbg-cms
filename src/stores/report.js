import { defineStore } from 'pinia'
import { IconUsers, IconUser, IconUsersGroup } from '@tabler/icons-vue'

export const useReportStore = defineStore('report', {
    state: () => {
        // today and yesterday are subjective, aka if you did report from 10-18th then yesterday should be 2-17th to do accurate comparison

        const currentDate = new Date()

        const day = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${day} ${currentDate.toLocaleString('default', { month: 'short' })} ${currentDate.getFullYear()}`;

        const today = {
            stats: [
                { id: 1, name: 'views', stat: '71,897', icon: IconUsers },
                { id: 2, name: 'unique-views', stat: '12,300', icon: IconUser },
                { id: 3, name: 'visitors', stat: '1,500', icon: IconUsersGroup },
            ],
            chart: {
                views: [100, 150, 100, 150, 200, 180, 220, 250, 210, 190, 170, 160, 100, 150, 100, 150, 200, 180, 220, 250, 210, 190, 170, 160],
            },
            breakdown: [100, 150, 100]
        }
        const yesterday = {
            stats: [
                { id: 1, name: 'views', stat: '61,897', icon: IconUsers },
                { id: 2, name: 'unique-views', stat: '11,300', icon: IconUser },
                { id: 3, name: 'visitors', stat: '3,500', icon: IconUsersGroup },
            ],
        }

        const pageStatistics = {
            sources: [
            { name: 'Direct', value: 1500 },
            { name: 'Google Search', value: 3500 },
            { name: 'Instagram', value: 1000 },
            { name: 'Facebook', value: 5000 },
            ],
            pages: [
            { name: '/home', value: 1500 },
            { name: '/about', value: 3500 },
            { name: '/blog', value: 1000 },
            { name: '/contact', value: 5000 },
            ],
        }

        const geoStatistics = {
            cities: [
            { name: 'Pernik', value: 1500 },
            { name: 'Sofia', value: 3500 },
            { name: 'Varna', value: 1000 },
            { name: 'Burgas', value: 5000 },
            ],
            provinces: [ // Check out the Map.vue Component to see the IDs for the provinces
            { id: 'sofia', value: 1500 },
            { id: 'plovdiv', value: 3500 },
            { id: 'varna', value: 1000 },
            { id: 'burgas', value: 5000 },
            ],
        }

        return {
            date: [formattedDate, formattedDate],
            today,
            yesterday,
            pageStatistics,
            geoStatistics
        }
    },
    actions: {
        setDate(date){
            // Fetch the data for the selected date an set the logic to return the brand new ata for the report aka today, yesterday, pageStatistics, geoStatisticss
            this.date = date
            console.log(this.date)
        }
    }
})