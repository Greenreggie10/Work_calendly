$(document).ready(function() {

    //var current = document.querySelector('#currentDay')  
    var tasks = {};
//var saveBtn = document.querySelector('.saveBtn');
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
    var rowSlotTime = $(element).attr('id');
    if (rowSlotTime < currentHour){ $(element).addClass('past')
} else if (rowSlotTime == currentHour) {
    $(element).removeClass('past')
    $(element).addClass('present')
} else { 
    $(element).removeClass('past')
    $(element).removeClass('present')
    $(element).addClass('future')
}};

//btn save input
$(".saveBtn").on("click", function(){
    var hourEl = $(this).siblings("textarea").attr("id"); 
    //retrieve current input
    var textEl = $(this).siblings("textarea")
    .val()
    .trim();
    console.log(hourEl,textEl);
    
    //save hourEl textEl localStorage;
    
    localStorage.setItem(hourEl, textEl);  
    saveBtn() 
    function saveBtn () {
        return localStorage.getItem('saveBtn')};
        
        function timeblockTasks() {
            task = JSON.parse(localStorage.getItem("timeblockTasks"));
        }
    })
});