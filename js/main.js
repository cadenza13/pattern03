'use strict';

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

{
  const span = document.querySelector('span');
  const spider = document.getElementById('spider');
  const target = document.querySelector('header');
  let encounter = false;

  function callback(entries){
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
    spider.src = 'img/spider2.png';
    setTimeout(spiderUppear, 1000);
  });

  const observer = new IntersectionObserver(callback);
  observer.observe(target);
}