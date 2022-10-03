const recursiveSort = require('./recursive-sort.js')

function quicksort(arr) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return

    // Pick a pivot
    let pivot = arr[0]
    let left = []
    let right = []
    // Put all values smaller than the pivot to the `left`
    // Put all values larger than the pivot to the `right`

    for (let i = 1; i < arr.length; i++) {
        let ele = arr[i]
        if (ele < pivot) {
            left.push(ele)
        } else {
            right.push(ele)
        }
    }

    // Sort the left half
    let leftS = recursiveSort(left)

    // Sort the right half
    let rightS = recursiveSort(right)

    // Return the array with the left, pivot, and right values
    let first = leftS.concat(pivot)

    return first.concat(rightS)
}

let arr = [5, 3, 1, 10, 2, 7, 6, 4, 13, 9]
console.log(quicksort(arr))
