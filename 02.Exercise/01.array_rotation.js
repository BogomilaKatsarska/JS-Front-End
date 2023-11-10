function arrayStringDemo(array, rotations) {

    for (let index=0; index < rotations; index++) {
        let elementToTake = array.shift();
        array.push(elementToTake);
    }
    console.log(array.join(' '));
}

arrayStringDemo([51, 47, 32, 61, 21], 2);