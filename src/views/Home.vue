<template>
  <div class="home">
    <Header/>
    <main class="dashboard">
      <div class="dashboard-data">
        <div class="dashboard-data-block" v-for="(block, blockIndex) in blocks" :key="blockIndex">
          <div class="dashboard-data-block-name">{{ block }}</div>
          <div class="dashboard-data-block-table">
            <div class="dashboard-data-block-table-line" v-for="(value, index) in budgetCategories[blockIndex]" :key="index">
              <div class="dashboard-data-block-table-line-name">{{ value }}</div>
              <div class="dashboard-data-block-table-line-value">{{ budgetValues[blockIndex][index] }}</div>
            </div>
          </div>
        </div>
        <button @click="debounceMethod">Debounce</button>
      </div>
      <div class="dashboard-charts">
        <BarChart ref="initChart" v-if="chartType === 'bar'" :chart-data="chartsOptions" />
        <DoughnutChart v-if="chartType === 'doughnut'" :chart-data="chartsOptions" />
        <LineChart v-if="chartType === 'line'" :chart-data="chartsOptions" />
        <PolarChart v-if="chartType === 'polar'" :chart-data="chartsOptions" />
        <RadarChart v-if="chartType === 'radar'" :chart-data="chartsOptions" />
        <PieChart v-if="chartType === 'pie'" :chart-data="chartsOptions" />
        <div class="dashboard-charts-buttons">
          <button class="dashboard-charts-button" @click="changeChart('bar')">Bar</button>
          <button class="dashboard-charts-button" @click="changeChart('line')">Line</button>
          <button class="dashboard-charts-button" @click="changeChart('doughnut')">Doughnut</button>
          <button class="dashboard-charts-button" @click="changeChart('pie')">Pie</button>
          <button class="dashboard-charts-button" @click="changeChart('radar')">Radar</button>
          <button class="dashboard-charts-button" @click="changeChart('polarArea')">Polar</button>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header.vue';
import BarChart from '@/components/charts/barChart.vue';
import DoughnutChart from '@/components/charts/doughnutChart.vue';
import LineChart from '@/components/charts/lineChart.vue';
import PolarChart from '@/components/charts/polarChart.vue';
import RadarChart from '@/components/charts/radarChart.vue';
import PieChart from '@/components/charts/pieChart.vue';
import Footer from '@/components/footer.vue';
import axios from "axios";
import _ from 'lodash';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    BarChart,
    DoughnutChart,
    LineChart,
    PolarChart,
    RadarChart,
    PieChart,
    Footer
  },
  data() {
    return {
      blocks: [] as Array<string>,
      budgetCategories: [] as Array<Array<string>>,
      budgetValues: [] as Array<Array<number>>,
      chartsOptions: {
        labels: [] as Array<string>,
        datasets: [
          {
            label: 'Expenses',
            backgroundColor: '#E46651' as any,
            data: [] as Array<number>
          }
        ]
      },
      chartType: 'bar',
    }
  },
  methods: {
    changeChart(type: string) {
      this.chartType = type;
      if(type == 'pie' || type == 'doughnut') {
        this.chartsOptions.datasets[0].backgroundColor = []
        this.chartsOptions.labels.forEach(() => {
          this.chartsOptions.datasets[0].backgroundColor.push('#'+(Math.random()*0xFFFFFF<<0).toString(16))
        })
      } else {
        this.chartsOptions.datasets[0].backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
    debounceMethod: _.debounce(() => {
      console.log('Debounce button clicked!')
    }, 1000)
  },
  mounted() {
    if (this.$route.name == 'Home') {
      axios.get('http://localhost:3000/api/records/' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear())
          .then((response: Record<string, any>) => {
            let sum = 0;
            this.blocks = response.data.data.blocks;
            this.budgetCategories = response.data.data.budgetCategories;
            this.budgetValues = response.data.data.budgetValues;
            this.chartsOptions.labels = response.data.data.blocks;
            this.budgetValues.forEach(section => {
              sum = 0;
              section.forEach(num => sum = sum + num);
              this.chartsOptions.datasets[0].data.push(sum);
            });
            (this.$refs.initChart as any).updateChart();
          })
          .catch((error: any) => {
            console.log(error);
          })
    } else if (this.$route.name == 'History') {
      axios.get('http://localhost:3000/api/records/' + this.$route.params.date)
          .then((response: Record<string, any>) => {
            let sum = 0;
            this.blocks = response.data.data.blocks;
            this.budgetCategories = response.data.data.budgetCategories;
            this.budgetValues = response.data.data.budgetValues;
            this.chartsOptions.labels = response.data.data.blocks;
            this.budgetValues.forEach(section => {
              sum = 0;
              section.forEach(num => sum = sum + num);
              this.chartsOptions.datasets[0].data.push(sum);
            });
            (this.$refs.initChart as any).updateChart();
          })
          .catch((error: any) => {
            console.log(error);
          })
    }
  }
});
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.dashboard {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  flex-grow: 1;
}

.dashboard-data {
  width: 45%;
  display: flex;
  flex-direction: column;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  background-color: papayawhip;
  padding: 10px;
}

.dashboard-data button {
  margin-top: 20px;
}

.dashboard-charts {
  width: 45%;
  display: flex;
  flex-direction: column;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  background-color: papayawhip;
  padding: 10px;
}

.dashboard-data-block {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.dashboard-data-block:first-of-type {
  margin-top: 0;
}

.dashboard-data-block-name {
  font-size: 18px;
  font-weight: bold;
}

.dashboard-data-block-table {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.dashboard-data-block-table-line {
  width: 100%;
  display: flex;
  font-size: 14px;
  border: 1px solid black;
  border-bottom: 0;
}

.dashboard-data-block-table-line:last-of-type {
  border-bottom: 1px solid black;
}

.dashboard-data-block-table-line-name {
  width: 50%;
  padding: 5px;
  border-right: 1px solid black;
}

.dashboard-data-block-table-line-value {
  width: 50%;
  padding: 5px;
}
.dashboard-charts-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
</style>
