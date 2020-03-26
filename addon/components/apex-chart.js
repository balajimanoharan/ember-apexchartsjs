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
      chartOptions={}
    } = this.args;

    return {
      chart: { type, width, height },
      series,
      ...chartOptions
    };
  }

  @action
  destroyChart() {
    if(this.chart) this.chart.destroy();
  }

  @action
  createChart(element) {
    this.destroyChart();

    this.chart = new ApexCharts(element, this.chartOptions);
    this.chart.render();
  }
}
