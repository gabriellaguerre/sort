
function bubbleHelp(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let tmp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = tmp
        }
    }
    return arr
}


function bubbleSort(arr) {
    let arr2 = bubbleHelp(arr)

    for (let i = 0; i < arr2.length; i++) {
        if (arr[i] > arr[i + 1]) {
            arr = bubbleHelp(arr)
        }
    }
    return arr2
}


// let arr = [5, 3, 1, 10, 2, 7, 6, 4, 13, 9]
// console.log(bubbleSort(arr))
