function arrayStringDemo(list){

    list.sort((a, b) => {
        // we use localCompare in order to sort alphabetically
        return a.localeCompare(b);
    });
    
    let index = 1;

    for (const name of list){
        console.log(`${index}.${name}`);
        index++;
    }
}