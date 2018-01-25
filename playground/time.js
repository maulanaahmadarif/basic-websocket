const moment = require('moment');

const date = moment();

date.add(2, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));