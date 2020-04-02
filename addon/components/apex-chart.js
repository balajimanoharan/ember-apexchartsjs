import Component from '@glimmer/component';
import ApexCharts from 'apexcharts';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';

export default class ApexChart extends Component {
  get guid() {
    return guidFor(this);
  }

  get options() {
    const {
      type='line',
      width='100%',
      height='auto',
      series=[],
      chartOptions={}
    } = this.args;

    const options = {
      series,
      ...chartOptions
    };

    //use type, width and height args if specified
    options.chart = {
      type, width, height,
      ...options.chart
    };

    return options;
  }

  @action
  destroyChart() {
    if(this.chart) this.chart.destroy();
  }

  @action
  createChart(element) {
    this.destroyChart();

    this.chart = new ApexCharts(element, this.options);
    this.chart.render();
  }
}
