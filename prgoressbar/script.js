let progress = document.getElementById('progress');
let button = document.getElementById('btn');

let width = 0;

button.addEventListener('click', function(){
  let interval = setInterval(() => {
       
        if(width >= 100){
            clearInterval(interval);
            return;
        }

         width +=10;
        progress.style.width = `${width}`+"%";
        console.log(progress.style.width);
    }, 1000);
})

