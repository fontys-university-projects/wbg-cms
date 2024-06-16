import { defineStore } from 'pinia'
import { IconUsers, IconUser, IconUsersGroup } from '@tabler/icons-vue'

export const useOverviewStore = defineStore('overview', {
    state: () => {
        const today = {
            stats: [
                { id: 1, name: 'views', stat: '71,897', icon: IconUsers },
                { id: 2, name: 'unique-views', stat: '12,300', icon: IconUser },
                { id: 3, name: 'visitors', stat: '1,500', icon: IconUsersGroup },
            ],
            chart: {
                views: [100, 150, 100, 150, 200, 180, 220, 250, 210, 190, 170, 160, 140],
                uniqueViews: [100, 150, 80, 120, 160, 140, 180, 200, 170, 150, 130, 120, 100],
            },
            breakdown: [100, 150, 100]
        }
        const yesterday = {
            stats: [
                { id: 1, name: 'views', stat: '61,897', icon: IconUsers },
                { id: 2, name: 'unique-views', stat: '11,300', icon: IconUser },
                { id: 3, name: 'visitors', stat: '3,500', icon: IconUsersGroup },
            ],
            chart: {
                views: [100, 150, 100, 150, 200, 180, 220, 250, 210, 190, 170, 160, 140],
                uniqueViews: [100, 150, 80, 120, 160, 140, 180, 200, 170, 150, 130, 120, 100],
            },
            breakdown: [100, 150, 100, 150]
        }
        const theDayBeforeYesteray = { //Added for automatic calculation of stat percentage (this can be done in the backend as well instead of here)
            stats: [
                { id: 1, name: 'views', stat: '61,797' },
                { id: 2, name: 'unique-views', stat: '12,300' },
                { id: 3, name: 'visitors', stat: '2,200' },
            ],

        }

        const lastThirtyDays = {
            stats: [
                { id: 1, name: 'views', stat: '1,897,897', icon: IconUsers },
                { id: 2, name: 'unique-views', stat: '1,300,000', icon: IconUser },
                { id: 3, name: 'visitors', stat: '500,000', icon: IconUsersGroup },
            ],
            chart: {
                views: [10000, 15000, 10000, 15000, 20000, 18000, 22000, 25000, 21000, 19000, 17000, 16000, 14000, 12000, 10000, 15000, 10000, 15000, 20000, 18000, 22000, 25000, 21000, 19000, 19000, 17000, 16000, 14000, 12000, 10000],
                uniqueViews: [5000, 8000, 5000, 8000, 10000, 9000, 11000, 12500, 10500, 9500, 8500, 8000, 7000, 8000, 6000, 5000, 8000, 5000, 8000, 10000, 9000, 11000, 12500, 10500, 9500, 9500, 8500, 8000, 7000, 6000],
            }
        }
        const lastThirtyDaysOffset = { //Added for automatic calculation of stat percentage (this can be done in the backend as well instead of here)
            stats: [
                { id: 1, name: 'views', stat: '1,780,897' },
                { id: 2, name: 'unique-views', stat: '1,100,000' },
                { id: 3, name: 'visitors', stat: '600,000' },
            ],
        }

        today.stats.forEach((todayItem, index) => { //Added for automatic calculation of stat percentage (this can be done in the backend as well instead of here)
            const yesterdayItem = yesterday.stats[index];
            const todayValue = parseFloat(todayItem.stat.replace(/,/g, ''));
            const yesterdayValue = parseFloat(yesterdayItem.stat.replace(/,/g, ''));

            todayItem.change = Math.round(todayValue - yesterdayValue);

            if (todayItem.change > 0) {
                todayItem.changeType = 'increase';
            } else {
                todayItem.changeType = 'decrease';
                todayItem.change = Math.abs(todayItem.change); // Remove negative sign
            }

            // Calculate unique views as a percentage
            const percentageChange = ((todayValue - yesterdayValue) / yesterdayValue) * 100;
            const formattedChange = Math.abs(percentageChange).toFixed(1) + '%';
            todayItem.change = formattedChange;

            delete todayItem.percent; // Remove the old percent property
        });

        yesterday.stats.forEach((yesterdayItem, index) => { //Added for automatic calculation of stat percentage (this can be done in the backend as well instead of here)
            const theDayBeforeYesterayItem = theDayBeforeYesteray.stats[index];
            const yesterdayValue = parseFloat(yesterdayItem.stat.replace(/,/g, ''));
            const theDayBeforeYesterayValue = parseFloat(theDayBeforeYesterayItem.stat.replace(/,/g, ''));

            yesterdayItem.change = Math.round(yesterdayValue - theDayBeforeYesterayValue);

            if (yesterdayItem.change > 0) {
                yesterdayItem.changeType = 'increase';
            } else {
                yesterdayItem.changeType = 'decrease';
                yesterdayItem.change = Math.abs(yesterdayItem.change); // Remove negative sign
            }


            // Calculate unique views as a percentage
            const percentageChange = ((yesterdayValue - theDayBeforeYesterayValue) / theDayBeforeYesterayValue) * 100;
            yesterdayItem.change = Math.abs(percentageChange).toFixed(1) + '%';

            delete yesterdayItem.percent; // Remove the old percent property
        });
        lastThirtyDays.stats.forEach((lastThirtyDaysItem, index) => { //Added for automatic calculation of stat percentage (this can be done in the backend as well instead of here)
            const lastThirtyDaysOffsetItem = lastThirtyDaysOffset.stats[index];
            const lastThirtyDaysValue = parseFloat(lastThirtyDaysItem.stat.replace(/,/g, ''));
            const lastThirtyDaysOffsetValue = parseFloat(lastThirtyDaysOffsetItem.stat.replace(/,/g, ''));

            lastThirtyDaysItem.change = Math.round(lastThirtyDaysValue - lastThirtyDaysOffsetValue);

            if (lastThirtyDaysItem.change > 0) {
                lastThirtyDaysItem.changeType = 'increase';
            } else {
                lastThirtyDaysItem.changeType = 'decrease';
                lastThirtyDaysItem.change = Math.abs(lastThirtyDaysItem.change); // Remove negative sign
            }


            // Calculate unique views as a percentage
            const percentageChange = ((lastThirtyDaysValue - lastThirtyDaysOffsetValue) / lastThirtyDaysOffsetValue) * 100;
            lastThirtyDaysItem.change = Math.abs(percentageChange).toFixed(1) + '%';

            delete lastThirtyDaysItem.percent; // Remove the old percent property
        });

        return {
            today,
            yesterday,
            lastThirtyDays,
        }
    },
})