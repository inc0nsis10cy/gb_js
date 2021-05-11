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
// Изначальный вариант
// const renderProduct = (photo, title = 'Some item', description = 'check', price = '0.0') => {
//     return `<div class="product-item">
//     <img class ="itemImg" src="img/${photo}" onerror = "this.onerror = null; this.src = 'img/img_unavailable.png'"> 
//     <h3>${title}</h3>
//     <div> ${description}</div>
//     <div> Price: <span> $${price}</span> </div>
//     <div> Quantity <input class = "inputQty" type="text" placeholder = "1"></div>
//     <div class="itemDetails">
//     <a href="#"> More info >> </a>
//     <button class="buy-btn">Купить</button>
//     </div>
// </div>`
// };

// const renderPage = list => {
//     const productsList = list.map(item => renderProduct(item.photo, item.title, item.description, item.price)).join('');
//     document.querySelector('.products').innerHTML = productsList;
// };

//Функция для формирования верстки каждого товара (упрощенный)
const renderProduct = (product) => {
    return `<div class="product-item">
    <img class ="itemImg" src="img/${product.photo}" onerror = "this.onerror = null; this.src = 'img/img_unavailable.png'"> 
    <h3>${product.title}</h3>
    <div> ${product.description}</div>
    <div> Price: <span> $${product.price}</span> </div>
    <div> Quantity <input class = "inputQty" type="text" placeholder = "1"></div>
    <div class="itemDetails">
    <a href="#"> More info >> </a>
    <button class="buy-btn">Купить</button>
    </div>
</div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};
renderPage(products);

//Function to sum up all prices of items in products array
function calcTotalPrice() {
    let totalPrice = 0
    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
    }
    totalPrice = totalPrice.toFixed(2);
    return totalPrice;
}
console.log(calcTotalPrice());

