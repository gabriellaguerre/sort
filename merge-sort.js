const recursiveSort = require('./recursive-sort.js')

function mergesort(arr) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr

    // Divide the array in half
    let leftHalf = []
    let rightHalf = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            leftHalf.push(arr[i])
        } else {
            rightHalf.push(arr[i])
        }
    }

    // Recursively sort the left half
    let sortedLeft = recursiveSort(leftHalf)

    // Recursively sort the right half
    let sortedRight = recursiveSort(rightHalf)


    // Merge the halves together and return
    return sortedLeft.concat(sortedRight)
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

    // Create an empty return array
    let merged = []
    let i = 0
    let j = 0
    // Point to the first value of each array
    let pointerA = arrA[i]
    let pointerB = arrB[j]

    // While there are still values in each array...
    while (arrA.length - i !== 0 && arrB.length - j !== 0) {

        pointerA = arrA[i]
        pointerB = arrB[j]

        // Compare the first values of each array
        // Add the smaller value to the return array
        // Move the pointer to the next value in that array

        if (pointerA < pointerB) {
            merged.push(pointerA)
            i++
        }
        if (pointerA > pointerB) {
            merged.push(pointerB)
            j++
        }

        if (arrA.length - i === 0 && arrB.length - j > 0) {
            merged.push(pointerB)
            j++
        }
        if (arrA.length - i > 0 && arrB.length - j === 0) {
            merged.push(pointerA)
            i++
        }

    }
    // Return the merged array
    return merged
}

let arr = [1, 10]
let arr2 = [2, 7]
console.log(merge(arr, arr2))
