import Component from '@glimmer/component';
import ApexCharts from 'apexcharts';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class ApexChart extends Component {
  get guid() {
    return guidFor(this);
  }

  get chartOptions() {
    const {
      type='line',
      width='100%',
      height='auto',
      series=[],
      options={}
    } = this.args;
    let chartOptions = Object.assign({}, options, { chart: {}, series });

    chartOptions.chart = Object.assign(chartOptions.chart, {
      type, width, height
    });

    return chartOptions;
  }

  @action
  destroyChart() {
    if(this.chart) this.chart.destroy();
  }

  @action
  createChart(element) {
    this.destroyChart();

    let chartOptions = this.args.chartOptions || this.chartOptions;

    this.chart = new ApexCharts(element, chartOptions);
    this.chart.render();
  }
}
