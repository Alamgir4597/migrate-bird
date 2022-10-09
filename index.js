function migratoryBirds(arr) {
    // Write your code here
    let myHash = new Map();
    let maxValue = 0;
    let setKey = 0;
    for (let i = 0; i < arr.length; i++) {
        if (myHash.has(arr[i]) === true) {
            myHash.set(arr[i], (myHash.get(arr[i])) + 1);
        } else {
            myHash.set(arr[i], 1);
        }
    };
    for (const [key, value] of myHash.entries()) {
        if (value > maxValue) {
            maxValue = value;
            setKey = key;
        } else if

            (value === maxValue && setKey > key) {
            setKey = key;
        }
    }
    return [setKey];
}



const arr = [1, 1, 2, 2, 4, 4, 4, 4, 5];
console.log(migratoryBirds(arr));

