// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    var currentDate = dayjs();
    $('#currentDay').text(currentDate);
    var hour9 = $("#hour-9 .description").val;
    var hour10 = $("#hour-10 .description").val;
    var hour11 = $("#hour-11 .description").val;
    var hour12 = $("#hour-12 .description").val;
    var hour13 = $("#hour-13 .description").val;
    var hour14 = $("#hour-14 .description").val;
    var hour15 = $("#hour-15 .description").val;
    var hour16 = $("#hour-16 .description").val;
    var hour17 = $("#hour-17 .description").val;
    
    var saveButton = $('.saveBtn');
    var time = $(this).parent().attr('div');
    console.log(time);
    var timeBlock = $(".time-block");

    // TODO: Add a listener for click events on the save button. This code should
    saveButton.on('click', function(event) {
        event.preventDefault();
        var time = $(this).parent().attr('id');
        var textEntry = $(this).siblings('.description').val();
        localStorage.setItem(time,textEntry);

    })
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    function timeOfDay() {
        var currentHour = dayjs().hour();
        console.log(currentHour);
        timeBlock.each(function () {
            var blockTime = -(parseInt($(this).attr("id").split("hour")[1]));
            console.log(blockTime);
            if (blockTime < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }else if (blockTime > currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            else if (blockTime === currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            
        })
    }

    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set

    function localS () {
        localStorage.getItem("hour9");
        localStorage.getItem("hour10");
        localStorage.getItem("hour11");
        localStorage.getItem("hour12");
        localStorage.getItem("hour13");
        localStorage.getItem("hour14");
        localStorage.getItem("hour15");
        localStorage.getItem("hour16");
        localStorage.getItem("hour17");

    }
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    localS();
    timeOfDay();
  });
  