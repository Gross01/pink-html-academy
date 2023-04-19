const table = document.querySelector('.price-rates__table');

const firstTableToggle = document.querySelector('.slider__toggle--table:nth-child(1)');
const secondTableToggle = document.querySelector('.slider__toggle--table:nth-child(2)');
const thirdTableToggle = document.querySelector('.slider__toggle--table:nth-child(3)');

const firstToggle = document.querySelector('.slider__toggle:nth-child(1)');
const secondToggle = document.querySelector('.slider__toggle:nth-child(2)');
const thirdToggle = document.querySelector('.slider__toggle:nth-child(3)');

firstTableToggle.addEventListener('click', function () {
  table.style.left = '280px';
  firstTableToggle.classList.add('slider__toggle--current')
  secondTableToggle.classList.remove('slider__toggle--current')
  thirdTableToggle.classList.remove('slider__toggle--current')
})

secondTableToggle.addEventListener('click', function () {
  table.style.left = '0';
  firstTableToggle.classList.remove('slider__toggle--current')
  secondTableToggle.classList.add('slider__toggle--current')
  thirdTableToggle.classList.remove('slider__toggle--current')
})

thirdTableToggle.addEventListener('click', function () {
  table.style.left = '-280px';
  firstTableToggle.classList.remove('slider__toggle--current')
  secondTableToggle.classList.remove('slider__toggle--current')
  thirdTableToggle.classList.add('slider__toggle--current')
})


firstToggle.addEventListener('click', function () {
  firstToggle.classList.add('slider__toggle--current')
  secondToggle.classList.remove('slider__toggle--current')
  thirdToggle.classList.remove('slider__toggle--current')
})

secondToggle.addEventListener('click', function () {
  firstToggle.classList.remove('slider__toggle--current')
  secondToggle.classList.add('slider__toggle--current')
  thirdToggle.classList.remove('slider__toggle--current')
})

thirdToggle.addEventListener('click', function () {
  firstToggle.classList.remove('slider__toggle--current')
  secondToggle.classList.remove('slider__toggle--current')
  thirdToggle.classList.add('slider__toggle--current')
})
