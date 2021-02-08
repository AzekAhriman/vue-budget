<script>
import VueCharts from 'vue-chartjs'

export default {
  extends: VueCharts.Bar,
  mixins: [VueCharts.mixins.reactiveProp],
  props: ['chartData', 'chartType'],
  mounted () {
    console.log(this.chartData);
    this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false});
  },
  watch: {
    chartType (newVal) {
      this.$data._chart.destroy();
      setTimeout(() => {
        this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
        this.$data._chart.config.type = newVal;
        this.updateChart();
      }, 1);
    }
  },
  methods: {
    updateChart () {
      this.$data._chart.update();
    },
  }
}
</script>

<style>
</style>
