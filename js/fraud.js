'use strict';

{
  const h1 = document.querySelector('h1');
  const a = document.querySelector('a'); 

  function flash(){
    h1.classList.toggle('flash');
    setTimeout(flash, 100);
  }

  flash();

  function scale(){
    a.classList.toggle('scale');
    setTimeout(scale, 1000);
  }

  scale();
}