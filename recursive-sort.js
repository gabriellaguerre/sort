function recursiveSort(arr) {

    if (arr.length <= 1) return arr;

    let maxIndex = 0;
    for (let i = 1 ; i < arr.length ; i++) {
        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }
    const maxValue = arr[maxIndex];
    arr.splice(maxIndex, 1);

    arr = recursiveSort(arr);

    arr.push(maxValue);

    return arr;
}

// let arr = [1, 4, 2, 5, 3, 8]
// console.log(recursiveSort(arr))

module.exports = recursiveSort
