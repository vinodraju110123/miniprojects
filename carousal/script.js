const images = [
   "../assets/1-6Q-Ljgvj.jpg", "../assets/2-ts1ERVp4.jpg",
   "../assets/3-BKsjAI35.jpg", "../assets/4-jBKFNbbR.jpg"
];

let leftArr = document.getElementById('leftArr');
let rightArr = document.getElementById('rightArr');
let image = document.getElementById('image');

let idx = 0;


function update(){
 image.src = images[idx];

}

rightArr.addEventListener('click', function(){

    idx = (idx+1)%images.length;
console.log(idx);
update();
});