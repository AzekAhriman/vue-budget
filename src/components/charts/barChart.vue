<script>
import { Bar, mixins } from 'vue-chartjs'
import Vue from "vue";
const { reactiveProp } = mixins

export default Vue.extend({
  extends: Bar,
  mixins: [reactiveProp],
  props: ['chartData'],
  mounted () {
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false});
  },
  methods: {
    updateChart () {
      this.$data._chart.update();
    },
  }
})
</script>

<style>
</style>
