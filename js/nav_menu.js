'use strict'
//простой query selector тут вызывает выпадающее меню только у первого элемента. Пришлось воспользоваться querySelectorAll, но тогда ClassList в функции не срабатывает, пришлось пробовать forEach, но не получиолось. Как можно сделать через forEach?


let navCategory = document.querySelectorAll('.navMenuCategory');


for (let category of navCategory) {
    category.addEventListener('click', navClick, false);
}

function navClick() {
    let dropDownItems = this.querySelector('.navMenuCategory__items');
    dropDownItems.classList.toggle("hidden");
};


// for (let i = 0; i < category.length; i++) {
//     category[i].addEventListener('click', navClick, false);
// }

// function navClick() {
//     let menu = this.querySelector('.navMenuCategory__items');
//     menu.classList.toggle("hidden");
// };



// function navClick() {
//     itemsList.forEach(item =>
//         item.classList.toggle('hidden'));
// };


// category.forEach.call(function (item) {
//     item.addEventListener('click', navClick);
// })


let navItems = document.querySelector('.navMenuCategory__items');

navItems.addEventListener('click', function (event) {
    event.stopPropagation();
})