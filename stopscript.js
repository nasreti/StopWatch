const counter = document.getElementById("counter");

const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const hours = document.getElementById("hours");

const start = document.getElementById("start");
const stop = document.getElementById("stop"); 
const clear = document.getElementById("clear");
let count = 0;
let secs = 0;
let mins = 0;
let hs = 0;
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
                    if(secs==60){
                        secs = 0;
                        mins++;
                        minutes.textContent = mins;
                    }
                      if(mins==60){
                             mins = 0;
                             hs++;
                             hours.textContent = hs;
                        }
                        
            }
        }, 1000); 
    };
    
    clear.onclick = function(){
        secs = 0;
        mins = 0;
        hrs = 0;
    
        document.getElementById("seconds").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("hours").textContent = "00";
    }
    
   