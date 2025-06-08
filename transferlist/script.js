function moveAll(direction){
let fromList = direction === 'right' ? document.getElementById('leftList') : document.getElementById('rightList');
let toList = direction === 'right' ? document.getElementById('rightList') : document.getElementById('leftList');

const checkbox = fromList.querySelectorAll('input[type = "checkbox"]');

checkbox.forEach((checkbox)=>{
 checkbox.checked = false;
  toList.appendChild(checkbox.parentElement);
});
}

function moveSelected(direction){
  let fromList = direction === 'right' ? document.getElementById('leftList') : document.getElementById('rightList');
let toList = direction === 'right' ? document.getElementById('rightList') : document.getElementById('leftList');

const checkbox = fromList.querySelectorAll('input[type = "checkbox"]:checked');
console.log(checkbox);
checkbox.forEach((checkbox)=>{
 checkbox.checked = false;
  toList.appendChild(checkbox.parentElement);
});
}