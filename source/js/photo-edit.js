const cropBtn = document.querySelector('.photo-edit__filter-button:first-child');
const fillBtn = document.querySelector('.photo-edit__filter-button:nth-child(2)');
const contrastBtn = document.querySelector('.photo-edit__filter-button:nth-child(3)');

const cropItem = document.querySelector('.photo-edit__item:first-child');
const fillItem = document.querySelector('.photo-edit__item:nth-child(2)');
const contrastItem = document.querySelector('.photo-edit__item:nth-child(3)');


cropBtn.addEventListener('click', function () {
  cropBtn.classList.add('photo-edit__filter-button--active')
  fillBtn.classList.remove('photo-edit__filter-button--active')
  contrastBtn.classList.remove('photo-edit__filter-button--active')
  cropItem.classList.add('photo-edit__item--current')
  fillItem.classList.remove('photo-edit__item--current')
  contrastItem.classList.remove('photo-edit__item--current')
})

fillBtn.addEventListener('click', function () {
  cropBtn.classList.remove('photo-edit__filter-button--active')
  fillBtn.classList.add('photo-edit__filter-button--active')
  contrastBtn.classList.remove('photo-edit__filter-button--active')
  cropItem.classList.remove('photo-edit__item--current')
  fillItem.classList.add('photo-edit__item--current')
  contrastItem.classList.remove('photo-edit__item--current')
})

contrastBtn.addEventListener('click', function () {
  cropBtn.classList.remove('photo-edit__filter-button--active')
  fillBtn.classList.remove('photo-edit__filter-button--active')
  contrastBtn.classList.add('photo-edit__filter-button--active')
  cropItem.classList.remove('photo-edit__item--current')
  fillItem.classList.remove('photo-edit__item--current')
  contrastItem.classList.add('photo-edit__item--current')
})
