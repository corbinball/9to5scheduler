//to display current date and time at the top
var currentTime = $('#currentDay');

var timeEl= $('<h2>');

timeEl.attr('hour');
timeEl = moment().format('MMMM Do YYYY, h:mm a');
eventTracker = moment().format('HH a');
console.log(eventTracker);
console.log(timeEl);

currentTime.append(timeEl);


var eventInput = document.querySelector("#textTime9");
var saveInput = document.querySelector("#svBtn9");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime10");
var saveInput = document.querySelector("#svBtn10");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime11");
var saveInput = document.querySelector("#svBtn11");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});


var eventInput = document.querySelector("#textTime12");
var saveInput = document.querySelector("#svBtn12");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime1");
var saveInput = document.querySelector("#svBtn1");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime2");
var saveInput = document.querySelector("#svBtn2");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime3");
var saveInput = document.querySelector("#svBtn3");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime4");
var saveInput = document.querySelector("#svBtn4");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

var eventInput = document.querySelector("#textTime5");
var saveInput = document.querySelector("#svBtn5");

saveInput.addEventListener("click", function(event) {
    event.preventDefault();

    var userInput = eventInput.value.trim();

    localStorage.setItem("userInput", JSON.stringify(userInput));
    localStorage.getItem("userInput");
});

