// #1.
function ages(age) {
  if (age >= 0 && age <= 2) {
    console.log("baby");
  } else if (age >= 3 && age <= 13) {
    console.log("child");
  } else if (age >= 14 && age <= 19) {
    console.log("teenager");
  } else if (age >= 20 && age <= 65) {
    console.log("adult");
  } else if (age >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
}

ages(-1);

// #2.
function vacation(groupOfPeople, type, day) {
  let price = 0;
  if (type === "Students") {
    if (day === "Friday") {
      price = groupOfPeople * 8.45;
    } else if (day === "Saturday") {
      price = groupOfPeople * 9.8;
    } else {
      price = groupOfPeople * 10.46;
    }

    if (groupOfPeople >= 30) {
      price *= 0.85;
    }
  } else if (type === "Business") {
    let priceForOneTicket = 0;
    if (day === "Friday") {
      price = groupOfPeople * 10.9;
      priceForOneTicket = 10.9;
    } else if (day === "Saturday") {
      price = groupOfPeople * 15.6;
      priceForOneTicket = 15.6;
    } else {
      price = groupOfPeople * 16;
      priceForOneTicket = 16;
    }

    if (groupOfPeople >= 100) {
      price -= priceForOneTicket * 10;
    }
  } else {
    if (day === "Friday") {
      price = groupOfPeople * 15;
    } else if (day === "Saturday") {
      price = groupOfPeople * 20;
    } else {
      price = groupOfPeople * 22.5;
    }

    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
      price *= 0.95;
    }
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}

// #3.
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function leapYearDate(year) {
  let date = new Date(1984, 1, 1);
  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);
  console.log(date.getDate());

  if (date.getDate() === 29) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

//  #4.

function printAndSum(start, end) {
  let sum = 0;
  let buff = "";
  for (let i = start; i <= end; i++) {
    sum += i;
    buff += i + " ";
  }
  console.log(buff.trim());
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);

// #5.

function multiplicationTable(x) {
  for (i = 1; i <= 10; i++) {
    console.log(`${x} X ${i} = ${x * i}`);
  }
}

multiplicationTable(6);

// #6.

function sumDigits(num) {
  let numAsString = String(num);
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    let currentNum = Number(numAsString[i]);
    sum += currentNum;
  }
  console.log(sum);
}

sumDigits(1234567);

// #7.

function charToString(a, b, c) {
  console.log("" + a + b + c);
}

// 8.

function reverseChar(a, b, c) {
  console.log(c + " " + b + " " + a);
}
reverseChar(5, "a", "x");

// #11.

function roadRadar(speed, area) {
  switch (area) {
    case "motorway":
      if (speed <= 130) {
        console.log(`Drivind ${speed} km/h in a 130 zone.`);
      } else {
        let diff = Math.abs(speed - 130);
        let status = "";
        if (diff <= 20) {
          status = "speeding";
        } else if (diff <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of 130 - ${status}`
        );
      }
      break;
    case "interstate":
      if (speed <= 90) {
        console.log(`Drivind ${speed} km/h in a 90 zone.`);
      } else {
        let diff = Math.abs(speed - 90);
        let status = "";
        if (diff <= 20) {
          status = "speeding";
        } else if (diff <= 40) {
          status = "excessive speeding";
        } else {
          status = "reckless driving";
        }
        console.log(
          `The speed is ${diff} km/h faster than the allowed speed of 90 - ${status}`
        );
      }
      break;
    case "city":
      break;
    case "residential":
      break;
  }
}

// #12.

function cookingByNumber(numAsString, op1, op2, op3, op4, op5) {
  let arrOp = [];
  arrOp.push(op1);
  arrOp.push(op2);
  arrOp.push(op3);
  arrOp.push(op4);
  arrOp.push(op5);

  console.table(arrOp);

  for (let i = 0; i < arrOp.length; i++) {
    let num = Number(numAsString);
    let currentOperation = arrOp[i];

    let operationObject = {
        chop: (num) => num /2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }

    switch (currentOperation) {
      case "chop":
        num /= 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num += 1;
        break;
      case "bake":
        num *=3;
        break;
      case "fillet":
        num *= 0.8;
        break;
    }
    console.log(num);
  }
}

cookingByNumber("32", "chop", "chop", "chop", "chop", "chop");
