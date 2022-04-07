//global variables that will be needed
// var saveButton = $(".saveBtn");
// var timeBlock = $(".time-block");

// var scheduleInfo;
// var scheduleTime;

//variables for each hour
// var hourNineAm = $("#nine-am");
// var hourTenAm =  $("#ten-am");
// var hourElevenAm = $("#eleven-am");
// var hourTwelvePm = $("#twelve-pm");
// var hourOnePm = $("#one-pm");
// var hourTwoPm = $("#two-pm");
// var hourThreePm = $("#three-pm");
// var hourFourPm = $("#four-pm");
// var hourFivePm  = $("#five-pm");




//WHEN I click the save button for that timeblock
$(".saveBtn").on("click", function(){

   var scheduleTime = $(this).siblings(".description").val();
    var scheduleInfo = $(this).parent().attr("id");
    localStorage.setItem(scheduleInfo, scheduleTime);
    // saveData();
});

//the current day and time is displayed at the top of the page, rerouting every second to have active running clock
// function displayTime() {

//     setInterval(()=> {
//         var time = moment().format("MMMM Do, YYYY h:mm:ss a");
//         $("#currentDay").text(time);
//         }, 1000)

// }


$("#currentDay").text(moment().format('dddd, MMMM Do'));
//depending on the time of day, the attributes need to be set-take the numbers on the side 

//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function timeTrackerWithColor() {
    //setting up for the comparison of the current hours
    var currentHour = moment().hour();

    $(".time-block").each(function() {
//remove dash on the ID of time-block so does not identify as two IDs. Targeting the number that was turned from a string
        var timeBlockHours = parseInt($(this).attr("id").split('-')[1]);
//comparison of the block time with the current time to set the CSS of the time blocks
        if (timeBlockHours < currentHour) {
            $(this).addClass("past");
        } else if (timeBlockHours === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    
    });
}

timeTrackerWithColor();
var interval = setInterval(timeTrackerWithColor, 15000)
    
//THEN the text for that event is saved in local storage
//value from local storage will go in to parent line but will be saved in text area
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));



    
    
//WHEN I refresh the page
//THEN the saved events persist
// displayTime();