const counter = document.getElementById("counter");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const hours = document.getElementById("hours");

const start = document.getElementById("start");
const stop = document.getElementById("stop"); 
const clear = document.getElementById("clear");
let count = 0;
let secs = 0;
let i = 0;
let interval;

    stop.onclick = function () {
       i = 1; 
       clearInterval(interval);
    };

    start.onclick = function(){
        i = 0;
        interval = setInterval(function () {
            if (i == 0) {
                secs++;
                seconds.textContent = secs;
            }
        }, 1000); 
    };

    clear.onclick = function(){
        i = 1;
        secs = 0;
    }