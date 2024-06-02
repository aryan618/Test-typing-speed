const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
let timer=[0,0,0,0];
let timerRunning = false;
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer(){
    if(timer[0]<10){
        timer[0]="0"+timer[0];
    }
    if(timer[1]<10){
        timer[1]="0"+timer[1];
    }
    if(timer[2]<10){
        timer[2]="0"+timer[2];
    }
    theTimer.innerHTML=timer[0]+":"+timer[1]+":"+timer[2];
    timer[3]++;
    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

// Match the text entered with the provided text on the page:


// Start the timer:
let myInterval;
function startTimer (){
    console.log(testArea.value.length);
    console.log("Starting timer");
    if(testArea.value.length===0 && !timerRunning){
        timerRunning=true;
         myInterval=setInterval(runTimer,10);
    }
    // else if(testArea.value==originText){
    //     clearInterval(myInterval);
    // }
}

function Value() {
    console.log(testArea.value);
    let Text=originText.substring(0,testArea.value.length);
    if(testArea.value==originText){
        testWrapper.style.borderColor="green";
        clearInterval(myInterval);
    }
    else {
        if(testArea.value==Text){
            testWrapper.style.borderColor="blue";
        }
        else{
            testWrapper.style.borderColor="red";
        }
    }
}

// Reset everything:
function Reset() {
    console.log("timer reset");
    clearInterval(myInterval);
    myInterval=null;
    testArea.value="";
    theTimer.innerHTML="00:00:00";
    timerRunning=false;
    timer=[0,0,0,0];
    testWrapper.style.borderColor="grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",startTimer,false);

testArea.addEventListener("keyup",Value,false);

resetButton.addEventListener("click",Reset,false);