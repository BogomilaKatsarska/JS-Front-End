function cityInfo(city){
    let entries = Object.entries(city);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}


function getObjectData(obj){
    for (const entry of Object.entries(obj)){
        const [key, value] = entry;
        console.log(`${key} - ${value}`);
    }
}