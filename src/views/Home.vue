<template>
  <div class="home">
    <Header/>
    <main class="dashboard">
      <div class="dashboard-data">
        <div class="dashboard-data-block" v-for="(block, blockIndex) in blocks" :key="blockIndex">
          <div class="dashboard-data-block-name">{{ blocks[blockIndex] }}</div>
          <div class="dashboard-data-block-table">
            <div class="dashboard-data-block-table-line" v-for="(value, index) in budgetCategories[blockIndex]" :key="index">
              <div class="dashboard-data-block-table-line-name">{{ budgetCategories[blockIndex][index] }}</div>
              <div class="dashboard-data-block-table-line-value">{{ budgetValues[blockIndex][index] }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="dashboard-charts"></div>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import axios from "axios";

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      blocks: [] as Array<string>,
      budgetCategories: [] as Array<Array<string>>,
      budgetValues: [] as Array<Array<number>>
    }
  },
  created() {
    if (this.$route.name == 'Home') {
      axios.get('http://localhost:3000/api/records/' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear())
          .then((response: Record<string, any>) => {
            this.blocks = response.data.data.blocks;
            this.budgetCategories = response.data.data.budgetCategories;
            this.budgetValues = response.data.data.budgetValues;
            console.log(response.data.data);
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
