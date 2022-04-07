//global variables that will be needed
var saveButton = $(".saveBtn");
var scheduleInfo;
var scheduleTime;








//the current day and time is displayed at the top of the page, rerouting every second to have active running clock
function displayTime() {

    setInterval(()=> {
        var time = moment().format("MMMM Do, YYYY h:mm:ss a");
        $("#currentDay").text(time);
        }, 1000)

}



//WHEN I click into a timeblock
//THEN I can enter an event

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeTracker() {
    var currentHour = moment().hour();
}

//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

function saveData() {
    localStorage.setItem(scheduleTime, scheduleInfo);
}

//WHEN I refresh the page
//THEN the saved events persist

displayTime();