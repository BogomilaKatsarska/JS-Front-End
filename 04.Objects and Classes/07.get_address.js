function getAddress(input) {
    const addressList = {};

    for (const person of input) {
        const [name, address] = person.split(":");
        addressList[name] = address;
    }

    const peopleNames = Object.entries(addressList)
    const sortedPeople = peopleNames.sort();

    for (const key of sortedPeople) {
        console.log(`${key[0]} -> ${key[1]}`)
    }
    console.log(peopleNames.sort());
}