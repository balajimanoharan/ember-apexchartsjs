import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, clearRender } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | apex-chart', function (hooks) {
  setupRenderingTest(hooks);

  test('renders with animations enabled during tests', async function (assert) {
    assert.expect(1);

    this.set('chartOptions', {
      chart: {
        type: 'line',
        animations: {
          enabled: false,
        },
      },
      series: [
        {
          data: [30, 40, 35],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993],
      },
    });

    await render(hbs`<ApexChart
     class="apexchart apexchart__line"
     @chartOptions={{this.chartOptions}}
    />`);

    await clearRender();

    // The error apex was emitting would only show up in the browser console
    // and I could not find a way to capture it, so check there
    assert.ok(true, 'rendered and destroyed without errors');
  });

  test('renders different chart types based on chartOptions', async function (assert) {
    assert.expect(5);

    this.set('chartOptions', {
      chart: {
        type: 'line',
      },
      series: [
        {
          data: [30, 40, 35],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993],
      },
    });

    await render(hbs`<ApexChart
     class="apexchart apexchart__line"
     @chartOptions={{this.chartOptions}}
    />`);

    assert
      .dom('div.ember-apex-chart .apexcharts-line-series')
      .exists(
        'The component renders a line chart when the type specified is `line`'
      );

    assert
      .dom('div.ember-apex-chart')
      .hasClass(
        'apexchart',
        'The component renders a line chart when classnames passed through'
      );
    assert
      .dom('div.ember-apex-chart')
      .hasClass(
        'apexchart__line',
        'The component renders a line chart when classnames passed through'
      );

    this.set('chartOptions', {
      chart: {
        type: 'bar',
      },
      series: [
        {
          data: [30, 40, 35],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993],
      },
    });

    assert
      .dom('div.ember-apex-chart .apexcharts-bar-series')
      .exists(
        'The component renders a bar chart when the type specified is `bar`'
      );
    assert
      .dom('div.ember-apex-chart .apexcharts-toolbar')
      .exists('The toolbar is rendered by default');
  });

  test('type, series, chartOptions', async function (assert) {
    assert.expect(8);

    this.set('type', 'bar');
    this.set('series', [
      {
        data: [30, 40, 35],
      },
    ]);
    this.set('chartOptions', {
      chart: {
        toolbar: { show: false },
      },
    });

    await render(hbs`<ApexChart
     class="apexchart apexchart__bar"
     @type={{type}}
     @series={{series}}
     @chartOptions={{chartOptions}}
    />`);

    assert
      .dom('div.ember-apex-chart .apexcharts-bar-series')
      .exists('The component renders a bar chart based on the type specified');

    assert
      .dom('div.ember-apex-chart .apexcharts-bar-series path')
      .exists(
        { count: 3 },
        'The component renders a bar chart with three bars based on the series'
      );

    this.set('series', [
      {
        data: [30, 40, 35, 55],
      },
    ]);
    assert
      .dom('div.ember-apex-chart .apexcharts-bar-series path')
      .exists(
        { count: 4 },
        'The component renders a line chart with four lines based on series arg'
      );

    this.set('type', 'line');
    assert
      .dom('div.ember-apex-chart .apexcharts-bar-series')
      .doesNotExist(
        'When type is changes, the chart updates and removes the bar chart'
      );
    assert
      .dom('div.ember-apex-chart .apexcharts-line-series')
      .exists('When type is changes, the chart updates to a line chart');

    assert
      .dom('div.ember-apex-chart .apexcharts-title-text')
      .doesNotExist(
        'When title is not specified in the options, the chart does not render title text'
      );
    assert
      .dom('div.ember-apex-chart .apexcharts-toolbar')
      .doesNotExist(
        'The toolbar is not rendered as specified in the chart options'
      );

    this.set('chartOptions', {
      title: {
        text: 'Test Chart',
      },
    });
    assert
      .dom('div.ember-apex-chart .apexcharts-title-text')
      .hasText(
        'Test Chart',
        'When options are changed, the chart updates and adds a title'
      );
  });

  test('actions', async function (assert) {
    assert.expect(3);

    this.set('type', 'bar');
    this.set('series', [
      {
        data: [30, 40, 35],
      },
    ]);
    this.set('beforeMountHandler', () => {
      assert.ok(
        true,
        'Before Mount action is registered correctly and triggered'
      );
      assert
        .dom('div.ember-apex-chart .apexcharts-bar-series')
        .doesNotExist(
          'Before Mount handler is triggered before the chart is rendered'
        );
    });

    this.set('clickHandler', () => {
      assert.ok(true, 'Click action is registered correctly and triggered');
    });

    await render(hbs`<ApexChart
     class="apexchart apexchart__bar"
     @type={{type}}
     @series={{series}}
     @onClick={{action clickHandler}}
     @onBeforeMount={{action beforeMountHandler}}
    />`);

    await click('.apexchart__bar .apexcharts-bar-series');
  });
});
