var current = document.querySelector('#currentDay')
var tasks = {};
var saveBtn = document.querySelector('#saveBtn');
var textAreas = $('.time-block');
var currentHour = moment().hour();
console.log(currentHour);

// adding current day to calendar
var currentDay = (moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(currentDay);
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = currentDay

for (let i = 0; i < textAreas.length; i++) {
    var element = textAreas[i];
    //color'red'
    var rowSlotTime = $(element).siblings().attr('id');
    if (condition){

    }
    
};

//savebtn

//delete task



//btn save input
$(".saveBtn").on("click", function(){
var hourEl = $(this).siblings("textarea").attr("id");
//retrieve current input
var textEl = $(this).siblings("textarea")
.text()
.trim();
});
console.log(hourEl,textEl);

var timeblockTasks = function(){
    task =JSO.parse(localStorage.getItem("tasks"));

}

currentDay()