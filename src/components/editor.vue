<template>
  <main class="editor">
    <div class="editor-data">
      <div class="editor-data-block" v-for="(block, blockIndex) in blocks" :key="blockIndex">
        <div class="editor-data-block-name">{{ block }}</div>
        <div class="editor-data-block-table">
          <div class="editor-data-block-table-line" v-for="(value, index) in budgetCategories[blockIndex]" :key="index">
            <div class="editor-data-block-table-line-name"><input type="text" v-model="budgetCategories[blockIndex][index]"></div>
            <div class="editor-data-block-table-line-value"><input type="text" v-model="budgetValues[blockIndex][index]"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="editor-data">
      <button>+ Add block</button>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Editor',
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
      },
      blocks: [
          'Rent', 'Food'
      ],
      budgetCategories : [
        [
            'House rent',
            'Wastes',
            'Water',
            'Etc',
        ],
        [
            'Grocery',
            'Outdoor',
            'Etc',
        ],
      ],
      budgetValues : [
        [
          1000,
          2000,
          3000,
          4000,
        ],
        [
          1000,
          2000,
          3000,
        ],
      ]
    }
  }
});
</script>

<style scoped>
  .editor {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 40px;
    flex-grow: 1;
  }
  .editor-data {
    width: 45%;
    display: flex;
    flex-direction: column;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    background-color: papayawhip;
    padding: 10px;
  }
  .editor-data-block {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  .editor-data-block:first-of-type {
    margin-top: 0;
  }
  .editor-data-block-name {
    font-size: 18px;
    font-weight: bold;
  }
  .editor-data-block-table {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .editor-data-block-table-line {
    width: 100%;
    display: flex;
    font-size: 14px;
    border: 1px solid black;
    border-bottom: 0;
  }
  .editor-data-block-table-line:last-of-type {
    border-bottom: 1px solid black;
  }
  .editor-data-block-table-line-name {
    width: 50%;
    padding: 5px;
    border-right: 1px solid black;
  }
  .editor-data-block-table-line-value {
    width: 50%;
    padding: 5px;
  }
</style>
