export class ShoppingBasket {

    constructor() {
        this.items = [];
    }

    isEmpty = () => this.items.length === 0;

    getItemsCount = () => this.items.length;

    addItem = item => this.items.push(item);

    clear = () => this.items = [];

    getTotal = () => this.items.reduce(function (prev, current) {
        return prev.price += current.price;
    });
}