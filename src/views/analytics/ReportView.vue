<template>
    <div class="space-y-3">
        <section class="flex mb-2 print:hidden bg-gray-50 dark:bg-gray-900">
            <div class="w-full mx-auto">
                <!-- Start coding here -->
                <div class="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                    <div class="px-4 divide-y dark:divide-gray-700">
                        <div class="flex items-center justify-between py-3">
                            <div class="flex items-center flex-1 space-x-2">
                                <h5 class="font-semibold dark:text-white">{{ $t('reports')[0].toUpperCase() +
                                    $t('reports').slice(1) }}</h5>
                                <div>
                                    <button id="filterDropdownButton"
                                            data-dropdown-toggle="filterDropdown"
                                            type="button"
                                            class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             aria-hidden="true"
                                             class="w-4 h-4 mr-2 text-gray-400"
                                             viewbox="0 0 20 20"
                                             fill="currentColor">
                                            <path fill-rule="evenodd"
                                                  clip-rule="evenodd"
                                                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" />
                                        </svg>
                                        {{ $t('filter')[0].toUpperCase() + $t('filter').slice(1) }}
                                    </button>
                                    <div id="filterDropdown"
                                         class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                        <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                            Category
                                        </h6>
                                        <ul class="space-y-2 text-sm"
                                            aria-labelledby="dropdownDefault">
                                            <li class="flex items-center"
                                                v-for="filter in filterDropdown">
                                                <input :id="filter.id"
                                                       type="checkbox"
                                                       :value="filter.id"
                                                       :checked="filter.selected"
                                                       class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label :for="filter.id"
                                                       class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {{ filter.name }}
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-2 md:space-x-4">
                                <button type="button"
                                        class="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    View JSON
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col items-stretch py-4 md:flex-row md:items-center">
                            <div class="flex flex-col space-y-3 md:flex-row md:items-center md:w-2/3 md:space-y-0">
                                <vue-tailwind-datepicker class="mr-2"
                                                         v-model="dateValue"
                                                         :formatter="formatter" />
                                <button type="button"
                                            @click="report.setDate(dateValue)"
                                        class="flex items-center justify-center flex-shrink-0 w-full px-4 py-2 text-sm font-medium text-white rounded-lg md:w-auto bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                    {{ $t('run-report')[0].toUpperCase() + $t('run-report').slice(1) }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="hidden print:block">
            <h2 class="text-2xl font-extrabold dark:text-white">{{ $t('report-from')[0].toUpperCase() +
                $t('report-from').slice(1) }} {{ dateValue[0] }} {{ $t('to') }} {{ dateValue[1] }}</h2>
        </section>
        <section class="space-y-2 break-after-page">
            <h4 class="p-2 text-2xl font-bold dark:text-white">{{ $t('views-statistics')[0].toUpperCase() +
                $t('views-statistics').slice(1) }}</h4>
            <dl class="grid gap-2 lg:grid-cols-3">

                <div v-for="item in todayStats"
                     :key="item.id"
                     class="relative px-4 pt-5 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 sm:pt-6">
                    <dt>
                        <div class="absolute p-3 bg-indigo-500 rounded-md">
                            <component :is="item.icon"
                                       class="w-6 h-6 text-white"
                                       aria-hidden="true" />
                        </div>
                        <p class="ml-16 text-sm font-medium text-gray-700 truncate dark:text-gray-200">{{
                            $t(item.name)[0].toUpperCase() + $t(item.name).slice(1) }}</p>
                    </dt>
                    <dd class="flex items-baseline pb-6 ml-16 sm:pb-7">
                        <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ item.stat }}</p>
                        <p
                           :class="[item.changeType === 'increase' ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500', 'ml-2 flex items-baseline text-sm font-semibold']">
                            <IconTrendingUp v-if="item.changeType === 'increase'"
                                            class="self-center flex-shrink-0 w-5 h-5 text-green-500"
                                            aria-hidden="true" />
                            <IconTrendingDown v-else
                                              class="self-center flex-shrink-0 w-5 h-5 text-red-500"
                                              aria-hidden="true" />
                            <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by
                            </span>
                            {{ item.change }}
                        </p>
                    </dd>
                </div>
            </dl>
            <div class="rounded-lg ">
                <div class="relative w-full p-4 bg-white rounded-lg shadow dark:bg-gray-800">
                    <img class="hidden print:block"
                         :src="imgCharts.today"
                         alt="Today Chart" />
                    <apexchart ref="todayChart"
                               class="print:hidden"
                               :options="todayChart.chartOptions"
                               type="area"
                               :series="todayChart.chartSeries"
                               height="332"></apexchart>
                </div>
            </div>
        </section>
        <section class="break-after-page">
            <h4 class="p-2 text-2xl font-bold dark:text-white">{{ $t('page-statistics')[0].toUpperCase() +
                $t('page-statistics').slice(1) }}</h4>
            <div class="grid space-y-2 lg:grid-cols-2 lg:space-x-2 lg:space-y-0">
                <div class="relative overflow-x-auto rounded-md shadow-md">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3">
                                    {{ $t('source')[0].toUpperCase() + $t('source').slice(1) }}
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-right">
                                    {{ $t('visits')[0].toUpperCase() + $t('visits').slice(1) }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="source in sources"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ source.name }}
                                </th>
                                <td class="px-6 py-2 text-right">
                                    {{ source.value }}
                                    <span
                                          class="bg-blue-100 text-blue-800 text-xs font-medium -me-4 px-1.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{{
                                            source.percent }}%</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="relative overflow-x-auto rounded-md shadow-md">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3">
                                    {{ $t('page')[0].toUpperCase() + $t('page').slice(1) }}
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-right">
                                    {{ $t('views')[0].toUpperCase() + $t('views').slice(1) }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="page in pageViews"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ page.name }}
                                </th>
                                <td class="px-6 py-2 text-right">
                                    {{ page.value }}
                                    <span
                                          class="bg-blue-100 text-blue-800 text-xs font-medium -me-4 px-1.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{{
                                            page.percent }}%</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>

        <section class="break-after-page">
            <h4 class="p-2 text-2xl font-bold dark:text-white">{{ $t('geo-statistics')[0].toUpperCase() +
                $t('geo-statistics').slice(1) }}</h4>
            <div class="grid space-x-2 lg:grid-cols-2">
                <div class="relative overflow-x-auto rounded-md shadow-md">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3">
                                    {{ $t('city')[0].toUpperCase() + $t('city').slice(1) }}
                                </th>
                                <th scope="col"
                                    class="px-6 py-3 text-right">
                                    {{ $t('views')[0].toUpperCase() + $t('views').slice(1) }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="city in cityViews"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ city.name }}
                                </th>
                                <td class="px-6 py-2 text-right">
                                    {{ city.value }}
                                    <span
                                          class="bg-blue-100 text-blue-800 text-xs font-medium -me-4 px-1.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">{{
                                            city.percent }}%</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="relative overflow-x-auto rounded-md shadow-md">
                    <Map :provinces="provinceViews" />
                    <div
                         class="p-4 text-gray-900 bg-white rounded-lg shadow-md dark:bg-gray-900 whitespace-nowrap dark:text-white">
                        <div class="flex space-x-0">
                            <div class="pr-2">{{ $t('high-viewership')[0].toUpperCase() + $t('high-viewership').slice(1)
                                }}</div>
                            <div class="w-5 h-5 bg-fuchsia-800"></div>
                            <div class="w-5 h-5 bg-fuchsia-700"></div>
                            <div class="w-5 h-5 bg-fuchsia-600"></div>
                            <div class="w-5 h-5 bg-fuchsia-500"></div>
                            <div class="w-5 h-5 bg-fuchsia-400"></div>
                            <div class="w-5 h-5 bg-fuchsia-300"></div>
                            <div class="pl-2">{{ $t('low-viewership')[0].toUpperCase() + $t('low-viewership').slice(1)
                                }}</div>

                        </div>

                    </div>


                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { ref } from 'vue'

import { IconUsers, IconUser, IconUsersGroup, IconTrendingUp, IconTrendingDown } from '@tabler/icons-vue'
import VueApexCharts from "vue3-apexcharts";

import Map from '@/components/Map.vue'
import { useReportStore } from '@/stores/report';
export default {
    components: {
        Map,
        IconUsers,
        IconUser,
        IconUsersGroup,
        IconTrendingUp,
        IconTrendingDown,
        Apexchart: VueApexCharts,
    },
    setup() {
        const { date, today, yesterday, pageStatistics, geoStatistics } = useReportStore()
        const report = useReportStore()
        return {
            date,
            today,
            yesterday,
            pageStatistics,
            geoStatistics,
            report
        }
    },
    data() {
        const filterDropdown = [
            {
                id: 'views',
                name: 'Views',
                selected: true
            },
            {
                id: 'clicks',
                name: 'Clicks',
                selected: false
            },
            {
                id: 'impressions',
                name: 'Impressions',
                selected: false
            },
            {
                id: 'revenue',
                name: 'Revenue',
                selected: false
            }
        ]

        const todayChart = {
            chartOptions: {
                chart: {
                    id: 'custom-report-chart',
                    fontFamily: 'Inter, sans-serif',
                    dropShadow: {
                        enabled: false,
                    },
                    toolbar: {
                        show: true,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                tooltip: {
                    enabled: true, // Disable default tooltip
                    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                        return (
                            '<div class="p-3 bg-white rounded-md shadow dark:bg-gray-800">' +
                            '<p class="text-lg font-semibold text-gray-900 dark:text-white">' +
                            dataPointIndex + ':00' +
                            '</p>' +
                            '<p class="text-gray-500 text-md dark:text-gray-400">' +
                            series[seriesIndex][dataPointIndex] +
                            ' Views</p>' +
                            '</div>'
                        );
                    },
                },
                legend: {
                    show: true,
                },
                xaxis: {
                    type: 'category',
                    labels: {
                        style: {
                            colors: '#A0AEC0',
                        },
                    },
                    categories: [
                        '0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00',
                        '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
                        '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
                        '19:00', '20:00', '21:00', '22:00', '23:00'
                    ],
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: '#A0AEC0',
                        },
                    },
                },
            },
            chartSeries: [
                {
                    name: 'Views',
                    data: this.today.chart.views,
                },
            ],
        }

        return {
            filterDropdown,
            filters: null,
            dateValue: this.date,
            formatter: {
                date: 'DD MMM YYYY',
                month: 'MMM',
            },
            sources: this.pageStatistics.sources,
            pageViews: this.pageStatistics.pages,
            cityViews: this.geoStatistics.cities,
            provinceViews: this.geoStatistics.provinces,
            todayStats: this.today.stats,
            yesterdayStats: this.yesterday.stats,
            todayChart,
            imgCharts: {},
        }
    },
    beforeMount() { ///DO NOT TOUCH 'beforeMount' IN GENERAL
        ///AUTO CALCULATION DO NOT TOUCH THIS CODE

        const totalCityViews = this.cityViews.reduce((sum, city) => sum + city.value, 0);
        this.cityViews.forEach((city) => {
            city.percent = Math.round((city.value / totalCityViews) * 100);
        });


        const totalProvinceViews = this.provinceViews.reduce((sum, province) => sum + province.value, 0);
        this.provinceViews.forEach((province) => {
            province.percent = Math.round((province.value / totalProvinceViews) * 100);
        });

        const totalPageViews = this.pageViews.reduce((sum, page) => sum + page.value, 0);
        this.pageViews.forEach((page) => {
            page.percent = Math.round((page.value / totalPageViews) * 100);
        });

        const totalSources = this.sources.reduce((sum, source) => sum + source.value, 0);
        this.sources.forEach((source) => {
            source.percent = Math.round((source.value / totalSources) * 100);
        });


        this.todayStats.forEach((todayItem, index) => {
            const yesterdayItem = this.yesterdayStats[index];
            const todayValue = parseFloat(todayItem.stat.replace(/,/g, ''));
            const yesterdayValue = parseFloat(yesterdayItem.stat.replace(/,/g, ''));

            todayItem.change = Math.round(todayValue - yesterdayValue);

            if (todayItem.change > 0) {
                todayItem.changeType = 'increase';
            } else {
                todayItem.changeType = 'decrease';
                todayItem.change = Math.abs(todayItem.change); // Remove negative sign
            }

            if (todayItem.name === 'unique-views') {
                // Calculate unique views as a percentage
                const percentageChange = ((todayValue - yesterdayValue) / yesterdayValue) * 100;
                todayItem.change = `${percentageChange.toFixed(1)}%`;
            }

            delete todayItem.percent; // Remove the old percent property
        });


    },
    mounted() {
        window.addEventListener('beforeprint', () => {
            this.generateChartImages()
        })

        window.addEventListener('afterprint', () => {
            this.imgCharts = []
        })
    },
    methods: {
        // Fetch data from the API
        async generateChartImages() {
            // Fetch data from the API
            this.$refs.todayChart.chart.dataURI().then((uri) => {
                this.imgCharts.today = uri.imgURI
            })
        },
        print() {
            window.print()
        }
    }
}

</script>