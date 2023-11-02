function roadRadar(speed, area){
    let isSpeedingUp = false;
    let limit = 0;
    let diff = 0;
    let status = "";

    switch(area){
        case "motorway":
            limit = 130;
        break;
        case "interstate":
            limit = 90;
        break;
        case "city":
            limit = 50;
        break;
        case "residential":
            limit = 20;
        break;
    }
    if (speed > limit) {
        isSpeedingUp = true;
        diff = Math.abs(speed-limit);
    }
    
    if (diff <= 20){
        status = 'speeding'
    } else if (diff <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving';
    }

    if (!isSpeedingUp){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else{
        console.log(`The speed is ${diff} km/h than the allowed speed of ${limit}`)
    }
}