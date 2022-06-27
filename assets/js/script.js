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

function setDynamicClassHour() {
    var pastHours = [];
    var futureHours = [];

    // create for loop to check for current time, separates the past and future hours with splice //
    for(var i=0;i<workHours.length;i++){
        if(workHours[i] == currentTime){
            pastHours = workHours.splice(0,i)
            futureHours = workHours.splice(1,workHours.length-1)
            $("#"+currentTime).addClass("present")
            }
        }

    //  Creates a class for past hours //
    for(var i = 0; i < pastHours.length; i++){
        $("#"+pastHours[i]).addClass("past")
    }
    // Creates a class for future hours //

    for(var i = 0; i < futureHours.length; i++){
        $("#"+futureHours[i]).addClass("future")
    }

};


// functions for local storage //

function getLocalStorage(){
    return JSON.parse(localStorage.getItem("workDayScheduler"))
}

function clearLocalStorage(){
    localStorage.removeItem("workDayScheduler")
}

function clearLocalStorageNewDay(){
    var workDayScheduler = getLocalStorage();
    if(workDayScheduler){
        if(workDayScheduler[0].date == yesterdayShort){
            clearLocalStorage();
        }
    }
};

// call functions for to start page //

// creates blocks //
createTimeBlocks();
// clears storage at start of new day //
clearLocalStorageNewDay();
// saves tasks to storage //

retrieveSavedHourlyTask();

// function that updates hour to current hour //
setDynamicClassHour();