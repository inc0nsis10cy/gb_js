'use strict'

const products = [
    {
        id: 1,
        photo: "laptop2.jpeg",
        title: 'Notebook',
        description: 'НОУТБУК HP LAPTOP 15S-FQ2041UR  (33X76EA)',
        price: 2000
    },
    {
        id: 2,
        photo: "mouse.jpeg",
        title: 'Mouse',
        description: 'blablabla',
        price: 20
    },
    {
        id: 3,
        photo: "keyboard.jpeg",
        title: 'Keyboard',
        description: 'blablabla',
        price: 200
    },
    {
        id: 4,
        photo: "gamepad.jpeg",
        title: 'Gamepad',
        description: 'blablabla',
        price: 50
    },
];

//Функция для формирования верстки каждого товара
const renderProduct = (photo, title = 'Some item', description = 'check', price = '0.0') => {
    return `<div class="product-item">
    <img class ="itemImg" src="img/${photo}" onerror = "this.onerror = null; this.src = 'img/img_unavailable.png'"> 
    <h3>${title}</h3>
    <div> ${description}</div>
    <div> Price: <span> $${price}</span> </div>
    <div> Quantity <input class = "inputQty" type="text" placeholder = "1"></div>
    <div class="itemDetails">
    <a href="#"> More info >> </a>
    <button class="buy-btn">Купить</button>
    </div>
</div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.photo, item.title, item.description, item.price)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};




renderPage(products);
