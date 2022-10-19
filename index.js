function writeCards(arrayOfStringNames, eventName) {
    let newArray = [];

    for(let i = 0; i < arrayOfStringNames.length; i++) {
        newArray.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`);    
    }

    return newArray;
}

function countDown(integer) {
    let i = integer;
    
    while(i >= 0) {
        console.log(i);
        i--;
    }
}