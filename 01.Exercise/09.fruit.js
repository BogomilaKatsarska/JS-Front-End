function moneyNeeded(fruit, grams, ppkg){
    let moneyRequired = (grams/1000) * ppkg;
    console.log(`I need $${moneyRequired.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`)
}

moneyNeeded('orange', 2500, 1.80)