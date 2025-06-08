let passwordInput = document.getElementById('password');

const indicators = {
    lc : document.getElementById('lc'),
    uc : document.getElementById('uc'),
    num : document.getElementById('num'),
    sym : document.getElementById('sym'),

};

password.addEventListener('input', (e)=>{
console.log(e.target.value);
   const password = e.target.value;
   const hasLc = /[a-z]/.test(password);
   const hasUc = /[A-Z]/.test(password);
   const hasNum = /[0-9]/.test(password);
   const hasSym = /[^a-zA-Z0-9]/.test(password);


   indicators.lc.classList.toggle('active', hasLc);
   indicators.uc.classList.toggle('active', hasUc);
   indicators.num.classList.toggle('active', hasNum);
   indicators.sym.classList.toggle('active', hasSym);


   charCount.innerText = password.length;

   var Score = [hasLc,hasNum,hasUc,hasSym].filter(Boolean).length*2 + 
   (hasLc && hasNum && hasUc && hasSym ? 2 : 0);

   console.log(Score);

   if(Score > 8){
    let strength = document.getElementById('strength');
      strength.innerText = 'Strong';
      strength.style.backgroundColor = 'red';
   }


});