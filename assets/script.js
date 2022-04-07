//global variables that will be needed
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");
var scheduleInfo;
var scheduleTime;

//variables for each hour
var hourNineAm = $("#nine-am");
var hourTenAm =  $("#ten-am");
var hourElevenAm = $("#eleven-am");
var hourTwelvePm = $("#twelve-pm");
var hourOnePm = $("#one-pm");
var hourTwoPm = $("#two-pm");
var hourThreePm = $("#three-pm");
var hourFourPm = $("#four-pm");
var hourFivePm  = $("#five-pm");





//the current day and time is displayed at the top of the page, rerouting every second to have active running clock
function displayTime() {

    setInterval(()=> {
        var time = moment().format("MMMM Do, YYYY h:mm:ss a");
        $("#currentDay").text(time);
        }, 1000)

}
//depending on the time of day, the attributes need to be set-take the numbers on the side 

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeTrackerWithColor() {
    //setting up for the comparison of the current hours
    var currentHour = moment().hour();


    timeBlock.each(function() {
        var timeBlockHours = parseInt($(this).attr("id").split("hour")[1]);
//comparison of the block time with the current time to set the CSS of the time blocks
        if (timeBlockHours > currentHour) {
            $(this).addClass("future");
        } else if (timeBlockHours === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
        console.log(this)
     
    });
}


//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage

function saveData() {
    localStorage.setItem(scheduleTime, scheduleInfo);
}

//WHEN I refresh the page
//THEN the saved events persist
displayTime();

