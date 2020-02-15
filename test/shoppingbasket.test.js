import { ShoppingBasket } from "../src/shoppingbasket";
import { Item } from "../src/item";

describe("Shopping Basket Tests", () => {

    const chai = require('chai');
    const expect = chai.expect;
    const assert = chai.assert;

    const itemNames = {
        SAUSAGE: 'Sausage',
        PIE: 'Pie'
    };

    const items = Object.freeze({
        [itemNames.SAUSAGE]: 1.5,
        [itemNames.PIE]: 3.5

    });

    let basket;

    before(() => {
        basket = new ShoppingBasket();
    });

    it("should create an instance of a shopping basket", () => {
        assert.exists(basket);
    });

    it("should return true if basket is empty", () => {
        assert.isTrue(basket.isEmpty());
    });

    it("should return 0 as there are initially no items in the basket", () => {
        assert.equal(basket.getItemsCount(), 0);
    });

    it("should have 1 item in the basket after it is added", () => {
        let item = new Item(itemNames.SAUSAGE, items[itemNames.SAUSAGE]);

        basket.addItem(item);

        assert.equal(basket.getItemsCount(), 1);
    });

    it("should empty the basket if clear is called", () => {

        let item = new Item(itemNames.SAUSAGE, items[itemNames.SAUSAGE]);
        basket.addItem(item);
        
        let initialEmptyState = basket.isEmpty(); 
        basket.clear();
        let stateAfterClear = basket.isEmpty();

        assert.isFalse(initialEmptyState);
        assert.isTrue(stateAfterClear);
    });

    it("should give us the total sum of the basket", () => {
        let pie = new Item(itemNames.PIE, items[itemNames.PIE]);
        let sausage = new Item(itemNames.SAUSAGE, items[itemNames.SAUSAGE]);

        basket.addItem(pie);
        basket.addItem(sausage);

        let total = basket.getTotal();

        assert.equal(total, 5.0);
    });
});