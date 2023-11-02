function leapYear(year){
    // year, month, date -> Note: months are counted from 0
    let date = new Date(year, 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1)

    if (date.getDate() === 29) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

leapYear(4)