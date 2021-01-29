<template>
  <main class="dashboard">
    <div class="dashboard-data">
      <div class="dashboard-data-block" v-for="(block, blockName, blockIndex) in report" :key="blockIndex">
        <div class="dashboard-data-block-name">{{ blockName }}</div>
        <div class="dashboard-data-block-table">
          <div class="dashboard-data-block-table-line" v-for="(value, name, index) in block" :key="index">
            <div class="dashboard-data-block-table-line-name">{{ name }}</div>
            <div class="dashboard-data-block-table-line-value">{{ value }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-charts"></div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Dashboard',
  data() {
    return {
      report: {
        'Rent' : {
          'House rent' : 1000,
          'Wastes' : 1000,
          'Water' : 1000,
          'Etc' : 1000,
        },
        'Food' : {
          'Grocery' : 1000,
          'Outdoor' : 1000,
          'Etc' : 1000,
        },
      }
    }
  }
});
</script>

<style scoped>
  .dashboard {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
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
</style>
