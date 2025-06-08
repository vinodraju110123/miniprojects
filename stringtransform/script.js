const textInput = document.getElementById('text');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const camelcase = document.getElementById('camelcase');
const pascalcase = document.getElementById('pascalcase');
const snakecase = document.getElementById('snakecase');
const kebabcase = document.getElementById('kebabcase');
const trim = document.getElementById('trim');

function updateCases(){
    let value = textInput.value.trim();
    let words = value.toLowerCase().split(' ');
    console.log(words);
    lowercase.innerText = value.toLowerCase();
    uppercase.innerText = value.toUpperCase();
    const camel = words.map((word,index)=>{
        if(index === 0) return word;
          return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
    camelcase.innerText = camel;
    const pascal = words.map((word,index)=>{
       
          return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
    pascalcase.innerText = pascal;
    snakecase.innerText = words.join('_');
    kebabcase.innerText = words.join('-');
    trim.innerText = words.join('');
}

updateCases();

textInput.addEventListener('input', updateCases);
