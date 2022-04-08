//the current day and time is displayed at the top of the page, rerouting every second to have active running clock
function displayTime() {

    setInterval(()=> {
        var time = moment().format("MMMM Do, YYYY h:mm:ss a");
        $("#currentDay").text(time);
        }, 1000)

}


//WHEN I click the save button for that timeblock it will save to the page
$(".saveBtn").on("click", function(){

   var scheduleTime = $(this).siblings(".description").val();
    var scheduleInfo = $(this).parent().attr("id");
    localStorage.setItem(scheduleInfo, scheduleTime);
   
});



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
//rechecks the coloring for the schedule every ten seconds to auto generate new colors
timeTrackerWithColor();
var interval = setInterval(timeTrackerWithColor, 10000)
    
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

//clear button to clear out the schedule when neeeded at the bottom
$("#clear").on("click", function() {
 
    $("#hour-9 .description").val(localStorage.clear("hour-9"));
    $("#hour-10 .description").val(localStorage.clear("hour-10"));
    $("#hour-11 .description").val(localStorage.clear("hour-11"));
    $("#hour-12 .description").val(localStorage.clear("hour-12"));
    $("#hour-13 .description").val(localStorage.clear("hour-13"));
    $("#hour-14 .description").val(localStorage.clear("hour-14"));
    $("#hour-15 .description").val(localStorage.clear("hour-15"));
    $("#hour-16 .description").val(localStorage.clear("hour-16"));
    $("#hour-17 .description").val(localStorage.clear("hour-17"));

});
    
    

displayTime();