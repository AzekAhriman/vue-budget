<script>
import { PolarArea, mixins } from 'vue-chartjs'
import Vue from "vue";
const { reactiveProp } = mixins

export default Vue.extend({
  extends: PolarArea,
  mixins: [reactiveProp],
  props: ['chartData'],
  mounted () {
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false});
  }
})
</script>

<style>
</style>
