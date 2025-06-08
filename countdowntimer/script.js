let text = document.getElementById('timeInput');
let display = document.getElementById('display');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let interval;
let totalseconds = 0;

function formatTime(sec){
    const m = String(Math.floor(sec/60)).padStart(2,'0');
    const s = String(sec%60).padStart(2,'0');
    return `${m}:${s}`;
}

function updateDisplay(){
    display.innerText = formatTime(totalseconds);
}

startBtn.addEventListener('click',()=>{
    const [min, sec] = text.value.split(':').map(Number);
    console.log(min,sec);
     totalseconds = min*60+sec;
     console.log(totalseconds);
     updateDisplay();
     startBtn.disabled = true;
     stopBtn.disabled = false;
     interval = setInterval(()=>{
        totalseconds--;
        
        updateDisplay();

         if (totalseconds <= 0) {
      clearInterval(interval);
      alert('Time is up!');
      startBtn.disabled = false;
      stopBtn.disabled = true;
    }
     },1000);

     console.log(totalseconds);

    
})

stopBtn.addEventListener('click',()=>{
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(interval);
})

resetBtn.addEventListener('click',()=>{
    // Reloads the current page
window.location.reload();

})