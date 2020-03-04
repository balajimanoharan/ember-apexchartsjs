import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  lineChartOptions = {
    chart: {
      height: '400px',
      type: 'line',
      width: '800px'
    },
    series: [{
      name: 'Sales',
      data: [30,40,35,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
}
