//to display current date and time at the top
var currentTime = $('#currentDay');

var timeEl= $('<h2>');

timeEl.attr('hour');
timeEl = moment().format('MMMM Do YYYY, h:mm a');
eventTracker = moment().format('h a');
console.log(eventTracker);
console.log(timeEl);

currentTime.append(timeEl);





var eventSubmit = $('#eventInput');
var eventLog = $('#events-listed');

function addEvent(event) {
    event.preventDefault();

    var eventAdd = $('input[name="event-entry"]').val();

    if (!eventAdd) {
        displayMessage("Please add event");
        console.log('No event added');
    } else {
        displayMessage("Event Added");

        localStorage.setItem("event", eventAdd)

    }

    eventLog.append(eventAdd);
    console.log(eventLog);
    console.log(eventAdd);

    $('input[name="event-entry"]').val('');

}

eventSubmit.on('submit', addEvent, eventTime);

eventSubmit.append('#eventInput');

function eventTime() {

    if (timeEl === eventTracker) {
        eventEl.addClass('present')
    }

    if (timeEl < eventTracker) {
        eventEl.addClass('past')
    }

    if (timeEl > eventTracker) {
        eventEl.addClass('future')
    }
}

