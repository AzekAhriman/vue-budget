<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderChart({labels: this.data, datasets: this.options})
  }
}
</script>

<style>
</style>
