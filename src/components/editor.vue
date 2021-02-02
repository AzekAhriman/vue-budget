<template>
  <main class="editor">
    <button @click="test"></button>
    <div class="editor-data" v-for="(block, blockIndex) in blocks" :key="blockIndex">
      <button class="delete-block" @click="deleteBlock(blockIndex)">Delete block</button>
      <div class="editor-data-block">
        <div class="editor-data-block-name"><label><input type="text" v-model="blocks[blockIndex]"></label></div>
        <div class="editor-data-block-table">
          <div class="editor-data-block-table-line" v-for="(value, index) in budgetCategories[blockIndex]" :key="index">
            <div class="editor-data-block-table-line-name"><label><input type="text" v-model="budgetCategories[blockIndex][index]"></label></div>
            <div class="editor-data-block-table-line-value"><label><input type="text" v-model="budgetValues[blockIndex][index]"></label></div>
            <button class="delete-line" @click="deleteLine(blockIndex, index)">x</button>
          </div>
        </div>
        <button class="add-line" @click="addLine(blockIndex)">+ Add line</button>
      </div>
    </div>
    <div class="editor-data">
      <button class="add-block" @click="addBlock">+ Add block</button>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from "axios";

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
  },
  methods: {
    test() {
      axios.post('http://localhost:3000/api/records', {

          data: {test: 'test'}

      })
          .then(function (response: any) {
            // handle success
            console.log(response);
          })
          .catch(function (error: any) {
            // handle error
            console.log(error);
          })
    },
    addBlock() {
      this.blocks.push('');
      this.budgetCategories.push([]);
      this.budgetValues.push([]);
    },
    deleteBlock(index: number) {
      this.blocks.splice(index, 1);
      this.budgetCategories.splice(index, 1);
      this.budgetValues.splice(index, 1);
    },
    addLine(index: number) {
      this.budgetCategories[index].push('');
      this.budgetValues[index].push(0);
    },
    deleteLine(blockIndex: number, index: number) {
      this.budgetCategories[blockIndex].splice(index, 1);
      this.budgetValues[blockIndex].splice(index, 1);
    },
  }
});
</script>

<style scoped>
  .editor {
    width: 100%;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 60px;
    padding: 0 40px;
    flex-grow: 1;
  }
  .editor-data {
    display: flex;
    flex-direction: column;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    background-color: papayawhip;
    padding: 10px;
    position: relative;
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
  }
  .editor-data-block-table-line-name {
    width: 50%;
    padding: 5px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
  }
  .editor-data-block-table-line:last-of-type .editor-data-block-table-line-name {
    border-bottom: 1px solid black;
  }
  .editor-data-block-table-line-value {
    width: 50%;
    padding: 5px;
    border-top: 1px solid black;
    border-right: 1px solid black;
  }

  .editor-data-block-table-line:last-of-type .editor-data-block-table-line-value {
    border-bottom: 1px solid black;
  }
  .delete-block {
    position: absolute;
    right: 20px;
    top: 11px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    background: transparent;
    color: red;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
  .delete-line {
    margin: 0 10px;
    border: 0;
    background: transparent;
    color: red;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
  }
  .add-line {
    margin-top: 20px;
    background: green;
    color: white;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    padding: 10px;
    cursor: pointer;
  }
  .add-block {
    background: green;
    color: white;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
</style>
