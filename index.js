// Add your functions here
function map(array, callback){
    const r = [];
    for (let i = 0; i < array.length; i++) {
        const theElement = array[i];
        r.push(callback(theElement));
    }
    return r;
}

function reduce(array, callback, start) {
    let total;
    if (start) {
        total = start;
        for (let i = 0; i < array.length; i++) {
            total = callback(array[i], total);
    }
    return total;
    } else {
        total = array[0];
        for (let i = 1; i < array.length; i++) {
            total = callback(array[i], total);
        }
        return total;
    }
}