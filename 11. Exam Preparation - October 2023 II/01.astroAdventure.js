function solve(input) {
  const austronautsCount = Number(input.shift());
  const astronauts = {};

  for (let index = 0; index < austronautsCount; index++) {
    const astroLine = input.shift();
    const [name, oxygen, fuel] = astroLine.split(" ");

    astronauts[name] = {
      oxygen: Number(oxygen),
      fuel: Number(fuel),
    };
  }

  let commandLine = input.shift();

  while (commandLine !== "End") {
    commandLine = commandLine.split(" - ");
    const command = commandLine.shift();

    switch (command) {
      case 'Explore': 
        const astroName = commandLine.shift();
        const minimumEnergy = Number(commandLine.shift());

        if (astronauts[astroName].fuel < minimumEnergy){
            console.log(`${astroName} does not have enough energy to explore!`)
        } else {
            astronauts[astroName].fuel -= minimumEnergy;
            console.log(`${astroName} has successfully explored a new area and now has ${astronauts[astroName].fuel} energy!`)
        }
        break;
      case 'Refuel':{
        const astroName = commandLine.shift();
        const amountRefueled = Number(commandLine.shift());
        let amountRecovered = Number;

        if (astronauts[astroName].fuel + amountRefueled <= 200) {
          amountRecovered = amountRefueled
          astronauts[astroName].fuel += amountRefueled;
        } else {
          amountRecovered = 200 - astronauts[astroName].fuel;
          astronauts[astroName].fuel = 200;
        }

        console.log(`${astroName} refueled their energy by ${amountRecovered}!`);
      }
        break;
      case 'Breathe':{
        const astroName = commandLine.shift();
        const breathReplenished = Number(commandLine.shift());
        let amountRecovered = Number;

        if (astronauts[astroName].oxygen + breathReplenished <= 100) {
          amountRecovered = breathReplenished;
          astronauts[astroName].oxygen += breathReplenished;
        } else {
          amountRecovered = 100 - astronauts[astroName].oxygen;
          astronauts[astroName].oxygen = 100;
        }

        console.log(`${astroName} took a breath and recovered ${amountRecovered} oxygen!`)
      }
        break;
    }

    commandLine = input.shift();
  }
  for (const astroName in astronauts) {
    console.log(`Astronaut: ${astroName}, Oxygen: ${astronauts[astroName].oxygen}, Energy: ${astronauts[astroName].fuel}`)
    }
  }


solve([
  "3",
  "John 50 120",
  "Kate 80 180",
  "Rob 70 150",
  "Explore - John - 50",
  "Refuel - Kate - 30",
  "Breathe - Rob - 20",
  "End",
]);

console.log('*'.repeat(20))


solve([ '4', 'Alice 60 100', 'Bob 40 80', 'Charlie 70 150', 'Dave 80 180', 'Explore - Bob - 60', 'Refuel - Alice - 30', 'Breathe - Charlie - 50', 'Refuel - Dave - 40', 'Explore - Bob - 40', 'Breathe - Charlie - 30', 'Explore - Alice - 40', 'End'])