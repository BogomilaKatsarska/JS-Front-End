function solve(input) {
  const baristaCount = Number(input.shift());
  allBarista = {};

  for (let index = 0; index < baristaCount; index++) {
    const baristaLine = input.shift();
    const [name, shift, cTypes] = baristaLine.split(" ");

    let cTypesSplit = cTypes.split(",")

    allBarista[name] = {
      shift: shift,
      coffeeTypes: cTypesSplit,
    };
  }

  let commandLine = input.shift();

  while (commandLine !== "Closed") {
    commandLine = commandLine.split(" / ");
    const command = commandLine.shift();

    switch (command) {
      case "Prepare":
        const baristaName = commandLine.shift();
        const baristaShift = commandLine.shift();
        const baristaCoffeeType = commandLine.shift();

        if (allBarista[baristaName].shift !== baristaShift || !allBarista[baristaName].coffeeTypes.includes(baristaCoffeeType)){
            console.log(`${baristaName} is not available to prepare a ${baristaCoffeeType}.`);
        } else {
            console.log(`${baristaName} has prepared a ${baristaCoffeeType} for you!`)
        }
        break;
      case "Change Shift":{
        const baristaName = commandLine.shift();
        const newShift = commandLine.shift();

        allBarista[baristaName].shift = newShift;

        console.log(`${baristaName} has updated his shift to: ${newShift}`)
      }
  
        break;
      case "Learn":{
        const baristaName = commandLine.shift();
        const newCoffeeType = commandLine.shift();

        if (allBarista[baristaName].coffeeTypes.includes(newCoffeeType)) {
          console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
        } else {
          allBarista[baristaName].coffeeTypes.push(newCoffeeType);
          console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`)
        }
      }

        break;
    }

    commandLine = input.shift();
  }

  for (const baristaName in allBarista) { 
    let bCoffeeTypes = allBarista[baristaName].coffeeTypes.map(i => { return i; }).join(', ');

    console.log(`Barista: ${baristaName}, Shift: ${allBarista[baristaName].shift}, Drinks: ${bCoffeeTypes}`)
  }
}

solve([
  "3",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / night",
  "Learn / Carol / Latte",
  "Learn / Bob / Latte",
  "Prepare / Bob / night / Latte",
  "Closed",
]);
