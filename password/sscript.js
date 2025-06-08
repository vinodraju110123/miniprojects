let pass = document.getElementById('password');

 
let indicator = {
    lc : document.getElementById('lc'),
    uc : document.getElementById('uc'),
    num : document.getElementById('num'),
    sym : document.getElementById('sym')
}

pass.addEventListener('input', function(){
    let password = pass.value;
    console.log(password);
  let hlc = /[a-z]/.test(password);

  indicator.lc.classList.add('active', hlc);

  let length = document.getElementById('length');
  length.innerText = password.length;

  var score = [hlc].filter(Boolean).length*2;
  console.log(score);

  let progress = document.getElementById('progress');
  progress.style.width = `${score*10}%`
  console.log(progress);
  if(score>1){
    
    let strong = document.getElementById('strong');
    strong.innerText = "strong";
  }
})