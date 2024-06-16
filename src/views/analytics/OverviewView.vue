<template>
  <main>
    <section class="break-after-page">
      <h4 class="p-2 text-2xl font-bold dark:text-white">{{ $t('today')[0].toUpperCase() + $t('today').slice(1) }}</h4>
      <dl class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
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
              <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
              {{ item.change }}
            </p>
          </dd>
        </div>
      </dl>
      <div class="grid grid-cols-1 mb-4 rounded-lg gap-y-2 lg:grid-cols-6 lg:gap-x-2 lg:gap-y-0">
        <div class="relative w-full p-4 bg-white rounded-lg shadow dark:bg-gray-800 lg:col-span-5">
          <img class="hidden print:block"
               :src="imgCharts.today"
               alt="Today Chart" />
          <apexchart ref="todayChart"
                     class="print:hidden"
                     :options="todayChart.chartOptions"
                     type="bar"
                     :series="todayChart.chartSeries"
                     height="332"></apexchart>
        </div>
        <div class="relative hidden w-full p-4 bg-white rounded-lg shadow lg:block dark:bg-gray-800 lg:col-span-1">
          <div>
            <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label for="daily-breakdown"
                     class="inline-flex items-center text-base font-medium text-gray-900 b-2 dark:text-white">
                {{ $t('daily-breakdown')[0].toUpperCase() + $t('daily-breakdown').slice(1) }}
                <button type="button"
                        data-tooltip-target="tooltip-today-breakdown"
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
                <div id="tooltip-today-breakdown"
                     role="tooltip"
                     class="absolute z-10 invisible inline-block max-w-sm px-3 py-2 text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  {{ $t('breakdown-tooltip') }}
                  <div class="tooltip-arrow"
                       data-popper-arrow></div>
                </div>
              </label>
            </div>
          </div>
          <apexchart ref="todayBreakdownChart"
                     class="print:hidden"
                     :options="todayBreakdownChart.chartOptions"
                     type="bar"
                     :series="todayBreakdownChart.chartSeries"
                     height="332"></apexchart>
        </div>
      </div>
    </section>
    <section class="break-after-page">
      <h4 class="p-2 text-2xl font-bold dark:text-white"
          :title="$t('yesterday')">{{ $t('yesterday')[0].toUpperCase() + $t('yesterday').slice(1) }}</h4>
      <dl class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
        <div v-for="item in yesterdayStats"
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
              <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
              {{ item.change }}
            </p>
          </dd>
        </div>
      </dl>
      <div class="grid grid-cols-1 mb-4 rounded-lg gap-y-2 lg:grid-cols-6 lg:gap-x-2 lg:gap-y-0">
        <div class="relative w-full p-4 bg-white rounded-lg shadow dark:bg-gray-800 lg:col-span-5">
          <img class="hidden print:block"
               :src="imgCharts.today"
               alt="Yesterday Chart" />
          <apexchart ref="yesterdayChart"
                     class="print:hidden"
                     :options="yesterdayChart.chartOptions"
                     type="bar"
                     :series="yesterdayChart.chartSeries"
                     height="332"></apexchart>
        </div>
        <div class="relative hidden w-full p-4 bg-white rounded-lg shadow lg:block dark:bg-gray-800 lg:col-span-1">
          <div>
            <div class="mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label for="yesterday-breakdown"
                     class="inline-flex items-center mb-2 text-base font-medium text-gray-900 dark:text-white">
                {{ $t('daily-breakdown')[0].toUpperCase() + $t('daily-breakdown').slice(1) }}
                <button type="button"
                        data-tooltip-target="tooltip-yesterday-breakdown"
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
                <div id="tooltip-yesterday-breakdown"
                     role="tooltip"
                     class="absolute z-10 invisible inline-block max-w-sm px-3 py-2 text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                  {{ $t('breakdown-tooltip') }}
                  <div class="tooltip-arrow"
                       data-popper-arrow></div>
                </div>
              </label>
            </div>
          </div>
          <apexchart ref="yesterdayBreakdownChart"
                     class="print:hidden"
                     :options="yesterdayBreakdownChart.chartOptions"
                     type="bar"
                     :series="yesterdayBreakdownChart.chartSeries"
                     height="332"></apexchart>
        </div>
      </div>
    </section>
    <section class="break-after-avoid">
      <h4 class="p-2 text-2xl font-bold dark:text-white">{{ $t('last-{n}-days', { n: 30 })[0].toUpperCase() +
        $t('last-{n}-days', { n: 30 }).slice(1) }}</h4>
      <dl class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-3">
        <div v-for="item in monthlyStats"
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
              <span class="sr-only"> {{ item.changeType === 'increase' ? 'Increased' : 'Decreased' }} by </span>
              {{ item.change }}
            </p>
          </dd>
        </div>
      </dl>
      <div class="mb-4 rounded-lg h-96">
        <div class="w-full p-4 bg-white rounded-lg shadow dark:bg-gray-800">
          <img class="hidden print:block"
               :src="imgCharts.monthly"
               alt="Monthly Chart" />
          <apexchart ref="monthlyChart"
                     class="print:hidden"
                     :options="monthlyChart.chartOptions"
                     type="area"
                     :series="monthlyChart.chartSeries"
                     height="332"></apexchart>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { useOverviewStore } from '@/stores/overview';
import { IconUsers, IconUser, IconUsersGroup, IconTrendingUp, IconTrendingDown } from '@tabler/icons-vue'
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    IconUsers,
    IconUser,
    IconUsersGroup,
    IconTrendingUp,
    IconTrendingDown,
    Apexchart: VueApexCharts,
  },
  setup() {
    const { today, yesterday, lastThirtyDays } = useOverviewStore()
    return { today, yesterday, lastThirtyDays }
  },
  data() {

    const todayChart = {
      chartOptions: {
        chart: {
          id: 'today-chart',
          stacked: true,
          fontFamily: 'Inter, sans-serif',
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: true,
          },
        },
        tooltip: {
          enabled: true, // Disable default tooltip
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="p-3 bg-white rounded-md shadow dark:bg-gray-800">' +
              '<p class="text-lg font-semibold text-gray-900 dark:text-white">' +
              w.config.xaxis.categories[dataPointIndex] +
              '</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">' +
              series[seriesIndex][dataPointIndex] +
              ' Views</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">' +
              w.config.series[1].data[dataPointIndex] +
              ' Unique Views</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">Total: ' +
              (series[0][dataPointIndex] + series[1][dataPointIndex]) +
              ' Views</p>' +
              '</div>'
            );
          },
        },
        legend: {
          show: true,
        },
        xaxis: {
          labels: {
            style: {
              colors: '#A0AEC0',
            },
          },
          categories: [
            '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
            '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: '#A0AEC0',
            },
          },
        },
        plotOptions: {
          bar: {
            stacked: true,
          },
        },
      },
      chartSeries: [
        {
          name: 'Views',
          data: this.today.chart.views,
        },
        {
          name: 'Unique Views',
          data: this.today.chart.uniqueViews,
        },
      ],
    }

    const yesterdayChart = {
      chartOptions: {
        chart: {
          id: 'yesterday-chart',
          stacked: true,
          fontFamily: 'Inter, sans-serif',
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: true,
          },
        },
        tooltip: {
          enabled: true, // Disable default tooltip
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="p-3 bg-white rounded-md shadow dark:bg-gray-800">' +
              '<p class="text-lg font-semibold text-gray-900 dark:text-white">' +
              w.config.xaxis.categories[dataPointIndex] +
              '</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">' +
              series[seriesIndex][dataPointIndex] +
              ' Views</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">' +
              w.config.series[1].data[dataPointIndex] +
              ' Unique Views</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">Total: ' +
              (series[0][dataPointIndex] + series[1][dataPointIndex]) +
              ' Views</p>' +
              '</div>'
            );
          },
        },
        legend: {
          show: true,
        },
        xaxis: {
          labels: {
            style: {
              colors: '#A0AEC0',
            },
          },
          categories: [
            '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
            '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: '#A0AEC0',
            },
          },
        },
        plotOptions: {
          bar: {
            stacked: true,
          },
        },
      },
      chartSeries: [
        {
          name: 'Views',
          data: this.yesterday.chart.views,
        },
        {
          name: 'Unique Views',
          data: this.yesterday.chart.uniqueViews,
        },
      ],
    }

    const todayBreakdownChart = {
      chartOptions: {
        chart: {
          id: 'stacked-column-chart',
          stacked: false,
          fontFamily: 'Inter, sans-serif',
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        colors: ['#98FB98', '#FF6B6B', '#E0B0FF'], // Mint Green, Coral, Mauve, Royal Blue
        plotOptions: {
          bar: {
            distributed: true,
          }
        },
        legend: {
          show: true,
          itemMargin: {
            horizontal: 10,
            vertical: 0
          },
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="p-3 bg-white rounded-md shadow dark:bg-gray-800">' +
              '<p class="text-lg font-semibold text-gray-900 dark:text-white">' +
              w.config.xaxis.categories[dataPointIndex] +
              '</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">' +
              series[seriesIndex][dataPointIndex] +
              ' Views</p>' +
              '</div>'
            );
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
            style: {
              colors: '#A0AEC0',
            },
          },
          categories: [
            'Morning', 'Afternoon', 'Evening'
          ],
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
            style: {
              colors: '#A0AEC0',
            },
          },
        },

      },
      chartSeries: [
        {
          data: this.today.breakdown,
        },
      ],
    }


    const yesterdayBreakdownChart = {
      chartOptions: {
        chart: {
          id: 'stacked-column-chart',
          stacked: false,
          fontFamily: 'Inter, sans-serif',
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        colors: ['#98FB98', '#FF6B6B', '#E0B0FF', '#4169E1'], // Mint Green, Coral, Mauve, Royal Blue
        plotOptions: {
          bar: {
            distributed: true,
          }
        },
        legend: {
          show: true,
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
              '<div class="p-3 bg-white rounded-md shadow dark:bg-gray-800">' +
              '<p class="text-lg font-semibold text-gray-900 dark:text-white">' +
              w.config.xaxis.categories[dataPointIndex] +
              '</p>' +
              '<p class="text-gray-500 text-md dark:text-gray-400">' +
              series[seriesIndex][dataPointIndex] +
              ' Views</p>' +
              '</div>'
            );
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
            style: {
              colors: '#A0AEC0',
            },
          },
          categories: [
            'Morning', 'Afternoon', 'Evening', 'Night'
          ],
        },
        yaxis: {
          show: false,
          labels: {
            show: false,
            style: {
              colors: '#A0AEC0',
            },
          },
        },

      },
      chartSeries: [
        {
          data: this.yesterday.breakdown,
        },
      ],
    }

    const arrDays = [];
    for (let index = 0; index < 30; index++) {
      const start = new Date();
      arrDays.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() - index));
    }
    const viewsData = this.lastThirtyDays.chart.views; // Your array of views data

    const resultViews = [];
    for (let i = 0; i < 30; i++) {
      resultViews.push({
        x: arrDays[29 - i].toLocaleDateString(),
        y: viewsData[i]
      });
    }

    const resultUniqueViews = [];
    for (let i = 0; i < 30; i++) {
      resultUniqueViews.push({
        x: arrDays[29 - i].toLocaleDateString(),
        y: this.lastThirtyDays.chart.uniqueViews[i]
      });
    }

    const monthlyChart = {
      chartOptions: {
        chart: {
          id: 'monthly-chart',
          height: "100%",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: false
          }
        },
        tooltip: {
          enabled: true,
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
            const xValue = data.x; // Use the x-value directly

            return `
                  <div class="p-3 bg-white rounded-md shadow dark:bg-gray-800">
                      <p class="text-lg font-semibold text-gray-900 dark:text-white">
                          ${xValue}
                      </p>
                      <p class="text-gray-500 text-md dark:text-gray-400">
                          ${series[seriesIndex][dataPointIndex]} Views
                      </p>
                      <p class="text-gray-500 text-md dark:text-gray-400">
                          ${w.config.series[1].data[dataPointIndex].y} Unique Views
                      </p>
                      <p class="text-gray-500 text-md dark:text-gray-400">
                          Total: ${series[0][dataPointIndex] + series[1][dataPointIndex]} Views
                      </p>
                  </div>`;
          },
          x: {
            show: false,
          },
        },
        legend: {
          show: true
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        xaxis: {
          labels: {
            style: {
              colors: '#A0AEC0',
            },
          },
          categories: [
            arrDays
          ],
        },
        yaxis: {
          show: true,
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
          data: resultViews,
        },
        {
          name: 'Unique Views',
          data: resultUniqueViews,
        },
      ],
    }

    return {
      todayStats: this.today.stats,
      yesterdayStats: this.yesterday.stats,
      monthlyStats: this.lastThirtyDays.stats,
      todayChart,
      yesterdayChart,
      todayBreakdownChart,
      yesterdayBreakdownChart,
      monthlyChart,
      imgCharts: {},
    }
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

      this.$refs.todayBreakdownChart.chart.dataURI().then((uri) => {
        this.imgCharts.todayBreakdown = uri.imgURI
      })

      this.$refs.yesterdayChart.chart.dataURI().then((uri) => {
        this.imgCharts.yesterday = uri.imgURI
      })

      this.$refs.yesterdayBreakdownChart.chart.dataURI().then((uri) => {
        this.imgCharts.yesterdayBreakdown = uri.imgURI
      })

      this.$refs.monthlyChart.chart.dataURI().then((uri) => {
        this.imgCharts.monthly = uri.imgURI
      })
    },
  },
}

</script>