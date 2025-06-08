let vertical = document.getElementById('vertical');
let horizantal = document.getElementById('horizantal');
let textMessage = document.getElementById('toastMessage');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    let toast = document.querySelector(`.toast[data-pos = ${vertical.value}-${horizantal.value}]`);
    if(!toast){
        toast = document.createElement('div');
        toast.classList.add('toast');
        toast.dataset.pos = `${vertical.value}-${horizantal.value}`;
        toast.style.top = vertical.value === 'top' ? '10px' : 'unset';
        toast.style.bottom = vertical.value === 'bottom' ? '10px' : 'unset';
        toast.style.left = horizantal.value === 'left' ? '10px' : 'unset';
        toast.style.right = horizantal.value === 'right' ? '10px' : 'unset';
        document.body.appendChild(toast);
    }

    let eachNot = document.createElement('div');
    eachNot.classList.add('eachNot');
    eachNot.innerHTML = `<p>${textMessage.value}<\p>`
    toast.appendChild(eachNot);

    


    setTimeout(()=>{

        toast.removeChild(eachNot);
    }, 3000)

});