import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  lineChartOptions = {
    chart: {
      height: '400px',
      type: 'line',
      width: '800px',
    },
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    title: {
      text: 'Line Chart',
    },
  };

  //bar chart options
  type = 'bar';
  width = '800px';
  height = '400px';
  series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ];
  barOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Bar Chart',
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  @action
  clickHandler() {
    console.log('Click handler triggered');
  }

  @action
  beforeMountHandler() {
    console.log('Before Mount handler triggered');
  }
}
