//collecting all required DOM elements
let m_timer = document.getElementById("m-time");
let s_timer = document.getElementById("s-time");
let resetButton = document.getElementById("btn-reset");
let stopButton = document.getElementById("btn-stop");
let startButton = document.getElementById("btn-start");
let display = document.getElementById("d-container");


// declaring required variables and initializing them.
let min = 0, sec = 0;
let current_min = 0, current_sec = 0;
let intervalID;

// Main counter function 
function counter() {

    // minute increment logic
    if (sec >= 60) {
        sec = 0;
        min += 1;
    }

    //logging and displaying time
    //console.log((min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec);  // log for debug
    current_min = (min < 10 ? "0" : "") + min;      // 0 -> 00:00 for minutes
    current_sec = (sec < 10 ? "0" : "") + sec;      // 0 -> 00:00 for seconds

    m_timer.innerText = current_min;
    s_timer.innerText = current_sec;

    sec++;
}

counter();  // running counter function for first initialisation to set time as 00:00


//Reset function
function reset() {

    sec = 0;
    min = 0;

}


//Start function
function start() {

    clearInterval(intervalID);     // to clear the previous time interval 
    m_timer.innerText = current_min;
    s_timer.innerHTML = current_sec;
    intervalID = setInterval(counter, 1000);

}


//Stop function
function stop() {

    clearInterval(intervalID);

}


//EvenetListeners...
resetButton.addEventListener("click", reset);   //reset button click event listener
startButton.addEventListener("click", start);   //start button click event listener
stopButton.addEventListener("click", stop);     //stop button click event listener



