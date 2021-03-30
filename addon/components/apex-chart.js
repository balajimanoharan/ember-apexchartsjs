import Component from '@glimmer/component';
import ApexCharts from 'apexcharts';
import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import { classify } from '@ember/string';
import { buildWaiter } from '@ember/test-waiters';
import Ember from 'ember';

const CHART_EVENTS = [
  'beforeMount',
  'beforeZoom',
  'click',
  'dataPointSelection',
  'dataPointMouseEnter',
  'dataPointMouseLeave',
  'legendClick',
  'markerClick',
  'mouseMove',
  'mounted',
  'scrolled',
  'selection',
  'updated',
  'zoomed',
];

const waiter = buildWaiter('ember-apexchartsjs:render-waiter');

export default class ApexChart extends Component {
  get guid() {
    return guidFor(this);
  }

  get chartEvents() {
    return CHART_EVENTS.reduce((eventObj, event) => {
      const chartAction = this.args[`on${classify(event)}`];
      if (chartAction) eventObj[event] = chartAction;
      return eventObj;
    }, {});
  }

  get options() {
    const {
      type = 'line',
      width = '100%',
      height = 'auto',
      series = [],
      chartOptions = {},
    } = this.args;

    const options = {
      series,
      ...chartOptions,
    };

    //use type, width and height args if specified
    options.chart = {
      type,
      width,
      height,
      ...options.chart,
    };

    options.chart.events = this.chartEvents;

    if (Ember.testing) {
      // Apex throws an error while running a listener if the chart
      // is being destroyed and animations are disabled
      options.chart.animations = options.chart.animations || {};
      options.chart.animations.enabled = true;
      // Speed up animations during tests
      options.chart.animations.speed = 100;
    }

    return options;
  }

  @action
  destroyChart() {
    if (this.chart) this.chart.destroy();
  }

  @action
  createChart(element) {
    this.destroyChart();

    this.chart = new ApexCharts(element, this.options);

    const token = waiter.beginAsync();
    this.chart.render().finally(() => waiter.endAsync(token));
  }
}
