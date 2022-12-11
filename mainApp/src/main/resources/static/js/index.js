console.log("hi")

let offset=0;
const sliderLine =document.querySelector('.slider-line');

document.querySelector('.slider_btn_right').addEventListener('click', function (){
    offset=offset+300;
    if(offset>1200){
        offset=0;
    }
    sliderLine.style.left=-offset+'px';
})

document.querySelector('.slider_btn_left').addEventListener('click', function (){
    offset=offset-300;
    if(offset<0){
        offset=1200;
    }
    sliderLine.style.left=-offset+'px';
})