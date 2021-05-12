'use strict'

class Product {
    constructor(id, photo, title, description, price, quantity) {
        this.id = id,
            this.photo = photo,
            this.title = title || 'Some product', //так же значение по умолчанию можно указать в аргументах
            this.description = description || 'description unavailable',
            this.price = price || '0.0',
            this.quantity = quantity
        // Можно ли так получить введенное пользователем в input количество:
        // this.quantity = function() { 
        //     let input = document.querySelector('input');
        //     return ParseInt(input.value);
        // }
        // ??????????
    }

    renderProduct() {
        return `<div class="product-item">
        <img class ="itemImg" src="img/${this.photo}" onerror = "this.onerror = null; this.src = 'img/img_unavailable.png'"> 
        <h3>${this.title}</h3>
        <div> ${this.description}</div>
        <div> Price: <span> $${this.price}</span> </div>
        <div> Quantity <input class = "inputQty" type="text" placeholder = "1"></div>
        <div class="itemDetails">
        <a href="#"> More info >> </a>
        <button class="buy-btn">Купить</button>
        </div>
    </div>`
    };
}
class GoodsList {
    constructor() {
        this.products = [];
    }

    fetchGoods() {
        this.products = [
            {
                id: 1,
                photo: "laptop2.jpeg",
                title: 'Notebook',
                description: 'НОУТБУК HP LAPTOP 15S-FQ2041UR  (33X76EA)',
                price: 2000,
                quantity: 1//что туть должно указываться, если кол-во передает пользователь в input? Ноль?
            },
            {
                id: 2,
                photo: "mouse.jpeg",
                title: 'Mouse',
                description: 'blablabla',
                price: 20,
                quantity: 3

            },
            {
                id: 3,
                photo: "keyboard.jpeg",
                title: 'Keyboard',
                description: 'blablabla',
                price: 200,
                quantity: 2
            },
            {
                id: 4,
                photo: "gamepad.jpeg",
                title: 'Gamepad',
                description: 'blablabla',
                price: 50,
                quantity: 1
            },
        ];
    }
    //Method to sum up all prices of items in products array
    calcTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.products.length; i++) {
            totalPrice += this.products[i].price * this.products[i].quantity;
        }
        totalPrice = totalPrice.toFixed(2);
        return totalPrice;
    }


    render() {
        let listHtml = '';
        this.products.map(item => {
            const productsList = new Product(item.id, item.photo, item.title, item.description, item.price, item.quantity);
            listHtml += productsList.renderProduct();
        });
        document.querySelector('.products').innerHTML = listHtml;
        ;
    };
}
const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.calcTotalPrice());




//Функция для формирования верстки каждого товара (Изначальный вариант со значениям по умолчанию)
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
