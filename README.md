ember-apexchartsjs
==============================================================================

A simple ember wrapper for [apexcharts](https://apexcharts.com)

[![Travis][build-badge]][build]


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-apexchartsjs
```

Usage
------------------------------------------------------------------------------

#### Option 1: Type, height, width series, chartOptions as arguments

```js
type = 'bar';
width = '800px';
height = '400px';
series = [{
  name: 'Sales',
  data: [30,40,35,50,49,60,70,91,125]
}];
chartOptions = {
  title: {
    text: 'Bar Chart'
  },
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}
```

```hbs
<ApexChart
 @type={{this.type}}
 @width={{this.width}}
 @height={{this.height}}
 @series={{this.series}}
 @chartOptions={{this.chartOptions}}
/>
```

#### Option 2: chartOptions as the only argument

```js
const chartOptions = {
  chart: {
    height: '400px',
    type: 'line',
    width: '800px'
  },
  series: [{
    data: [30,40,35,50,49,60,70,91,125]
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}
```

```hbs
<ApexChart
  @chartOptions={{this.chartOptions}}
/>
```

The complete set of supported chart types and chart options can be found here: [Apexcharts Documentation](https://apexcharts.com/docs)

#### Actions

All the [apexchart events](https://apexcharts.com/docs/options/chart/events/) can be specified as arguments to the ApexChart component. 
The example below potrays the use of `click` and `beforeMount` events.

```js
type = 'bar';
series = [{
  name: 'Sales',
  data: [30,40,35,50,49,60,70,91,125]
}];

@action
clickHandler() {
  //click handler
}

@action
beforeMountHandler() {
  //before mount handler
}
```

```hbs
<ApexChart
 @type={{this.type}}
 @series={{this.series}}
 @onClick={{this.clickHandler}}
 @onBeforeMount={{this.beforeMountHandler}}
/>
```

Complete list of action arguments and their corresponding apexchart event below:

| Apexchart event | Action Argument | 
| ------------- |-------------| 
| [beforeMount](https://apexcharts.com/docs/options/chart/events/#beforeMount) | onBeforeMount | 
| [beforeZoom](https://apexcharts.com/docs/options/chart/events/#beforeZoom) | onBeforeZoom |
| [click](https://apexcharts.com/docs/options/chart/events/#zoom) | onClick |
| [dataPointSelection](https://apexcharts.com/docs/options/chart/events/#dataPointSelection) | onDataPointSelection | 
| [dataPointMouseEnter](https://apexcharts.com/docs/options/chart/events/#dataPointMouseEnter) | onDataPointMouseEnter | 
| [dataPointMouseLeave](https://apexcharts.com/docs/options/chart/events/#dataPointMouseLeave) | onDataPointMouseLeave | 
| [legendClick](https://apexcharts.com/docs/options/chart/events/#legendClick) | onLegendClick | 
| [markerClick](https://apexcharts.com/docs/options/chart/events/#markerClick) | onMarkerClick | 
| [mouseMove](https://apexcharts.com/docs/options/chart/events/#mouseMove) | onMouseMove | 
| [mounted](https://apexcharts.com/docs/options/chart/events/#mounted) | onMounted | 
| [scrolled](https://apexcharts.com/docs/options/chart/events/#scrolled) | onScrolled | 
| [selection](https://apexcharts.com/docs/options/chart/events/#selection) | onSelection | 
| [updated](https://apexcharts.com/docs/options/chart/events/#updated) | onUpdated | 
| [zoomed](https://apexcharts.com/docs/options/chart/events/#zoomed) | onZoomed |

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

[build-badge]: https://travis-ci.org/balajimanoharan/ember-apexchartsjs.svg?branch=master
[build]: https://travis-ci.org/balajimanoharan/ember-apexchartsjs
