ember-apex-charts
==============================================================================

A simple ember wrapper for [apexcharts](https://apexcharts.com)


Compatibility
------------------------------------------------------------------------------

* Ember.js >= v3.13
* Ember CLI >= 3.12.0-beta.2
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-apex-charts
```

Usage
------------------------------------------------------------------------------

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

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
