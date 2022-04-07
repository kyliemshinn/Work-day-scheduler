//global variables that will be needed
var saveButton = $(".saveBtn");
var timeBlock = $(".time-block");
var description = $(".description")

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

        var timeBlockHours = parseInt($(this));
//comparison of the block time with the current time to set the CSS of the time blocks
        if (timeBlockHours > currentHour) {
            $(this).addClass("future");
        } else if (timeBlockHours === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    
    });


//WHEN I click the save button for that timeblock
saveButton.on("click", function(){
    scheduleInfo = $(this).siblings(".description").val();
    scheduleTime = $(this).parent().attr("id");
    localStorage.setItem(scheduleInfo, scheduleTime);
    saveData();
});
    
//THEN the text for that event is saved in local storage
function saveData() {

    localStorage.setItem(scheduleTime, scheduleInfo);
    localStorage.getItem(scheduleInfo, scheduleTime);

//     description.val(localStorage.getItem(hourNineAm));
//     description.val(localStorage.getItem(hourTenAm));
//     description.val(localStorage.getItem(hourElevenAm));
//     description.val(localStorage.getItem(hourTwelvePm));
//     description.val(localStorage.getItem(hourOnePm));
//     description.val(localStorage.getItem(hourTwoPm));
//     description.val(localStorage.getItem(hourThreePm));
//     description.val(localStorage.getItem(hourFourPm));
//     description.val(localStorage.getItem(hourFivePm));
}

}
//WHEN I refresh the page
//THEN the saved events persist
timeTrackerWithColor();
displayTime();