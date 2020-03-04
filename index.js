'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    autoImport: {
      alias: {
        'apexcharts': 'apexcharts/dist/apexcharts.min.js'
      }
    }
  }
};
