//to display current date and time at the top
var currentTime = $('#currentDay');

var timeEl= $('<h2>');

timeEl.attr('hour');
timeEl = moment().format('MMMM Do YYYY, h:mm a');
eventTracker = moment().format('h a');
console.log(eventTracker);
console.log(timeEl);

currentTime.append(timeEl);



