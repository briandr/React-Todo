var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1515701565;
var currentMoment = moment.unix(timestamp);
console.log('current Moment:', currentMoment.format('MMM D, YYYY @h:mm a'));

console.log('current Moment:', currentMoment.format('MMMM Do, YYYY @h:mm A'));