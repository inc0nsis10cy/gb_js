'use strict'

//Предположительные классы и методы корзины:

//Задаст содержание корзины
class CartContent {
    construct(order) {
        this.order = [];
    }
}

//Сформирует представление выбранного товара в корзине
class OrderedItem {
    constructor(title, price, quantity) {

    }
}

//Методы:
//заполнит массив заказа выбранными пользователем товарами
renderOrder() {

}

renderPage(){

}

//Сделает расчет общей стоимости выбранных товаров с учетом их количества
calcTotalPrice() {

}

//Посчитает общее количество единиц товаров в корзине
calcTotalQty() {
    let totalQty = 0
    for (let i = 0; i < products.length; i++) {
        totalQty += this.products[i].quantity;
    }
    totalQty = +(totalQty);
    return totalQty;
}