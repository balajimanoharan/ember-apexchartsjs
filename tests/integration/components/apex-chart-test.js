import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | apex-chart', function(hooks) {
  setupRenderingTest(hooks);

  test('renders different chart types based on chartOptions', async function(assert) {
    assert.expect(4);

    this.set('chartOptions', {
      chart: {
        type: 'line'
      },
      series: [{
        data: [30,40,35]
      }],
      xaxis: {
        categories: [1991,1992,1993]
      }
    });

    await render(hbs`<ApexChart
     @classNames="apexchart apexchart__line"
     @chartOptions={{this.chartOptions}}
    />`);

    assert.dom('div.ember-apex-chart .apexcharts-line-series')
      .exists('The component renders a line chart when the type specified is `line`');

    assert.dom('div.ember-apex-chart')
      .hasClass('apexchart',
      'The component renders a line chart when classnames passed through');
    assert.dom('div.ember-apex-chart')
      .hasClass('apexchart__line',
      'The component renders a line chart when classnames passed through');

    this.set('chartOptions', {
      chart: {
        type: 'bar'
      },
      series: [{
        data: [30,40,35]
      }],
      xaxis: {
        categories: [1991,1992,1993]
      }
    });

    assert.dom('div.ember-apex-chart .apexcharts-bar-series')
      .exists('The component renders a bar chart when the type specified is `bar`');
  });
});
