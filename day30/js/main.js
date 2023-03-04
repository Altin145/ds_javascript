var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime (){
    var clock = document.getElementById('clock');
    var currentTime = new Date(); //Date() kthen kohen dhe daten e tashme

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian = "PM";
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    changeImage();
};

showCurrentTime();

var oneSecond = 1000;

setInterval(showCurrentTime, oneSecond);


function changeImage (){
    var time = new Date().getHours();
    console.log(time);

    var image = "img/ds_clock.png";
    var imageHTML = document.getElementById("timeImage");

    if(time == wakeuptime){
        image= "img/morning.gif";
        console.log("morning");
    }
    else if(time == dstime){
        image = "img/class.gif";
    }

    else if(time == sleeptime){
        image = "img/night.gif";
    }

    imageHTML.src = image;
}

function updateClock(){
    var wakeUPTimeSelector = document.getElementById('wakeUpTimeSelector');
    wakeuptime = wakeUPTimeSelector.value;
    var dsTimeSelector = document.getElementById('dsTimeSelector');
    dstime = dsTimeSelector.value;
    var sleepTimeSelector = document.getElementById('sleepTimeSelector');
    sleeptime = sleepTimeSelector.value;

    varSaveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", updateClock);
}