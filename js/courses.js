'use strict';
const swiperContainer = document.querySelector('.swiperContainer');
const swiperSlide = document.querySelectorAll('.swiperSlide');

//git the buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;//start on the first image
const size = swiperSlide[0].clientWidth;//give me the original width for the specific image.


swiperContainer.style.transform = 'translateX(' + ( - size * counter ) + 'px)';//transform one image to the left.


//for the NEXT button
nextBtn.addEventListener( 'click' , function(){
  if (counter>=swiperSlide.length-4) {
    return;
  }
  swiperContainer.style.transition = 'transform 0.4s ease-in-out';//Specifies the speed curve of the transition with a slow end
  counter++;
  console.log(counter);
  swiperContainer.style.transform = 'translateX(' + ( - size * counter ) + 'px)';//transform one image to the left.
});

//when the CSS transition has completed.
swiperContainer.addEventListener( 'transitionend' , function() {//when the transition end

  //if the slid id is = to the final slide id
  // if(swiperSlide[counter].id === 'finalClone'){
  //   swiperContainer.style.transition = 'none';//do not make any transition
  //   counter = swiperSlide.length -1;//update the counter by the slide length -2 because we deplecat the slides twice
  //   swiperContainer.style.transform ='translateX('+(-size*counter)+'px)';//transform one image to the left.
  // }

  //if the slid id is = to the final slide id
  if(swiperSlide[counter].id === 'firstClone'){//if the slid id is =to the final slide id
    swiperContainer.style.transition = 'none';//do not make any transition
    counter = swiperSlide.length - counter;//update the counter by the slide length -2 because we deplecat the slides twice
    swiperContainer.style.transform = 'translateX(' + ( - size * counter ) + 'px)';//transform one image to the left.
  }
});



//for the PREVIOUS button
prevBtn.addEventListener( 'click' , function(){
  if (counter<=0) {
    return;
  }
  swiperContainer.style.transition = 'transform 0.4s ease-in-out';//Specifies a transition effect with a slow end
  counter--;
  console.log(counter);
  swiperContainer.style.transform = 'translateX(' + ( - size * counter) + 'px)';//transform one image to the left.
});



