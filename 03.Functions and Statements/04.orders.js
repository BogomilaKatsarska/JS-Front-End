function getOrderPrice(order, quantity){
    const drinkPrices = {
        coffee: 1.5,
        water: 1,
        coke: 1.40,
        snacks: 2,
    };

    const price = drinkPrices[order];
    totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
}