const photo = document.querySelectorAll('.gallery__item');
const popup = document.querySelector('.popupSlider-wrap');
const popupCross = document.querySelector('.popupSlider-wrap__cross');

for(let i = 0; i <= photo.length; i ++){
  photo[i]?.addEventListener('click', () => {
    popup.classList.remove('popupSlider-wrap_disabled')
   count = photo[i].id.slice(6, 7);
   init();
  }) 
}

popupCross.addEventListener('click', () => {
  popup.classList.add('popupSlider-wrap_disabled');
})

const images = document.querySelectorAll('.popupSlider-wrap .popupSlider .popupSlider__line img');
const sliderLine = document.querySelector('.popupSlider__line');
let count;
let width;

function init(){
  console.log('resize');
  width = document.querySelector('.popupSlider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach((item)=>{
    item.style.width = width + 'px';
    item.style.height = 'auto';
  })

  rollSlider();
}

window.addEventListener('resize', init);
document.querySelector('.popupSlider__button-right').addEventListener('click', function(){
  count++;
  if(count >= images.length) {
    count =0;
  }
  rollSlider()
})

document.querySelector('.popupSlider__button-left').addEventListener('click', function(){
  count--;
  if(count < 0) {
    count = images.length - 1;
  }
  rollSlider()
})

function rollSlider(a){
  sliderLine.style.transform = 'translate(-' + count * width + 'px';
 
}


//console.log(numIdPhoto)
function resizeGallery (numIdPhoto){}



