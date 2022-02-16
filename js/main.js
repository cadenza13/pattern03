'use strict';

{
  const logo = document.querySelector('.logo');
  const newBody = document.querySelector('.new-body');
  const mask = document.querySelector('.mask');
  let observeStart = false;

  function opacity(){
    logo.classList.remove('opa');
  }

  function outFlame(){
    logo.classList.remove('center');
  }

  function showTime(){
    newBody.classList.remove('hidden');
    mask.classList.add('opa');
    logo.classList.add('border');
    observeStart = true;
  }

  setTimeout(opacity, 100);
  setTimeout(outFlame, 2000);
  setTimeout(showTime, 3000);

  const span = document.querySelector('span');
  const spider = document.getElementById('spider');
  const target = document.querySelector('header');
  let encounter = false;

  function callback(entries){
    if(observeStart === false){
      return;
    }
    if(!entries[0].isIntersecting){
      if(encounter === true){
        return;
      }
      encounter = true;
      span.classList.add('down');
    }
  }

  function spiderUppear(){
    span.classList.remove('down');
  }

  span.addEventListener('click', () =>{
    spider.src = 'img/spider2.PNG';
    setTimeout(spiderUppear, 1000);
  });

  const observer = new IntersectionObserver(callback);
  observer.observe(target);
}

{
  const box = document.querySelector('ul');
  let slideIndex = 0;
  
  const buttons = document.querySelectorAll('button');
  const topic = document.querySelectorAll('.list-b');

  function scroll(){
    box.style.transform = `translateX(${-100 * slideIndex}%)`;
    setTimeout(scroll, 3000);
    slideIndex++;

    if(slideIndex > 3){
      slideIndex = 0;
    }
  }

  scroll();

  buttons.forEach((button, index) =>{
    button.addEventListener('click', ()=>{
      buttons[index].classList.toggle('under');
      topic[index].classList.toggle('hidden');
    });
  });
}