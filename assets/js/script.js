// declare date variables for moment //

var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var currentDay = moment().format("dddd, MMMM Do YYYY");
var currentDayShort = moment().format("L");
var yesterdayShort = moment().subtract(1, 'days').format("L");
var currentTime = moment().format("hA");


$("#currentDay").text(currentDay);

// create time blocks and connect to DOM //

function createTimeBlocks(){
    for(var i=0;i<workHours.length;i++){
        var timeBlock = workHours[i]
        $("#timeBlocks").append(`<div class="row d-flex justify-content-center" >
                                        <div class="col-2 p-0">
                                                <p class="hour p1-1 m-0">${timeBlock}</p>
                                        </div>
                                        <div class="col-4 p-0">
                                            <p class="description p-1 m-0" id=${workHours[i]}></p>
                                        </div>
                                        <div class="col-2 p-0">
                                            <button class="saveBtn" id=${"btn-"+workHours[i]}><i class="fas fa-calendar-day"></i></button>
                                        </div>
                                  </div>`)
    }
};
