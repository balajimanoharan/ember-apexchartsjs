import Component from '@glimmer/component';
import ApexCharts from 'apexcharts';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { isNone } from '@ember/utils';
import { assert } from '@ember/debug';

export default class ApexChart extends Component {
  get className() {
    return guidFor(this);
  }

  @action
  destroyChart() {
    if(this.chart) this.chart.destroy();
  }

  @action
  createChart(element) {
    this.destroyChart();

    assert('this.args.chartOptions must be defined', !isNone(this.args.chartOptions));

    this.chart = new ApexCharts(element, this.args.chartOptions);
    this.chart.render();
  }
}
